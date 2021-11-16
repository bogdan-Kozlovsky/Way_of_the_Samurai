import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";

//
// const MyPostContainer = () => {
//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 let state = store.getState()
//
//                 const addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }
//
//                 let onPostChange = (text) => {
//                     let action = updateNewPostTextActionCreator(text);
//                     store.dispatch(action);
//                 }
//                 return (
//                     <div>
//                         <MyPost
//                             posts={state.profilePage.posts}
//                             newPostChange={state.profilePage.newPostText}
//                             addPost={addPost}
//                             updateNewPostText={onPostChange}
//                         />
//                     </div>
//                 )
//             }
//         }
//
//         </StoreContext.Consumer>
//     );
// };
const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostChange: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }
    }
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer;