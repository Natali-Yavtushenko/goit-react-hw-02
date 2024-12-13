
import Description from "./components/description/Description";
import Feedback from "./components/feedback/Feetback";
import Options from "./components/options/Options"

function App() {
    const updateFeedback = (feedbackType) => {
        console.log(`Feedback type: ${feedbackType}`); // Для перевірки
    };
  return (
    <div>
        <Description />
        <Option updateFeedback={updateFeedback} />
        <Feedback />
    </div>
);
}

export default App;