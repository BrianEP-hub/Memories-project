export default (posts = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
<<<<<<< Updated upstream
            return posts;
        case 'CREATE': 
            return posts;
=======
            return action.payload;
        case 'CREATE': 
            return [...posts, action.payload];
>>>>>>> Stashed changes
        default:
            return posts;
    }
}