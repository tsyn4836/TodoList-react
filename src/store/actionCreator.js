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