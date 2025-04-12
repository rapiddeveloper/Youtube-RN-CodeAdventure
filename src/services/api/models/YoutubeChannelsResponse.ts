import { Thumbnails } from "./YoutubeResponse";

export interface YoutubeChannelsResponse {
    kind:     string;
    etag:     string;
    pageInfo: PageInfo;
    items:    Channel[];
}

export interface Channel {
    kind:    string;
    etag:    string;
    id:      string;
    snippet: Snippet;
}

export interface Snippet {
    title:           string;
    description:     string;
    customUrl:       string;
    publishedAt:     string;
    thumbnails:      ChannelThumbnails;
    defaultLanguage: string;
    localized:       Localized;
}

export interface Localized {
    title:       string;
    description: string;
}

export interface ChannelThumbnails {
    default: ChannelThumbnail;
    medium:  ChannelThumbnail;
    high:    ChannelThumbnail;
}

export interface ChannelThumbnail {
    url:    string;
    width:  number;
    height: number;
}

 

export interface PageInfo {
    totalResults:   number;
    resultsPerPage: number;
}

 