import style from "./Options.module.css";
function Options({ updateFeedback, total, resetFeedback }) {
  return (
    <div>
      <button className={style.btm} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={style.btm} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={style.btm} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {total > 0 && (
        <button className={style.btm} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
