import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Post } from "../Domain/Models/Post"

type YoutubeTabStackParamList = {
    Home: undefined
    Shorts: undefined 
    Create: undefined
    Subscriptions: undefined
    Account: undefined
}

// RootStack 

export type RootStackParamsList = {   
    YoutubeTabs: undefined
    PostDetails: {
        post: Post
    }  
}

export type RootStackScreenProps<T extends keyof RootStackParamsList> = NativeStackScreenProps<RootStackParamsList, T>