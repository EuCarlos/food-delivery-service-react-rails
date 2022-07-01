import styles from './styles.module.sass'
import brand from '../../assets/brand.svg'
import { MdSearch, MdShoppingBag } from 'react-icons/md'

export function Header () {
    return (
        <header className={styles.contentHeader}>
            <div className={styles.brand}>
                <img 
                    src={brand} 
                    alt="Food Delivery"
                    width="200"
                />
            </div>
            <div className={styles.menu}>
                <ul>
                    <li><a href="#"><MdSearch/> Endereço</a></li>
                    <li>
                        <a href="#" className={styles.shoppingCart}><MdShoppingBag />
                            <span className={styles.notification}>2</span>
                        </a>
                        </li>
                </ul>
            </div>
        </header>
    )
}