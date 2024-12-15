
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options"
import Notification from "./components/Notification/Notification";
import { useEffect, useState } from "react";

function App() {
    const [feedback, setFeedback] = useState(() => {
        const saveData = JSON.parse(localStorage.getItem("feedback"));
        if (saveData && typeof saveData === "object") {
            return saveData;
        }
        return {
            good: 0,
            neutral: 0,
            bad: 0,
        };
    });

    useEffect(() => {
        localStorage.setItem("feedback", JSON.stringify(feedback));
    }, [feedback]);

    const updateFeedback = (feedbackType) => {
        setFeedback((prev) => ({
            ...prev,
            [feedbackType]: prev[feedbackType] + 1,
        }));
    };

    const resetFeedback = () => {
        setFeedback({
            good: 0,
            neutral: 0,
            bad: 0,
        });
    };

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

    const positiveFeedback =
        totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

    return (
        <div>
            <Description />
            <Options
                updateFeedback={updateFeedback}
                resetFeedback={resetFeedback}
                totalFeedback={totalFeedback} 
            />

            {totalFeedback === 0 ? (
                <Notification message="No feedback yet" />
            ) : (
                <Feedback
                    feedback={feedback}
                    totalFeedback={totalFeedback}
                    positiveFeedback={positiveFeedback}
                />
            )}
        </div>
    );
}

export default App;

  