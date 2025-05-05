export default function ButtonComponent() {
  const handleClick = () => {
    alert("버튼 클릭됨");
  }

  return(
    <button onClick={handleClick}>클릭</button>
  );
}