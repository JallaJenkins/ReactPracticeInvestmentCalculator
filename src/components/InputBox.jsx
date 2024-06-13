export default function InputBox({ id, label, defaultValue, type = "text" }) {
  return (
    <div >
      <label for={id}>{label}</label>
      <input id={id} type={type} defaultValue={defaultValue}></input>
    </div>
  );
}