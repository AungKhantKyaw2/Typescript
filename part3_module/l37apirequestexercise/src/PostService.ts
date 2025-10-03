import axios from "axios";


interface Post{
    id?:number;
    userId:number;
    title:string;
    body:string;
}


export class PostService{
        //get posts
    private baseURL ="https://jsonplaceholder.typicode.com/posts";

        async getPosts():Promise<Post[]>{
            
            const response = await axios.get<Post[]>(this.baseURL);
            return response.data;
        }

        //get post by id 
        async getPostId(id:number):Promise<Post>{

            const response = await axios.get<Post>(`${this.baseURL}/${id}`);
            return response.data;
        }

        //create post
        async createPost(newPost:Post):Promise<Post>{
            const response = await axios.post<Post>(this.baseURL,newPost);
            return response.data;
        }
}