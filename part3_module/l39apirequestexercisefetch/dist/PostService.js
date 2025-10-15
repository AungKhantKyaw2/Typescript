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
const node_fetch_1 = __importDefault(require("node-fetch"));
class PostService {
    constructor() {
        this.baseURL = `https://jsonplaceholder.typicode.com/posts`;
    }
    getPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, node_fetch_1.default)(this.baseURL);
            if (!response.ok)
                throw new Error("Failed to fetch posts.");
            const data = (yield response.json());
            return data;
        });
    }
    getPostById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, node_fetch_1.default)(`${this.baseURL}/${id}`);
            if (!response.ok)
                throw new Error("Failed to fetch posts.");
            const data = (yield response.json());
            return data;
        });
    }
    createPost(newPost) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, node_fetch_1.default)(this.baseURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newPost)
            });
            if (!response.ok)
                throw new Error("Failed to fetch posts.");
            const data = (yield response.json());
            return data;
        });
    }
    updatePost(id, updatePost) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, node_fetch_1.default)(`${this.baseURL}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatePost)
            });
            if (!response.ok)
                throw new Error("Failed to fetch posts.");
            const data = (yield response.json());
            return data;
        });
    }
    deletepost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, node_fetch_1.default)(`${this.baseURL}/${id}`, { method: "DELETE" });
            if (!response.ok)
                throw new Error("Failed to fetch posts.");
            return `Post with ID ${id} deleted successfully`;
            ;
        });
    }
}
exports.PostService = PostService;
