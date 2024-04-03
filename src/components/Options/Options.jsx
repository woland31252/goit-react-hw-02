import css from '../Options/Options.module.css'

export default function Options({ clickGood, clickNeutral, clickBad}) {
    return (
        <div className={css.buttonList}>
            <button className={css.btn} onClick={clickGood}>Good</button>
            <button className={css.btn} onClick={clickNeutral}>Neutral</button>
            <button className={css.btn} onClick={clickBad}>Bad</button>
        </div>
    )
}