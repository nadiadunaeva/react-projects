function ResetButton({ count, onClick }) {
  return (
    <div>
      {count > 0 && (
        <div>
          <button onClick={onClick}>Reset</button>
        </div>
      )}
    </div>
  );
}
export default ResetButton;
