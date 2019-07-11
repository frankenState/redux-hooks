import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Todo = ({todo,handleDelete,handleToggle}) => {
    const [ name, setName ] = useState('');
    const [ isEdit, setIsEdit ] = useState(false);
    const action = useDispatch();

    useEffect(() => {
        setName(todo.name);
    }, [todo]);

    const handleEdit = () => {
        const { uuid, complete } = todo;
        
        const newTodo = {
            complete,
            name
        }

        action({
            type: 'TOGGLE_TO_DO',
            id: uuid,
            todo: newTodo
        });
    }

    return (
        <li 
            className={ todo.complete ?"list-group-item list-group-item-dark":"list-group-item"}
        >
            <div className="row col-md-12 m-0 p-0">
                <div className="col-md-7 m-0 p-0">
                    { isEdit? (
                        <input 
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    ):todo.name}
                </div>
                <div className="col-md-5 m-0 p-0 text-right">
                    <input 
                        type="checkbox"
                        className="form-check-input"
                        checked={todo.complete}
                        onChange={(e) => {
                            e.stopPropagation();
                            handleToggle(todo)
                        }}
                    />
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(todo.uuid)}
                        }
                        className="btn btn-danger btn-sm">Delete
                    </button>
                    { isEdit ? (
                        <button
                            className="btn btn-primary btn-sm ml-1"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleEdit();
                                setIsEdit(false)
                            }}
                        >Save</button>
                    ) : (
                        <button
                            className="btn btn-success btn-sm ml-1"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleEdit();
                                setIsEdit(true)
                            }}
                        >Edit</button>
                    )}
                    
                    
                </div>
            </div>
        </li>
    )
}

export default Todo
