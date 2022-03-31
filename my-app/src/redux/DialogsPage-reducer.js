const ADD_POST_NEW='ADD-POST-NEW'
const UPDATE_NEW_MESSAGE_TEXT='UPDATE-NEW-MESSAGE-TEXT'

let initialState= {
    messages: [
        {message: "Hello guys!", id: "1"},
        {message: "How are you dudes?", id: "2"},
        {message: "Hello Everbody", id: "3"},
        {message: "#SweetHome", id: "4"},
        {message: "Where is my phone", id: "5"}
    ],
    dialogs: [
        {id: "1", name: "Levon"},
        {id: "2", name: "Vazgen"},
        {id: "3", name: "Gor"},
        {id: "4", name: "Aren"},
        {id: "5", name: "Pargev"},
    ],
    newerMessage: ""
}

const dialogsPageReducer=(state=initialState, action)=>{
    switch (action.type) {
        case ADD_POST_NEW:
            let newMessage={
                message: state.newerMessage,
                id: "1"
            };
            state.messages.push(newMessage)
            state.newerMessage="";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newerMessage=action.postNewMessage;
            return state;
        default :
            return state;
    }
}
export const addMessageActionCreator=()=>{
    return {type: ADD_POST_NEW}
}
export const addNewMessageTextActionCreator=(messageVal)=>{
    return {type: UPDATE_NEW_MESSAGE_TEXT, postNewMessage: messageVal}
}

export default dialogsPageReducer