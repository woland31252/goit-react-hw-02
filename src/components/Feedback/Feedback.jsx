

export default function Feedback({ good, neutral, bad }) {
    return (
        <div>
            <ul className="ratingList">
                <li>Good: { good}</li>
                <li>Neutral: { neutral}</li>
                <li>Bad: { bad}</li>
                <li>Total</li>
                <li>Positive</li>
            </ul>
        </div>
    )
}
