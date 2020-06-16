import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodoAction, deleteTodoAction } from '../redux/action';

export default function TodoList() {

    const todos = useSelector((state) => state.todos);
    console.log(todos)
    const dispatch = useDispatch();
    const toggleTodo = (todoId) => dispatch(toggleTodoAction(todoId));
    const deleteTodo = (todoId) => dispatch(deleteTodoAction(todoId));

    return (
        <div className="todo-list">
            <ul>
                { todos.map(todo => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.complete} onChange={toggleTodo.bind(null,todo.id)}/>
                        <span className={todo.complete ? 'complete': null }>{todo.name}</span>
                        <span className="deleteButton" onClick={deleteTodo.bind(null, todo.id)}>Delete</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
