import React, { useState } from 'react'
import styles from './MyTodo.module.scss';
import { BsTrash } from "react-icons/bs";
import { MdOutlineCreate } from "react-icons/md";
import Editor from './Editor';

const MyTodo = ({todo, todos, setTodos, deleteTodo}) => {

  const [editorMode, setEditorMode] = useState('disabled');

  return (
    <div className={styles.todo}>
        {todo.title}
        <div>
          <button className={styles.changeBtn}>
              <MdOutlineCreate className={styles.btnImg} onClick={() => setEditorMode('active')} />
          </button>
          <button className={styles.deleteBtn}>
              <BsTrash className={styles.btnImg} onClick={() => deleteTodo(todo._id)} />
          </button>
        </div>
        <Editor
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            deleteTodo={deleteTodo}
            editorMode={editorMode}
            setEditorMode={setEditorMode}
        />
    </div>
  )
}

export default MyTodo;