import React, { useState } from "react";

import { Select } from "../Select";
import { Button } from "../Button";
import { Modal } from "../Modal";

import styles from "./Earnings.module.css";
import buttonStyles from "../Button/Button.module.css";

export function Earnings() {

  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={styles.earnings}>
      <header className={styles.earnings_header}>
        <Select />
      </header>
      <div className={styles.earnings_body}>
        <Button
          className={buttonStyles.button_add}
          onClick={() => setModalActive(true)}
        >
          +
        </Button>
        <div className={styles.earnings_card}>
          <p className={styles.earnings_amount}>?</p>
        </div>
        <div className={styles.earnings_card}>
          <p className={styles.earnings_amount}>?</p>
        </div>
        <div className={styles.earnings_card}>
          <p className={styles.earnings_amount}>?</p>
        </div>
        <div className={styles.earnings_card}>
          <p className={styles.earnings_amount}>?</p>
        </div>
        <div className={styles.earnings_card}>
          <p className={styles.earnings_amount}>?</p>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <h3 className="modal__title">Adding of earnings</h3>
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
