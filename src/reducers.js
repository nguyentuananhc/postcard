import { combineReducers } from 'redux'

import { reducer as postCardReducer } from './containers/PostCardMaker/slice'

export default combineReducers({
    postCardReducer,
})
