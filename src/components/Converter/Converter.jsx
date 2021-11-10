import { useState, useEffect } from "react";

import styles from "./Converter.module.css";

export function Converter() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://www.nbrb.by/api/exrates/rates?periodicity=0`)
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  function exchangeBox(currency) {
    return (
      <div className={styles.converter_box}>
        <h3 className={styles.box_title}>
          Exchange rate of {currency.Cur_Abbreviation} to BYN
        </h3>
        <p className={styles.box_text}>
          1 = {currency.Cur_OfficialRate.toFixed(3)} BYN
        </p>
      </div>
    );
  }

  const usd = items.find((item) => item.Cur_ID === 431);
  const eur = items.find((item) => item.Cur_ID === 451);
  const uah = items.find((item) => item.Cur_ID === 449);
  const jpy = items.find((item) => item.Cur_ID === 508);

  if (error) {
    const errorBox = (
      <div className={styles.converter_box}>
        <p className={styles.box_title}>Ошибка: {error.message}</p>
      </div>
    );

    return (
      <div className={styles.converter}>
        {errorBox}
        {errorBox}
        {errorBox}
        {errorBox}
        <div className={styles.converter_box}>
        <p className={styles.box_text}>Ooops, developers are working...</p> 
        </div>
        <div className={styles.converter_box}>
        <p className={styles.box_text}>Ooops, developers are working...</p> 
        </div>
      </div>
    );
  } else if (!isLoaded) {
    const loadingBox = (
      <div className={styles.converter_box}>
        <p className={styles.box_title}>Загрузка...</p>
      </div>
    );

    return (
      <div className={styles.converter}>
        {loadingBox}
        {loadingBox}
        {loadingBox}
        {loadingBox}
        <div className={styles.converter_box}>
        <p className={styles.box_text}>Ooops, developers are working...</p> 
        </div>
        <div className={styles.converter_box}>
        <p className={styles.box_text}>Ooops, developers are working...</p> 
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.converter}>
        {exchangeBox(usd)}
        {exchangeBox(eur)}
        {exchangeBox(jpy)}
        {exchangeBox(uah)}
        <div className={styles.converter_box}>
        <p className={styles.box_text}>Ooops, developers are working...</p> 
        </div>
        <div className={styles.converter_box}>
          <p className={styles.box_text}>Ooops, developers are working...</p> 
        </div>
      </div>
    );
  }
}
