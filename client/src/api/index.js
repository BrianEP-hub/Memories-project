import axios from 'axios';


const url = 'http://localhost:2000/posts';


<<<<<<< Updated upstream
export const fetchPosts = () => axios.get(url);
=======
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
>>>>>>> Stashed changes
