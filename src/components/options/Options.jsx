import css from "./Options.module.css"


function Option({ updateFeedback }) {
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
        </div>
    );
}

export default Option;