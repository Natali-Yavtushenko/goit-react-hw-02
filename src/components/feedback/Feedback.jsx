import { useState } from "react";
import css from "./Feedback.module.css"

const Feedback = () => {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    });

    const updateFeedback = feedbackType => {
        setFeedback(prev => ({
            ...prev,
            [feedbackType]: prev[feedbackType] + 1,
        }));
    };
    return (
        <div className={css.container}>
           <ul className={css.feedbacklist}>
            <li className={css.feedbackitem}>good: {feedback.good}</li>
            <li className={css.feedbackitem}>neutral: {feedback.neutral}</li>
            <li className={css.feedbackitem}>bad: {feedback.bad}</li>
           </ul>
        </div>
    )
} 
 
export default Feedback;