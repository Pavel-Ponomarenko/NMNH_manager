import React, { useState } from "react";

import { Select } from "../Select";
import { Button } from "../Button";
import { Modal } from "../Modal";

import styles from "./Earnings.module.css";
import buttonStyles from "../Button/Button.module.css";

const getId = () => "_" + Math.random().toString(16).slice(2);

export function Earnings() {

  const [modalActive, setModalActive] = useState(false);
  const [earnings, setEarnings] = useState([]);

  const addEarning = (amount) => {
    setEarnings([...earnings, { id: getId(), amount }]);
  };

  return (
    <div className={styles.earnings}>
      <header className={styles.earnings_header}>
        <Select />
      </header>
      <div className={styles.earnings_body}>
        <Button
          className={buttonStyles.button_openModal}
          onClick={() => setModalActive(true)}
        >
          +
        </Button>

        {earnings.map((item) => (
          <div className={styles.earnings_card} key={item.id}>
            <p className={styles.earnings_amount}>{item.amount}</p>
          </div>
        ))}
    </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        onClick={addEarning}
      >
        <h3 className="modal__title">Type the amount of earning money in BYN</h3>
        <Button
          className={buttonStyles.button_close}
          onClick={() => setModalActive(false)}
        >
          x
        </Button>
      </Modal>
    </div>
  );
}
