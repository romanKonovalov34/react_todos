import React from 'react'
import styles from './EditorButtons.module.scss';
import { BsTrash } from "react-icons/bs";
import { AiOutlineCheck } from 'react-icons/ai';

const EditorButtons = ({todo, changeTodo, deleteTodo}) => {
  return (
    <div>
      <button className={styles.changeBtn}>
          <AiOutlineCheck className={styles.saveImg} onClick={() => changeTodo(todo._id)} />
      </button>
      <button className={styles.deleteBtn}>
          <BsTrash className={styles.deleteImg} onClick={() => deleteTodo(todo._id)} />
      </button>
  </div>
  )
}

export default EditorButtons;