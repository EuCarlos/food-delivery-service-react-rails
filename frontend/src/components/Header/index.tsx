import styles from './styles.module.sass'
import brand from '../../assets/brand.svg'
import { MdSearch, MdShoppingBag } from 'react-icons/md'
import { useState } from 'react'

export function Header () {
    const [searchInput, setSearchInput] = useState({ input_value: ''})

    const redirectRoute = () => {
        if (searchInput.input_value.length >= 0) {
            location.replace(`/restaurantes?q=${searchInput.input_value}`)
        }
    }

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
                    <li>
                        <div className={styles.searchBar} >
                            <input 
                                type="search"
                                placeholder='Pesquisar'
                                onChange={(e) =>  setSearchInput({...searchInput, input_value: e.target.value})}
                                value={ searchInput.input_value } 
                                required 
                            />
                            <button onClick={() => redirectRoute()}><MdSearch size={24} /></button>
                        </div>
                    </li>
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