import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';

const TodoInput = () => {
    
    const [ todo, setTodo ] =  useState('');
    const addTodo = useDispatch();

    const onChange = e => { setTodo(e.target.value)}

    const onSubmit = e => {
        e.preventDefault();
        if (todo.trim() === '') return;

        addTodo({
            type:'ADD_TO_DO',
            todo: {
                name: todo,
                complete: false
            }
        })
        setTodo('');
    }
    
    return (
        <form onSubmit={onSubmit}>
            <div className="row col-md-12 pt-3">
               <div className="col-md-6 m-auto row">
                <div className="col-md-10 m-0 pr-1">
                    <input type="text"
                        className="form-control"
                        name="todo"
                        placeholder="Add a todo"
                        value={todo}
                        onChange={onChange}
                    />
                </div>
                <div className="col-md-2 m-0 p-0">
                    <button
                        className="form-control btn btn-primary btn-sm"
                        type="submit">
                        Add Todo
                    </button>
                </div>
               </div>
            </div>
        </form>
    )
}

export default TodoInput
