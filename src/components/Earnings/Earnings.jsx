import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { Select } from "../Select";
import { Button } from "../Button";
import { Modal } from "../Modal";

import "../Modal/modal.css";
import styles from "./Earnings.module.css";
import buttonStyles from "../Button/Button.module.css";

export function Earnings() {
  const [modalActive, setModalActive] = useState(false);
  const [earnings, setEarnings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const earnings = JSON.parse(localStorage.getItem("earnings")) || [];
      setEarnings(earnings);
      setIsLoading(false);
    }, 0);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("earnings", JSON.stringify(earnings));
    }

    return () => {
      console.log("unMount");
    };
  }, [earnings, isLoading]);

  const addEarning = (amount) => {
    setEarnings([...earnings, { id: uuidv4(), amount }]);
  };
  
  return (
    <div className={styles.earnings}>
      <header className={styles.earnings_header}>
        <Button
          className={buttonStyles.button_openModal}
          onClick={() => setModalActive(true)}
        >
          Add new earning.
        </Button>
        <h2 className={styles.earnings_title}>Your earnings</h2>
        <Select />
      </header>
      <div className={styles.earnings_body}>
        {earnings.map((item) => (
          <div className={styles.earnings_card} key={item.id}>
            <p className={styles.earnings_amount}>{item.amount} BYN</p>
          </div>
        ))}
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        onClick={addEarning}
      >
        <h3 className="modal_title">Type the amount money you earn in BYN</h3>
        <Button
          className={buttonStyles.button_close}
          onClick={() => setModalActive(false)}
        >
          &#10008;
        </Button>
      </Modal>
    </div>
  );
}
