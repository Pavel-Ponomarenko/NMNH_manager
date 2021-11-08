import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";

import "./modal.css";

export function Modal({ onClick, active, setActive, children }) {
  const [text, setText] = useState("");

  const onChangeInput = (event) => {
    setText(event.target.value);
  };

  const onClickAdd = () => {
    if (!text) {
      alert("type only numbers");
      return;
    } else {
      console.log(text);
    }

    onClick(text);
    setText("");
    setActive(false);
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
        <div>
          {children}
          <Input value={text} onChange={onChangeInput} placeholder="Type in" />
          <Button onClick={() => onClickAdd()}> +</Button>
        </div>
      </div>
    </div>
  );
}
