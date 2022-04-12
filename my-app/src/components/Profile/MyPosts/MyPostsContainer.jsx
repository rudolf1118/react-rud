import React from "react";
import {addPostActionCreator} from "../../../redux/ProfilePage-reducer";
import {addNewPostTextActionCreator} from "../../../redux/ProfilePage-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";


const MyPostsContainer=(props)=>{
    return (
        <StoreContext.Consumer>
            {
            (store)=>{
                let state=store.getState()
                let addPost=()=>{
                    store.dispatch(addPostActionCreator());
                }
                let onPostChange=(textVal)=>{
                    let action=store.dispatch(addNewPostTextActionCreator(textVal));
                    store.dispatch(action);
                };
                return <MyPosts newPostText={state.profilePage.newPostText}
                         updateNewPostChange={onPostChange}
                         addPost={addPost}
                         posts={state.profilePage.posts}/>
            }}
        </StoreContext.Consumer>
    )
}
//
// const mapStateToProps =(state)=> {
// return {
//     posts:state.profilePage.posts
// }
// }
//
// const mapDispatchToProps= (dispatch)=>{
//     return {
//         updateNewPostChange: (textVal)=>{
//             dispatch(addNewPostTextActionCreator(textVal))
//         },
//         addPost: ()=>{
//             dispatch(addPostActionCreator());
//         }
//     }
// }
//
// const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
