import React, { useState } from "react";

import { Select } from "../Select";
import { Button } from "../Button";
import { Modal } from "../Modal";

import styles from "./Spendings.module.css";
import buttonStyles from "../Button/Button.module.css";

export function Spendings() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={styles.spendings}>
      <header className={styles.spendings_header}>
        <Select />
      </header>
      <div className={styles.spendings_body}>
        <Button
          className={buttonStyles.button_add}
          onClick={() => setModalActive(true)}
        >
          +
        </Button>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <h3 className="modal__title">Adding of spendings</h3>
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
