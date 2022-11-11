import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList : PropTypes.array,
};

// TodoList.defaultProps = {
//     todoList: [],
// };

// console.log(typeof todoList);

function TodoList({todoList}) {
    return (
        <ul>
            {TodoList.map(todo => (
                    <li key = {todo.title}></li>
                ))}
        </ul>
    );
}

export default TodoList;
