"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const PostService_1 = require("./PostService");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const postserviceObj = new PostService_1.PostService();
        try {
            console.log("Fetching all posts");
            const posts = yield postserviceObj.getPosts();
            console.log(`Total posts : ${posts.length}`);
            console.log(`Fetching 2 posts :`, posts.slice(0, 2));
            console.log("\n\n Fetching post by ID");
            const post = yield postserviceObj.getPostById(5);
            console.log("Post 5 :", post);
            console.log("\n\n Fetching a new post");
            const newpost = yield postserviceObj.createPost({
                userId: 10,
                title: "My New Post 10",
                body: "This is a test post created with Axios."
            });
            console.log("created post successfully", newpost);
            console.log("\n\n Upadting a new post");
            const editpost = yield postserviceObj.updatePost(10, {
                title: "My New Post 1"
            });
            console.log("Update Post successfully : ", editpost);
            console.log("\n\n Deleting a post");
            const message = yield postserviceObj.deletepost(1);
            console.log(message);
        }
        catch (err) {
            console.error("Error :", err.message);
        }
    });
}
main();
