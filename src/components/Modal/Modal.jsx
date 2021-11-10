import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";

import buttonStyles from "../Button/Button.module.css";
import "./modal.css";

export function Modal({ onClick, active, setActive, children }) {
  const [text, setText] = useState("");

  const onChangeInput = (event) => {
    setText(event.target.value);
  };

  const onClickAdd = () => {

    if (/\D/.test(text)) {
      alert("Please type only numbers");
      return;
    } else {
    onClick(text);
    setText("");
    setActive(false);
    }
  };

  return (
    <div
      className={active ? "active modal" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "active modal__content" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
          {children}
          <Input value={text} onChange={onChangeInput} placeholder="Type in the amount in BYN" />
          <Button className={buttonStyles.button_add} onClick={() => onClickAdd()}>&#10010;</Button>
      </div>
    </div>
  );
}
