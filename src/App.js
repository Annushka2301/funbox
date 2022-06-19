import { useEffect, useReducer } from 'react';
import styles from './App.module.css';
import Card from './Card/Card';

function App() {
  let none = false;
  
  return (
    <div className={styles.App}>
      <h1 className={styles.title}>Ты сегодня покормил кота?</h1>
      <div className={styles.cardsWrap}>
        <Card isAvailiable={true} flavour="с фуа-гра" weight="0,5" portions="10" mice={{number: '', details: 'мышь в подарок'}}/>
        <Card isAvailiable={true} flavour="с рыбой" weight="2" portions="40" mice={{number: '2', details: 'мыши в подарок'}}/>
        <Card isAvailiable={false} flavour="с курой" weight="5" portions="100" mice={{number: '5', details: 'мышей в подарок заказчик доволен'}}/>
      </div>
    </div>
  );
}

export default App;
