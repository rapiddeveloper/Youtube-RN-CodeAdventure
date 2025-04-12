import { Thumbnails } from "../../services/api/models/YoutubeResponse"

export enum MediaKind {
    video,
    photo,
    article
}
export interface Post {
    id: string
    title: string
    description: string
    thumbnail: Thumbnails
    mediaUrl: string
    mediaKind: MediaKind
    viewCount: string
    channelProfileURL: string 
    publishedAt: string
    channelTitle: string
}