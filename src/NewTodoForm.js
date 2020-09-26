import React, { useState } from "react";
import { Button, Form, Input, FormGroup } from "reactstrap";
import { useDispatch } from "react-redux";
/** 
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {name, qty} to fn rec'd from parent.
 *
 */

const NewTodoForm = () => {
	const INITIAL_STATE = { text: "" };
	const [ formData, setFormData ] = useState(INITIAL_STATE);
	const dispatch = useDispatch();

	const addTodo = (text) => {
		dispatch({ type: "ADD", payload: text });
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		addTodo(formData.text);
		setFormData(INITIAL_STATE);
	};

	/** Update local state w/curr state of input elem */

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((fData) => ({
			...fData,
			[name]: value
		}));
	};

	/** render form */

	return (
		<section className="col">
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Input
						className="text-center mt-4"
						id="text"
						name="text"
						value={formData.text}
						onChange={handleChange}
						placeholder="todo"
						required
					/>

					<Button className="m-2" color="success">
						Add Todo!
					</Button>
				</FormGroup>
			</Form>
		</section>
	);
};

export default NewTodoForm;
