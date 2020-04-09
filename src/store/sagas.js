import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionType'
import { getInitListAction } from './actionCreator'
import axios from 'axios'

function* getInitList() {
	try {
		const res = yield axios.get("http://localhost:9999/api/todolist2")
		const action = getInitListAction(res.data)
		yield put(action)
	} catch (e) {
		console.log(e)
	}
}

function* mySaga() {
	yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;