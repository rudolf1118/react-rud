import profilePageReducer from "./ProfilePage-reducer";
import dialogsPageReducer from "./DialogsPage-reducer";
import sideBarReducer from "./SideBar-reducer";

let store={
    _state: {
        dialogsPage: {
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
        },

        profilePage: {
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
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._render=observer;
    },
    _render() {
        console.log('State changed')
    },
    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        // this._state.sidebar = sideBarReducer(this._state.sidebar, action);

        this._render(this._state)
    }
}
export default store;
window.store=store;