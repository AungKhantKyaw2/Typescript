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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const axios_1 = __importDefault(require("axios"));
class PostService {
    constructor() {
        this.api = axios_1.default.create({
            baseURL: "https://jsonplaceholder.typicode.com",
            timeout: 5000
        });
    }
    ;
    getPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.api.get('/posts');
            return response.data;
        });
    }
    getPostId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.api.get(`/posts/${id}`);
            return response.data;
        });
    }
    createPost(newPost) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.api.post('/posts', newPost);
            return response.data;
        });
    }
    updatePost(id, updatePost) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.api.put(`/posts/${id}`, updatePost);
            return response.data;
        });
    }
    deletepost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.api.delete(`/posts/${id}`);
            return `Post with ID ${id} deleted successfully`;
        });
    }
}
exports.PostService = PostService;
