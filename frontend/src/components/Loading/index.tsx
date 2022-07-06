import styles from './style.module.sass'

export function Loading() {
    return (
        <>
            <div className={styles.card} id={styles.first}></div>
            <div className={styles.card} id={styles.second}></div>
            <div className={styles.card} id={styles.third}></div>
            <div className={styles.card} id={styles.fourth}></div>
        </>
    )
}