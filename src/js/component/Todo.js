import React, { useState, useEffect } from "react";

const Todo = () => {
	const [todo, setTodo] = useState([]);
	const [input, setInput] = useState("");
	const url =
		"https://assets.breatheco.de/apis/fake/todos/user/ernestoemilanes123";
	useEffect(() => {
		fetch(`${url}`)
			.then(response => response.json())
			.then(json => setTodo(json));
	}, []);
	const addTodo = () => {
		const newList = [...todo, { done: false, label: input }];
		console.log(newList);
		fetch(`${url}`, {
			method: "PUT",
			body: JSON.stringify(newList),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(() => {
				fetch(`${url}`)
					.then(response => response.json())
					.then(json => setTodo(json));
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	};
	const deleteTodo = todoIndex => {
		const deleteList = todo.filter((item, index) => index !== todoIndex);
		fetch(`${url}`, {
			method: "PUT",
			body: JSON.stringify(deleteList),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(() => {
				fetch(`${url}`)
					.then(response => response.json())
					.then(json => setTodo(json));
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	};
	return (
		<div className="todoContainer">
			<h1 className="todoHeader">Todo List</h1>
			<input
				onChange={e => setInput(e.target.value)}
				placeholder="Todo"
			/>
			<button onClick={() => addTodo()}>Submit</button>
			{todo &&
				todo.map((items, index) => {
					return (
						<div className="todoItems" key={index}>
							{items.label}
							<span onClick={() => deleteTodo(index)}>X</span>
						</div>
					);
				})}
		</div>
	);
};

export default Todo;
