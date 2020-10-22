import React, { useState, useEffect } from "react";

const Todo = () => {
	const [input, setInput] = useState("");
	const [todo, setTodo] = useState([]);
	useEffect(() => {
		const task = ["task one", "task two"];
		setTodo(task);
	}, []);
	const addTodo = () => {
		const newList = [...todo, input];
		setTodo(newList);
	};
	return (
		<div className="todoContainer">
			<h1 className="todoHeader">Todo List</h1>
			<input
				onChange={e => setInput(e.target.value)}
				placeholder="Todo"
			/>
			<button onClick={() => addTodo()}>Submit</button>
			{todo.map((items, index) => {
				return (
					<div className="todoItems" key={index}>
						{items}
					</div>
				);
			})}
		</div>
	);
};

export default Todo;
