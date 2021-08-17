import axios from 'axios';


const url = 'http://localhost:2000/posts';


<<<<<<< Updated upstream
export const fetchPosts = () => axios.get(url);
=======
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
>>>>>>> Stashed changes
