import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const actions = useDispatch();

    useEffect(() => {
        actions({type:'GET_TO_DOS'});
    }, []);

    const handleDelete = id => {
        if (!window.confirm("Are you sure ?")) return;

        actions({
            type:'DELETE_TO_DO',
            id
        });
    }

    const handleToggle = todo => {
       
        const { uuid, name, complete } = todo;
        actions({
            type: 'TOGGLE_TO_DO',
            id:uuid,
            todo: {
                name,
                complete: !complete
            }
        });
    }

    return (
        <div className="row col-md-12 pt-3">
            <div className="col-md-6 m-auto">
                <div className="col-md-12">
                    { todos.length > 0 ? (
                        <ul className="list-group">
                            { todos.map( (todo,i) => (
                                <Todo 
                                    key={i} 
                                    todo={todo} 
                                    handleToggle={handleToggle}
                                    handleDelete={handleDelete}
                                    handleDelete={handleDelete}
                                    
                                />
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
