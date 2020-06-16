import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../redux/action';
import uuid from 'uuid/v4';

const TodoInput = () => {
    const [todo, setTodo] = useState('');
    
    // redux hook 
    const dispatch = useDispatch();
    const addTodo = (todo) => dispatch(addTodoAction(todo));
    
    const onChange = event => {
        setTodo(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (todo.trim() === '') return;
        addTodo({
          id: uuid(),
          name: todo,
          complete: false
        });
        setTodo('');
      };

    return (
        <form onSubmit={onSubmit}>
            <div className="form-div">
                <input type="text" name="todo" placeholder="Add a todo" value={todo} onChange={onChange} />
                <button type="submit">Add Todo</button>
            </div>
        </form>
    )
}

export default TodoInput;
