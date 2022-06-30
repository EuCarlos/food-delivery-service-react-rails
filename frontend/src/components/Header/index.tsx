import styles from './styles.module.sass'

export function Header () {
    return (
        <header className={styles.contentHeader}>
            <div className={styles.brand}>
                <img 
                    src="./images/brand.png" 
                    alt="Food Delivery" 
                />
            </div>
            <div className={styles.menu}>
                <ul>
                    <li><a href="#">Restaurantes</a></li>
                    <li><a href="#">Outros</a></li>
                </ul>
            </div>
        </header>
    )
}