const ADD_POST='ADD-POST'
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT'


let initialState= {
    posts: [
        {like: ((Math.floor(Math.random() * 100)) + ""), message: "Hello dudes,whats up?", name: "Levon"},
        {like: ((Math.floor(Math.random() * 100)) + ""), message: "It's my first post", name: "Aren"},
        {
            like: ((Math.floor(Math.random() * 100)) + ""),
            message: "Rouble course are so low",
            name: "Rehanyan Aida"
        },
        {
            like: ((Math.floor(Math.random() * 100)) + ""),
            message: "What is Express.js, please tell me about this =)",
            name: "Gor"
        }],
    newPostText: ""
}

const profilePageReducer=(state=initialState, action)=>{

    switch (action.type) {
        case ADD_POST:
            let newPost={
                like: ((Math.floor(Math.random() * 100)) + ""),
                message: state.newPostText,
                name: "Name Surname"
            };
            state.posts.unshift(newPost);
            state.newPostText=""
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText=action.postMessage;
            return state;
        default :
            return state;
    }
}
export const addPostActionCreator=()=>{
    return {type: ADD_POST}
}
export const addNewPostTextActionCreator=(textVal)=>{
    return {type: UPDATE_NEW_POST_TEXT, postMessage: textVal}
}

export default profilePageReducer;