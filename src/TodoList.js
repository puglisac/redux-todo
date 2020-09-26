import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
	const todos = useSelector((st) => st.todos);

	return (
		<div>
			<ul>{todos.map((m) => <Todo key={m} text={m} />)}</ul>
		</div>
	);
};
export default TodoList;
