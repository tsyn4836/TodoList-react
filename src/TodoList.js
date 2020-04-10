import React from 'react'
import { connect } from 'react-redux'
import * as actionCreator from './store/actionCreator'

function TodoList(props) {
	const { inputValue, list, changeInputValue, handleFormSubmit, deleteTodoItem } = props
	return (
		<div>
			<form onSubmit={(e) => handleFormSubmit(e, inputValue)}>
				<input
					value={inputValue}
					onChange={changeInputValue}
				/>
				<button>提交</button>
			</form>
			<ul>
				{
					list.map((item, index) => {
						return (
							<li
								key={index}
								onClick={() => deleteTodoItem(index)}
							>{item}</li>
						)
					})
				}
			</ul>
		</div>
	)
}


const mapStateToProps = (state) => {
	return {
		inputValue: state.inputValue,
		list: state.list
	}
}

const mapDispatchToProps = (dispatch) => {
	const { getChangeInputValueAction, getAddTodoItemAction, getDeleteTodoItemAction } = actionCreator
	return {
		changeInputValue(e) {
			const action = getChangeInputValueAction(e.target.value)
			dispatch(action)
		},

		handleFormSubmit(e, inputValue) {
			e.preventDefault()
			if (!inputValue) return
			const action = getAddTodoItemAction()
			dispatch(action)
		},

		deleteTodoItem(index) {
			const action = getDeleteTodoItemAction(index)
			dispatch(action)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)