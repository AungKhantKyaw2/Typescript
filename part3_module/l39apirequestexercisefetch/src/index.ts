import { PostService } from "./PostService";

async function main(){

    const postserviceObj = new PostService();

    try{

        console.log("Fetching all posts");
        const posts = await postserviceObj.getPosts();
        console.log(`Total posts : ${posts.length}`);
        console.log(`Fetching 2 posts :`,posts.slice(0,2));

        console.log("\n\n Fetching post by ID");
        const post =await postserviceObj.getPostById(5);
        console.log("Post 5 :",post);

        console.log("\n\n Fetching a new post");
        const newpost = await postserviceObj.createPost({
              userId:10,
              title:"My New Post 10",
              body:"This is a test post created with Axios."
        });
        console.log("created post successfully", newpost);

        console.log("\n\n Upadting a new post");
        const editpost = await postserviceObj.updatePost(10,{
             title:"My New Post 1"
        });
    
        console.log("Update Post successfully : ",editpost);
    
        console.log("\n\n Deleting a post");
        const message = await postserviceObj.deletepost(1);
        console.log(message);
    }catch(err:any){
            console.error("Error :" ,err.message);
    }

   
}

main();