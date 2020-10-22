import { createSlice } from '@reduxjs/toolkit'
import { LIST_QUIZ } from 'containers/QuizApp/const'

const REDUCER_NAME = 'lookBackReducer'

const lookBackReducer = createSlice({
    name: REDUCER_NAME,
    initialState: {
        userName: 'Bạn',
        gender: 0,
        isShowMultiShare: false,
        userInfo: {},
        currentIndex: 0,
        listImages: [],
        listQuiz: LIST_QUIZ,
        answerSheet: {},
        listMerChants: [],
        listProducts: {},
        score: null,
        hashTag: '',
        navigateActionVisible: true
    },
    reducers: {
        saveUserInfoRequest: (state, actions) => {
            state.userInfo = actions?.payload
        },
        saveUserNameRequest: (state, actions) => {
            state.userName = actions?.payload
        },
        saveHashTagRequest: (state, actions) => {
            state.hashTag = actions?.payload
        },
        saveScoreRequest: (state, actions) => {
            state.score = actions?.payload
        },
        saveGenderRequest: (state, actions) => {
            state.gender = actions?.payload
        },
        saveAnswerSheetRequest: (state, actions) => {
            const { key, value } = actions?.payload
            state.answerSheet[key] = value
        },
        setMultiShareStatusRequest: (state) => {
            state.isShowMultiShare = !state.isShowMultiShare
        },
        setCurrentIndexRequest: (state, actions) => {
            state.currentIndex = actions?.payload
        },
        pushBase64ImageRequest: (state, actions) => {
            state.listImages = state.listImages.concat(actions?.payload)
        },
        resetAnswerSheetRequest: (state) => {
            state.answerSheet = {}
        },
        saveListMerChantsRequest: (state, actions) => {
            state.listMerChants = actions?.payload
        },
        saveListProductsRequest: (state, actions) => {
            const { data, id } = actions?.payload || {}
            state.listProducts[id] = data
        },
        toggleNavigateAction: (state, actions) => {
            state.navigateActionVisible = actions?.payload
        }
    },
})

const { reducer, actions, selectors } = lookBackReducer
export { reducer, actions, selectors, lookBackReducer, REDUCER_NAME }
