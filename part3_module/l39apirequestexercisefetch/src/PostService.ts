import fetch from "node-fetch";

interface Post{
    id:number;
    userId:number;
    title:string;
    body:string;
}



export class PostService{
    private baseURL = `https://jsonplaceholder.typicode.com/posts`;


        //get posts
  

        async getPosts():Promise<Post[]>{
            
            const response = await fetch(this.baseURL);
            // console.log(response);

            if(!response.ok) throw new Error("Failed to fetch posts.");
            // return response.json();


            const datas = (await response.json()) as Post[];
            return datas;
        }


        //get post by id 

        async getPostById(id:number):Promise<Post>{
            const response = await fetch(`${this.baseURL}/${id}`);
            if(!response.ok) throw new Error("Failed to fetch posts.");
            // return response.json();
            //OR
                 const data = (await response.json()) as Post;
            return data;
        }
       
        //create post (method 2 id :number)

        async createPost(newPost:Omit<Post,"id">):Promise<Post>{

            const response = await fetch(this.baseURL,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(newPost)
            });

            if(!response.ok) throw new Error("Failed to fetch posts.");
            // return response.json();

                 const data = (await response.json()) as Post;
            return data;
        }

        //updatepost


        async updatePost(id:number,updatePost:Partial<Omit<Post,"id">>):Promise<Post>{

            const response = await fetch(`${this.baseURL}/${id}`,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(updatePost)
            });
           
            if(!response.ok) throw new Error("Failed to fetch posts.");
            // return response.json();

                 const data = (await response.json()) as Post;
            return data;
        }

        //delete post

        async deletepost(id:number):Promise<string>{

            const response = await fetch(`${this.baseURL}/${id}`,{method:"DELETE"});

            if(!response.ok) throw new Error("Failed to fetch posts.");
            return `Post with ID ${id} deleted successfully`;;
        }
}   

//8FT


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
