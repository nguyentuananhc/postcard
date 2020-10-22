import { createSlice } from '@reduxjs/toolkit'

const REDUCER_NAME = 'postCardReducer'

const postCardReducer = createSlice({
    name: REDUCER_NAME,
    initialState: {
        userName: 'Bạn',
    },
    reducers: {
        saveUserNameRequest: (state, actions) => {
            state.userName = actions?.payload
        },
    },
})

const { reducer, actions, selectors } = postCardReducer
export { reducer, actions, selectors, postCardReducer, REDUCER_NAME }
