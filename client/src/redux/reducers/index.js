import { combineReducers } from "redux";

import postsReducer from "./posts";
import authReducer from "./auth";
import communityReducer from "./community";
import moderationReducer from "./moderation";
import userReducer from "./user";


const rootReducer = combineReducers({
  posts: postsReducer,
  auth: authReducer,
  community: communityReducer,
  moderation: moderationReducer,
  user: userReducer,
  
});

export default rootReducer;
