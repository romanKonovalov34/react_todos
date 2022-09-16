import React, { useState } from 'react'
import styles from './InputForm.module.scss';
import Input from './Input';
import Button from './Buttons';

const InputForm = ({todos, setTodos}) => {

    const [value, setValue] = useState('');

    function addTodo(e) {
        if ((e.key === 'Enter' || e.type === 'click') && value !== '') {
            setTodos([
                {
                    _id: Date.now(),
                    title: value,
                    description: '',
                },
                ...todos,
            ])
            setValue('');
        }
    }

  return (
    <div className={styles.inputForm}>
        <Input 
            placeholder={'Write your note'}
            value={value}
            setValue={setValue}
            addTodo={addTodo}
        />
        <Button addTodo={addTodo} />
    </div>
  )
}

export default InputForm