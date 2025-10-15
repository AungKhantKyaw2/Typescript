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
        //updaate post

        async updatePost(id:number,updatePost:Partial<Omit<Post,"id">>):Promise<Post>{
            const response = await this.api.put<Post>(`/posts/${id}`,updatePost);
            return response.data;
        }

        async deletepost(id:number):Promise<string>{
            await this.api.delete(`/posts/${id}`);
            return `Post with ID ${id} deleted successfully`;
        }
}   


// interface Post{
//     id:number;
//     userId:number;
//     title:string;
//     body:string;
// }

// type PostwithoutId = omit<Post,"id">;

//Omit
// interface Post{
//  
//     userId:number;
//     title:string;
//     body:string;
// }

//=> partial + Omit 


// interface Post{
//     
//     userId?:number;
//     title?:string;
//     body?:string;
// }




//1PS
