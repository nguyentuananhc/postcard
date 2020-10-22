import { put, call, takeLatest } from 'redux-saga/effects'
// import auth from "../../services/auth";

function* getUserSaga({ payload }) {
    // const { data } = yield call(auth.login, payload);
    const token = ''
    // getFrom cookie or localStorage

    const { data } = yield call(Services.getUser, token, page, keyword)
    if (data) {
        yield put(
            actions.getUserSuccess({
                data: data?.data || {},
            })
        )
    } else {
        yield put(actions.getUserError())
    }
}

export default function* root() {
    // yield takeLatest(actions.getUserRequest, getUserSaga)
}
