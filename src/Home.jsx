import React, { useState } from 'react';
import styles from './Home.module.scss';
import InputForm from './InputForm';
import Todos from './Todos';

const Home = () => {

    const [todos, setTodos] = useState([]);

    function deleteTodo(id) {
        const copy = [...todos];
        setTodos(copy.filter((todo) => id !== todo._id));
    }

    return (
        <div>
            <div className={styles.todos}>
                <h2 className={styles.header}>Notes</h2>
                <InputForm
                    todos={todos}
                    setTodos={setTodos}
                />
                <h5 style={{margin: '0px 0px 30px'}}>
                    you have 
                    <span style={{fontSize: '20px'}}>{todos.length}</span>
                     notes
                </h5>
                <Todos
                    todos={todos}
                    setTodos={setTodos}
                    deleteTodo={deleteTodo}
                />
            </div>
        </div>
    )
}

export default Home;