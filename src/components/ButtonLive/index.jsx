import styles from './index.module.scss';

export default function ButtonLive({ link, isDisabled }) {
    return (
        <button className={styles.btn} onClick={() => { window.open(link, "_blank") }}>
            <p>Demo</p>
            <i className='fa-solid fa-arrow-up-right-from-square'></i>
        </button>
    );
}
