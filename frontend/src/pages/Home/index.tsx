import styles from './styles.module.sass'
import image from '../../assets/cooking.svg'
import avatars from '../../assets/avatars.png'
import { MdSearch, MdStar } from 'react-icons/md'
import { FaTruck, FaShoppingBag, FaUtensils } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { modifyTitle } from '../../services/modifyTitle'

export function Home () {

    modifyTitle("Inicio")
    return (
        <section className={styles.contentWrapper}>
            <div className={styles.textTop}>
                <div className={styles.text}>
                    <h1>Entrega<br/><span className={styles.highlight}>mais rápida</span> &<br/> <span className={styles.highlight}>coleta</span> fácil.</h1>
                    <p>Quando você está com preguiça de cozinhar, temos apenas um clique de distância!</p>
                </div>
                <div className={styles.image}>
                    <img 
                        src={image} 
                        alt="Desenho de um homem em cima de um chapéu de cozinheiro, ao lado de recipientes de pimentas e talheres"
                    />
                </div>
            </div>

            <div className={styles.searchButton}>
                <Link to="/restaurantes">
                    <MdSearch /> Procure por restaurantes
                </Link>
            </div>

            <footer>
                <div className={styles.textFooter}>
                    <h2>Seu <span className={styles.highlight}>delivery</span> de<br/>comida favorito</h2>
                    <div className={styles.reviews}>
                        <div>
                            <img 
                                src={avatars} 
                                alt="quatro imagens de pessoas aleatórias uma ao lado da outra com bordas redondas"
                            />
                        </div>
                        <div className={styles.textReviews}>
                            <h3>Nossos clientes felizes</h3>
                            <p><MdStar size={18}style={{ marginRight: '3px' }}/>4.7 <span className={styles.reviewsHighlight}>(16.5k Avaliações)</span></p>
                        </div>
                    </div>
                </div>

                <div className={styles.ideas}>
                    <ul>
                        <li>
                            <h2><FaTruck size={25}/></h2>
                            <h3>Entrega rápida</h3>
                            <p>Promessa de entregar em 30 minutos</p>
                        </li>
                        <li>
                            <h2><FaShoppingBag size={25}/></h2>
                            <h3>Pegar</h3>
                            <p>Entrega de recolha em sua porta</p>
                        </li>
                        <li>
                            <h2><FaUtensils size={25}/></h2>
                            <h3>Jantar em</h3>
                            <p>Desfrute da sua comida fresca, crocante e quente</p>
                        </li>
                    </ul>
                </div>
            </footer>
        </section>
    )
}