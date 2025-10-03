import { PostService } from "./PostService";

async function main(){

    const postserviceObj = new PostService();

    try{

        console.log("Fetching all posts");
        const posts = await postserviceObj.getPosts();
        console.log(`Total posts : ${posts.length}`);
        console.log(`Fetching 2 posts :`,posts.slice(0,2));

        console.log("\n\n Fetching post by ID");
        const post =await postserviceObj.getPostId(5);
        console.log("Post 5 :",post);

        console.log("\n\n Fetching a new post");
        const newpost = await postserviceObj.createPost({
              userId:10,
              title:"My New Post 10",
              body:"This is a test post created with Axios."
        });
        console.log("created post successfully", newpost);
    }catch(err:any){
            console.error("Error :" ,err.message);
    }

}

main();