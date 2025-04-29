export default function InputComponent() {
  const hadnleChange = (e) => {
    console.log("입력값: ", e.target.value);
  }
  return <input type="text" onChange={hadnleChange} />
}