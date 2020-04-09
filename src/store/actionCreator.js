import axios from 'axios'
import {
	CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM,
	INIT_LIST
} from './actionType'

export const getChangeInputValueAction = (value) => ({
	type: CHANGE_INPUT_VALUE,
	value
})
export const getAddTodoItemAction = () => ({
	type: ADD_TODO_ITEM
})
export const getDeleteTodoItemAction = (index) => ({
	type: DELETE_TODO_ITEM,
	index
})
export const getInitListAction = (data) => ({
	type: INIT_LIST,
	data
})

// thunk中间件使得action也可以是个函数
export const getTodoList = () => {
	return (dispatch) => {
		axios.get('http://localhost:9999/api/todolist2')
			.then(res => {
				// console.log(res.data)
				const action = getInitListAction(res.data)
				dispatch(action)
			})
	}
}