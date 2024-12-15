import css from "./Options.module.css"


function Options({ updateFeedback, resetFeedback, totalFeedback }) {
    return (
        <div className={css.container}>
            <button onClick={() => updateFeedback("good")} className={css.optionbtn}>
                Good
            </button>
            <button onClick={() => updateFeedback("neutral")} className={css.optionbtn}>
                Neutral
            </button>
            <button onClick={() => updateFeedback("bad")} className={css.optionbtn}>
                Bad
            </button>
            {totalFeedback > 0 && ( 
                <button onClick={resetFeedback} className={css.optionbtn}>
                    Reset
                </button>
            )}
        </div>
    );
}

export default Options;
