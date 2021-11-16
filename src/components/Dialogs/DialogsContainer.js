import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
//
//
// const DialogsContainer = () => {
//     return (
//
//         <StoreContext.Consumer>{
//             (store) => {
//                 const state = store.getState().dialogsPage
//
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator());
//                 }
//
//                 let onNewMessageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyCreator(body));
//                 }
//                 return (
//                     <Dialogs
//                         updateNewMessageBodyCreator={onNewMessageChange}
//                         sendMessageCreator={onSendMessageClick}
//                         dialogsPage={state}
//                     />)
//             }
//         }
//
//         </StoreContext.Consumer>
//     );
// };

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBodyCreator: () => {
            dispatch(sendMessageCreator())
        },
        sendMessageCreator: (body) =>{
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;