import css from '../Options/Options.module.css'

export default function Options({ click, total, reset }) {
    return (
        <div className={css.buttonList}>
            <button className={css.btn} onClick={() => {click('good')}}>Good</button>
            <button className={css.btn} onClick={() => { click('neutral') }}>Neutral</button>
            <button className={css.btn} onClick={() => { click('bad') }}>Bad</button>
            {total>0 && <button className={css.btn} onClick={reset}>Reset</button>}
        </div>
    )
}