import React from 'react'
import styles from './Title.module.scss';

const Title = ({title, setTitle}) => {
  return (
    <div>
      <h5 style={{margin: '10px 0px 10px 0px', fontSize: '18px', fontFamily: 'Silkscreen'}}>Title</h5>
      <input className={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
    </div>
  )
}

export default Title