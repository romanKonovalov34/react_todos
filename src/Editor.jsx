import React, { useState } from 'react';
import styles from './Editor.module.scss';
import Title from './Title';
import TextArea from './TextArea';
import EditorButtons from './EditorButtons';
import cn, { setTo } from 'classname';
import classname from 'classname';

const Editor = ({todo, todos, setTodos, setEditorMode, editorMode, deleteTodo}) => {

  const [title, setTitle] = useState(todo.title);
  const [textarea, setTextarea] = useState('');

  function changeTodo(id) {
    const copy = [...todos];
    const current = copy.find((todo) => todo._id === id);
    current.title = title;
    current.description = textarea;
    console.log(copy);
    setTodos(copy);
    setEditorMode('disabled');
  }

  return (
    <div className={styles[`${editorMode}`]}>
        <Title
          title={title}
          setTitle={setTitle}
        />
        <TextArea
          textarea={textarea}
          setTextarea={setTextarea}  
        />
        <EditorButtons 
          changeTodo={changeTodo}
          todo={todo}
          deleteTodo={deleteTodo}
        />
    </div>
  )
}

export default Editor;