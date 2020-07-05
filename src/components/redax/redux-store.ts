import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
let reducers = combineReducers({
    profileReducer:profileReducer,
    dialogsReducer:dialogsReducer,
    usersPage:usersReducer
});

let store = createStore(reducers);
export type appStateType = ReturnType<typeof reducers>

export default store;

