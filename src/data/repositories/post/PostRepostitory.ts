import { Post } from "../../../Domain/Models/Post";

class PostRepository extends PostRepositoryAbstract {

    async getPostsByIds(ids: string[]): Promise<Post[]> {
        return []
    }

    async getAllPosts(): Promise<Post[]> {
        return []
    }
}

export default PostRepository