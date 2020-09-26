let todos;
if (JSON.parse(window.localStorage.getItem("todos"))) {
	todos = JSON.parse(window.localStorage.getItem("todos"));
} else {
	todos = [];
}
const INITIAL_STATE = { todos: todos };

function rootReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "ADD":
			const newTodos = [ ...state.todos, action.payload ];
			window.localStorage.setItem("todos", JSON.stringify(newTodos));
			return { ...state, todos: [ ...newTodos ] };

		case "DELETE":
			const deletedTodos = state.todos.filter((t) => t !== action.payload);
			window.localStorage.setItem("todos", JSON.stringify(deletedTodos));
			return { ...state, todos: [ ...deletedTodos ] };

		default:
			return state;
	}
}

export default rootReducer;
