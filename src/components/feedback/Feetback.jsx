import { useState } from "react";
import css from "./Feetback.module.css"

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
           <ul className={css.feetbacklist}>
            <li className={css.feetbackitem}>good: {feetback.good}</li>
            <li className={css.feetbackitem}>neutral: {feetback.neutral}</li>
            <li className={css.feetbackitem}>bad: {feetback.bad}</li>
           </ul>
        </div>
    )
} 
 
export default Feetback;