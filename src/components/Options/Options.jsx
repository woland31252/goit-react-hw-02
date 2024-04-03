import css from '../Options/Options.module.css'

export default function Options({ click }) {
    return (
        <div className={css.buttonList}>
            <button className={css.btn} onClick={() => {click('good')}}>Good</button>
            <button className={css.btn} onClick={() => { click('neutral') }}>Neutral</button>
            <button className={css.btn} onClick={() => { click('bad') }}>Bad</button>
            <button className={css.btn} onClick={() => { click('bad') }}>Reset</button>
        </div>
    )
}