import React from 'react'
import styles from './Button.module.scss';
import { MdPostAdd } from 'react-icons/md';

const Button = ({addTodo}) => {
  return (
    <button 
      className={styles.addBtn}
      onClick={(e) => addTodo(e)}
    >
      <MdPostAdd size={20} />
    </button>
  )
}

export default Button