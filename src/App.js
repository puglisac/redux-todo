import React from "react";
import "./App.css";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Todo:</h1>
			</header>
			<NewTodoForm />
			<TodoList />
		</div>
	);
}

export default App;
