
import Description from "./components/description/Description";
import Feedback from "./components/feedback/Feedback";
import Options from "./components/options/Options"

function App() {
    
  return (
    <div>
        <Description />
        <Options updateFeedback={updateFeedback} />
        <Feedback />
    </div>
);
}

export default App;