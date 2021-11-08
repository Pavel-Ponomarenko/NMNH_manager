import {useState, useEffect} from "react";

import styles from "./Converter.module.css";

export function Converter() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://www.nbrb.by/api/exrates/rates?periodicity=0`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  const usd = items.find(item => item.Cur_ID === 431);
  const eur = items.find(item => item.Cur_ID === 451);
  const uah = items.find(item => item.Cur_ID === 449);
  const jpy = items.find(item => item.Cur_ID === 508);

  if (error) {
  return (
    <div className={styles.converter}>
      <div className={styles.converter_box}>
        <p className={styles.box_text}>Ошибка: {error.message}</p>
      </div>
      <div className={styles.converter_box}>
        <p className={styles.box_text}>Ошибка: {error.message}</p>
      </div>
      <div className={styles.converter_box}>
        <p className={styles.box_text}>Ошибка: {error.message}</p>
      </div>
      <div className={styles.converter_box}>
        <p className={styles.box_text}>Ошибка: {error.message}</p>
      </div>
      <div className={styles.converter_box}>
        <p className={styles.box_text}>The amount of money you earn in ...</p>
      </div>
      <div className={styles.converter_box}>
        <p className={styles.box_text}>The amount of money you spend in ...</p>
      </div>
    </div>
  );
  } else if(!isLoaded) {
    return  <div className={styles.converter}>
      <div className={styles.converter_box}>
        <p className={styles.box_text}>Загрузка...</p>
      </div>
      <div className={styles.converter_box}>
        <p className={styles.box_text}>Загрузка...</p>
      </div>
      <div className={styles.converter_box}>
        <p className={styles.box_text}>Загрузка...</p>
      </div>
      <div className={styles.converter_box}>
        <p className={styles.box_text}>Загрузка...</p>
      </div>
      <div className={styles.converter_box}>
        <p className={styles.box_text}>The amount of money you earn in ...</p>
      </div>
      <div className={styles.converter_box}>
        <p className={styles.box_text}>The amount of money you spend in ...</p>
      </div>
    </div> 
  } else {
    return  <div className={styles.converter}>
    <div className={styles.converter_box}>
      <p className={styles.box_text}>1&#36; = {usd.Cur_OfficialRate}BYN</p>
    </div>
    <div className={styles.converter_box}>
      <p className={styles.box_text}>1&euro; = {eur.Cur_OfficialRate}BYN</p>
    </div>
    <div className={styles.converter_box}>
      <p className={styles.box_text}>100&yen; = {jpy.Cur_OfficialRate}</p>
    </div>
    <div className={styles.converter_box}>
      <p className={styles.box_text}>100&#8372; = {uah.Cur_OfficialRate}</p>
    </div>
    <div className={styles.converter_box}>
      <p className={styles.box_text}>The amount of money you earn in ...</p>
    </div>
    <div className={styles.converter_box}>
      <p className={styles.box_text}>The amount of money you spend in ...</p>
    </div>
  </div>
  }
}
