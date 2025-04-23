abstract class PostRepositoryAbstract {

    abstract getAllPosts(): Promise<any[]>;
    abstract getPostsByIds(ids: string[]): Promise<any[]>;
   
}