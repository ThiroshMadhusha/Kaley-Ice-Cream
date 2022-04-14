import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import { inventoryCreateReducer, inventoryDeleteReducer, inventoryListReducer, inventoryUpdateReducer } from "./reducers/inventorysReducers";

const reducer = combineReducers({
    //Add user reducer
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  inventoryList: inventoryListReducer,
  inventoryCreate: inventoryCreateReducer,
  inventoryUpdate: inventoryUpdateReducer,
  inventoryDelete: inventoryDeleteReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;


const initialState = {
  userLogin: { userInfoFromStorage },


};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;