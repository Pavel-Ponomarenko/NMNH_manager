import React, { useState } from "react";

import { Select } from "../Select";
import { Button } from "../Button";
import { Modal } from "../Modal";

import styles from "./Spendings.module.css";
import buttonStyles from "../Button/Button.module.css";

const getId = () => "_" + Math.random().toString(16).slice(2);

export function Spendings() {

  const [modalActive, setModalActive] = useState(false);
  const [spendings, setSpendings] = useState([]);

  const addSpending = (amount) => {
    setSpendings([...spendings, { id: getId(), amount }]);
  };

  return (
    <div className={styles.spendings}>
      <header className={styles.spendings_header}>
        <Select />
      </header>
      <div className={styles.spendings_body}>
        <Button
          className={buttonStyles.button_openModal}
          onClick={() => setModalActive(true)}
        >
          +
        </Button>

        {spendings.map((item) => (
          <div className={styles.spendings_card} key={item.id}>
            <p className={styles.spendings_amount}>{item.amount}</p>
          </div>
        ))}
    </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        onClick={addSpending}
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
