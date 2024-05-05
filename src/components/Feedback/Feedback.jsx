import style from "./Feedback.module.css";
function Feedback({ good, neutral, bad, total, positiv }) {
  return (
    <div>
      <p className={style.pega}>Good: {good}</p>
      <p className={style.pega}>Neutral: {neutral}</p>
      <p className={style.pega}>Bad: {bad}</p>
      <p className={style.pega}>Total: {total}</p>
      <p className={style.pega}>Positive: {positiv}%</p>
    </div>
  );
}
export default Feedback;
