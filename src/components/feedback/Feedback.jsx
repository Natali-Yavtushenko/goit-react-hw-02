
import css from "./Feedback.module.css"

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
    return (
      <div className={css.container}>
        <ul className={css.feedbacklist}>
          <li className={css.feedbackitem}>Good: {feedback.good}</li>
          <li className={css.feedbackitem}>Neutral: {feedback.neutral}</li>
          <li className={css.feedbackitem}>Bad: {feedback.bad}</li>
          <li className={css.feedbackitem}>Total: {totalFeedback}</li>
          <li className={css.feedbackitem}>Positive: {positiveFeedback}%</li>
        </ul>
      </div>
    );
  };
  
  export default Feedback;