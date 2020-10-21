import React, { useState } from "react";

const Todo = () => {
	const [todo, setTodo] = useState(["one", "two", "three", "four"]);
	const [input, setInput] = useState("");
	return (
		<div className="todoContainer">
			<h1 className="todoHeader">Todo List</h1>
			<input
				onChange={e => setInput(e.target.value)}
				placeholder="Todo"
			/>
			<button onClick={() => setTodo([...todo, input])}>Submit</button>
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
