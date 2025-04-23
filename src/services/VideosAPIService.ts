import axios, { AxiosError, isAxiosError } from "axios";
import { Result, ResultType } from "../@types/Result";
import { DataObj } from "../@types/DataObj";
import { YoutubeVideosResponse  } from "./api/models/YoutubeResponse";
import { YoutubeChannelsResponse } from "./api/models/YoutubeChannelsResponse";

export class VideosAPIService {

    private apiKey = "AIzaSyB-8s0cTHI5xXxD-WjqpwRJm2NpBsmJb_Q"
    private baseURL = "https://www.googleapis.com"
    constructor() {
        
    }

    async getYoutubeVideos(): Promise<Result<YoutubeVideosResponse, Error>> {
        const videosEndpointURL = `${this.baseURL}/youtube/v3/videos`

         const params = {
            part: "snippet,statistics",
            chart: "mostPopular",
            maxResults: 10,
            key: this.apiKey
        }

        try {
            let response = await axios.get<YoutubeVideosResponse>(videosEndpointURL, {params})
            return {
                value: response.data,
                type: ResultType.Success
            }
        } catch (error) {
        
            if (isAxiosError(error)) {
                return {
                    error: new Error(error.message),
                    type: ResultType.Failure
                }
            }
            return {
                error: (error as Error),
                type: ResultType.Failure
            }
        }
     }

     async getChannels(idList: string[]): Promise<Result<YoutubeChannelsResponse, Error>> {
        const channelsEndpointURL = `${this.baseURL}/youtube/v3/channels`

         const params: DataObj = {
            part: "snippet",
            key: this.apiKey
        }

        if (idList.length === 0) {
            params.maxResults = 10
        } else {
            params.id = idList.join(",")
        }
         try {
            let response = await axios.get<YoutubeChannelsResponse>(channelsEndpointURL, {params})
            
            return {
                value: response.data,
                type: ResultType.Success
            }
        } catch (error) {
            console.log(error)
            if (isAxiosError(error)) {
                return {
                    error: new Error(error.message),
                    type: ResultType.Failure
                }
            }
            return {
                error: (error as Error),
                type: ResultType.Failure
            }
        }
     }
}

let videosAPIService = new VideosAPIService()
export default videosAPIService