import {combineReducers, createStore} from "redux";
import profilePageReducer from "./ProfilePage-reducer";
import dialogsPageReducer from "./DialogsPage-reducer";
import sideBarReducer from "./SideBar-reducer";

let reducers = combineReducers({
    profileReducer:profilePageReducer,
    dialogsReducer:dialogsPageReducer,
    sideBarReducer:sideBarReducer
});

let store = createStore(reducers)

export default store;