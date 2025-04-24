import { Post } from "../../Domain/Models/Post";

// Generated with util/create-view.js
export interface HomeProps {};
export interface HomeViewProps {
    posts: Post[]
    onLoadmorePosts: () => Promise<void>
};
