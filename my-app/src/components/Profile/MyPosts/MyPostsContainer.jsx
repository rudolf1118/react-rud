import React from "react";
import {addPostActionCreator} from "../../../redux/ProfilePage-reducer";
import {addNewPostTextActionCreator} from "../../../redux/ProfilePage-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer=(props)=>{
    debugger;
    let state=props.store.getState()
    let addPost=()=>{
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange=(textVal)=>{
        let action = props.store.dispatch(addNewPostTextActionCreator(textVal));
        props.store.dispatch(action);
    };

    return (<MyPosts newPostText={state.profilePage.newPostText}
                     updateNewPostChange={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}/>)
}
export default MyPostsContainer;
