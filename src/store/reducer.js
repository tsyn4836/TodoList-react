import {
	CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST
} from './actionType'

const defaultState = {
	inputValue: '',
	list: []
}

export default (state = defaultState, action) => {
	if (action.type === CHANGE_INPUT_VALUE) {
		// const newState = JSON.parse(JSON.stringify(state))
		// 上面语句是深拷贝，下面语句是浅拷贝
		// 这里使用浅拷贝就行了
		const newState = { ...state }
		newState.inputValue = action.value
		return newState
	}
	if (action.type === ADD_TODO_ITEM) {
		const newState = { ...state }
		newState.list.push(newState.inputValue)
		newState.inputValue = ''
		return newState
	}
	if (action.type === DELETE_TODO_ITEM) {
		const newState = { ...state }
		newState.list.splice(action.index, 1)
		return newState
	}
	if (action.type === INIT_LIST) {
		const newState = { ...state }
		newState.list = action.data
		return newState
	}
	return state
}