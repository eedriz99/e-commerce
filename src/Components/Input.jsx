import React, { useState, useRef } from "react";

function Input(props) {
  // const [name, typeof] = props;
  const [inputValue, setInputValue] = useState("");
  const inputArea = useRef();
  const onInputChange = () => {
    setInputValue(inputArea.current.value);
    console.log(inputArea.current.value)
  };
  return (
    <div>
      <label
        htmlFor={props.name}
        className={props.labelClass ? props.labelClass : "form-label"}
      >
        {props.label}
      </label>
      <input
        name={props.name}
        type={props.typeOf ? props.typeOf : "text"}
        placeholder={props.placeholder ? props.placeholder : props.label}
        className={props.className ? props.className : "form-control"}
        value={props.value?props.value:inputValue}
        disable= {props.disabled}
        onChange={(e) => onInputChange(e)}
      />
    </div>
  );
}

export default Input;
