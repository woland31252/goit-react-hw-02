import css from "../Feedback/Feedback.module.css"

export default function Feedback({ value, total, round}) {
    return (
        <div>
            <ul className={css.ratingList}>
                <li>Good: { value.good}</li>
                <li>Neutral: { value.neutral}</li>
                <li>Bad: { value.bad}</li>
                <li>Total: { total}</li>
                <li>Positive: {NaN?0: round} %</li>
            </ul>
        </div>
    )
}
