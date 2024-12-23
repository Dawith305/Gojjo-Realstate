import apiRequest from "@/api/apiRequest";

export default {
    async getAllPosts() {

        return apiRequest("/posts/posts/");
    },
    async getAllCategories() {
        return apiRequest("/posts/categories/");
    },
    async getAllUsers() {
        return apiRequest("/users/");
    }
}