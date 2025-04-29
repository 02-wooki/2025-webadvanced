import React, { useState } from "react";

export default function TodoApp(props) {
	const [todoList, setTodoList] = useState([]);

	var todo = {
		id: 1,
		value: '',
	}

	const handleSubmit = () => {
		setTodoList([...todoList, todo]);
		todo.id++;
	}

	return (
		<>
			할 일:
			<input type="text" onChange={(e) => { todo.value = e.target.value }} />
			<button onClick={handleSubmit}>추가</button>
			<ul>
				{ todoList.map((item) => {
					return( <li key={item.id}>{item.value}</li> );
				})}
			</ul>
		</>
	);
}