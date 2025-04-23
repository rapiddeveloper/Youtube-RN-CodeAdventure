import { Post } from "../../../Domain/Models/Post";
import { VideosAPIService } from "../../../services/VideosAPIService";

abstract class PostRepositoryAbstract {

   // service!: VideosAPIService;

    abstract getAllPosts():  Promise<{posts?: Post[], error?: Error}>;
    abstract getPostsByIds(ids: string[]): Promise<any[]>;
   
}

export default PostRepositoryAbstract;