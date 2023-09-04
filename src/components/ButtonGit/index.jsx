import styles from './index.module.scss';

export default function ButtonGit({ link, isDisabled }) {
    return (
        <button className={styles.btn} onClick={() => { window.open(link, "_blank") }}>
            <p>GitHub</p>
            <i className='fa-brands fa-github'></i>
        </button>
    );
}
