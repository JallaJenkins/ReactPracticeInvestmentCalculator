import { useState } from 'react';

export default function InputBox({ id, label, value, type = "text", onChange }) {
  return (
    <div >
      <label for={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={onChange}></input>
    </div>
  );
}