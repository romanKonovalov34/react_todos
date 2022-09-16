import React from 'react'
import styles from './Input.module.scss';

const Input = ({value, setValue, addTodo, ...props}) => {
  return (
    <div className={styles.inputContainer}>
        <input 
            className={styles.input} 
            {...props} 
            type="text" 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => addTodo(e)}                                                                       
        />
    </div>
  )
}

export default Input;