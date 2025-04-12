// To parse this data:
//
//   import { Convert, YoutubeResponse } from "./file";
//
//   const youtubeResponse = Convert.toYoutubeResponse(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface YoutubeVideosResponse {
    kind:          string;
    etag:          string;
    items:         Video[];
    nextPageToken: string;
    pageInfo:      PageInfo;
}

export interface Video {
    kind:       string;
    etag:       string;
    id:         string;
    snippet:    Snippet;
    statistics: Statistics;
}

export interface Snippet {
    publishedAt:          string;
    channelId:            string;
    title:                string;
    description:          string;
    thumbnails:           Thumbnails;
    channelTitle:         string;
    tags?:                 string[];
    categoryId:           string;
    liveBroadcastContent: string;
    localized:            Localized;
    defaultAudioLanguage?: string;
}

export interface Localized {
    title:       string;
    description: string;
}

export interface Thumbnails {
    default:  Thumbnail;
    medium:   Thumbnail;
    high:     Thumbnail;
    standard: Thumbnail;
    maxres:   Thumbnail;
}

export interface Thumbnail {
    url:    string;
    width:  number;
    height: number;
}

export interface Statistics {
    viewCount:     string;
    likeCount:     string;
    favoriteCount: string;
    commentCount:  string;
}

export interface PageInfo {
    totalResults:   number;
    resultsPerPage: number;
}

 