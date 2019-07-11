import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const actions = useDispatch();

    const handleDelete = id => {
        if (!window.confirm("Are you sure ?")) return;

        actions({
            type:'DELETE_TO_DO',
            payload: id
        });
    }

    const handleToggle = id => {
        actions({
            type: 'TOGGLE_TO_DO',
            payload: id
        });
    }

    return (
        <div className="row col-md-12 pt-3">
            <div className="col-md-6 m-auto">
                <div className="col-md-12">
                    { todos.length > 0 ? (
                        <ul className="list-group">
                            { todos.map( todo => (
                                <li 
                                    key={todo.id}
                                    className={ todo.complete ?"list-group-item list-group-item-dark":"list-group-item"}
                                >
                                    <div className="row col-md-12 m-0 p-0">
                                        <div className="col-md-9 m-0 p-0">
                                            {todo.name}
                                        </div>
                                        <div className="col-md-3 m-0 p-0 text-right">
                                            <input 
                                                type="checkbox" 
                                                className="form-check-input"
                                                checked={todo.complete}
                                                onChange={() => handleToggle(todo.id)}
                                            />
                                            <button
                                                onClick={() => handleDelete(todo.id)}
                                                className="btn btn-danger btn-sm">Delete
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                            
                        </ul>
                    ) : (
                        <p>No todos found :(</p>
                    )}
                    
                </div>    
            </div>    
        </div>
    )
}

export default TodoList
