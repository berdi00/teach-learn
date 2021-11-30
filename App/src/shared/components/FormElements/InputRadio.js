import React from "react";

const InputRadio = (props) => {
  const { type, label, value, checked, onRadio } = props;

  return (
    <div>
      <input type={type} checked={checked} onChange={() => onRadio(value)} />
      <span>{label}</span>
    </div>
  );
};

export default InputRadio;
