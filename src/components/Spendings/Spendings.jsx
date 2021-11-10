import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { Select } from "../Select";
import { Button } from "../Button";
import { Modal } from "../Modal";

import "../Modal/modal.css";
import styles from "./Spendings.module.css";
import buttonStyles from "../Button/Button.module.css";

export function Spendings() {
  const [modalActive, setModalActive] = useState(false);
  const [spendings, setSpendings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const spendings = JSON.parse(localStorage.getItem("spendings")) || [];
      setSpendings(spendings);
      setIsLoading(false);
    }, 0);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("spendings", JSON.stringify(spendings));
    }

    return () => {
      console.log("unMount");
    };
  }, [spendings, isLoading]);

  const addSpending = (amount) => {
    setSpendings([...spendings, { id: uuidv4(), amount }]);
  };

  return (
    <div className={styles.spendings}>
      <header className={styles.spendings_header}>
        <Button
          className={buttonStyles.button_openModal}
          onClick={() => setModalActive(true)}
        >
          Add new spending.
        </Button>
        <h2 className={styles.spendings_title}>Your spendings</h2>
        <Select />
      </header>
      <div className={styles.spendings_body}>
        {spendings.map((item) => (
          <div className={styles.spendings_card} key={item.id}>
            <p className={styles.spendings_amount}>{item.amount} BYN</p>
          </div>
        ))}
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        onClick={addSpending}
      >
        <h3 className="modal_title">
          Type the amount of money you spent in BYN
        </h3>
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
