import React from 'react'
import styles from './TextArea.module.scss';

const TextArea = ({textarea, setTextarea}) => {
  return (
    <div>
      <h5 style={{margin: '10px 0px 10px 0px', fontSize: '18px', fontFamily: 'Silkscreen'}}>Text field</h5>
      <textarea className={styles.textarea} value={textarea} onChange={(e) => setTextarea(e.target.value)} name="" id="" cols="20" rows="5"></textarea>
    </div>
  )
}

export default TextArea