import axios ,{AxiosInstance} from "axios";


interface Post{
    id:number;
    userId:number;
    title:string;
    body:string;
}


export class PostService{
    private api:AxiosInstance;

    constructor(){
        this.api= axios.create({
            baseURL:"https://jsonplaceholder.typicode.com",
            timeout:5000
        });
    }

        //get posts
  ;

        async getPosts():Promise<Post[]>{
            
            const response = await this.api.get<Post[]>('/posts');
            return response.data;
        }

        //get post by id 
        async getPostId(id:number):Promise<Post>{

            const response = await this.api.get<Post>(`/posts/${id}`);
            return response.data;
        }

        //create post(method 1 id:?)
        // async createPost(newPost:Post):Promise<Post>{
        //     const response = await this.api.post<Post>('/posts',newPost);
        //     return response.data;
        // }

        //create post(method 2 id:number)
        async createPost(newPost:Omit<Post,"id">):Promise<Post>{
            const response = await this.api.post<Post>('/posts',newPost);
            return response.data;
        }
}


// interface Post{
//     id:number;
//     userId:number;
//     title:string;
//     body:string;
// }

// type PostwithoutId = omit<Post,"id">;

// interface Post{
//  
//     userId:number;
//     title:string;
//     body:string;
// }


//1PS
