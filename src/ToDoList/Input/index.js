import React from 'react'

function Input(props) {

	const { inputValue, handelInputChange, handelFormSubmit } = props

	return (
		<form
			onSubmit={handelFormSubmit}>
			<label htmlFor="input">请输入待办事项：</label>
			<input
				id="input"
				value={inputValue}
				onChange={handelInputChange}
				ref={props.inputRef}
			/>
			<button type="submit">提交</button>
		</form>
	)
}


export default Input