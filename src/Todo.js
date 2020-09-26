import React from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
const Todo = ({ text }) => {
	const dispatch = useDispatch();

	const deleteTodo = (text) => {
		dispatch({ type: "DELETE", payload: text });
	};
	return (
		<li className="Todo col">
			<h2>{text}</h2>
			<Button onClick={() => deleteTodo(text)}>Delete</Button>
		</li>
	);
};
export default Todo;
