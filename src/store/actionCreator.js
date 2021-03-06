import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionType'

export const getChangeInputValueAction = (value) => ({
	type: CHANGE_INPUT_VALUE,
	value: value
})
export const getAddTodoItemAction = () => ({
	type: ADD_TODO_ITEM
})
export const getDeleteTodoItemAction = (index) => ({
	type: DELETE_TODO_ITEM,
	index: index
})