import React from 'react'
import MyTodo from './MyTodo';
import styles from './Todos.module.scss';

const Todos = ({todos, setTodos, deleteTodo}) => {
  return (
    <div className={styles.todos}>
        {todos.map(todo => 
            <div key={todo._id}>
                <MyTodo
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                    deleteTodo={deleteTodo}
                />
            </div>
        )}
    </div>
  )
}

export default Todos