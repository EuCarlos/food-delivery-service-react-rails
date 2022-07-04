import styles from './styles.module.sass'
import { FaArrowRight } from 'react-icons/fa'
import { MdStar } from 'react-icons/md'

import ios from '../../assets/button-ios.png'
import android from '../../assets/button-android.png'
import food from '../../assets/food.png'
import { Footer } from '../../components/Footer'

export function Restaurants () {

    return (
        <section className={styles.contentWrapper}>
            <div className={styles.contentTop}>
                <div className={styles.text}>
                    <h1>Entrega<br/><span className={styles.highlight}>mais rápida</span> &<br/> <span className={styles.highlight}>coleta</span> fácil.</h1>
                    <p>Faça o download nas seguintes plataformas:</p>
                    <div>
                        <img src={ios} alt="botão de baixar aplicativo do Food Delivery via sistema iphone" />
                        <img src={android} alt="botão de baixar aplicativo do Food Delivery via sistema android" />
                    </div>
                </div>
                <div className={styles.image}>
                    <img src={food} alt="caixa de delivery aberto com coxas de frango salpicado com coentro e molho" />
                </div>
            </div>

            <div className={styles.contentCategories}>
                <ul>
                    <li>
                        <span className={styles.titleImage}>Japonesa</span>
                        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </li>
                    <li>
                        <span className={styles.titleImage}>Italiana</span>
                        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </li>
                    <li>
                        <span className={styles.titleImage}>Mexicana</span>
                        <img src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
                    </li>
                    <li>
                        <span className={styles.titleImage}>Vegan</span>
                        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </li>
                    <li className={styles.moreCategories}>
                        <FaArrowRight size={50} />
                    </li>
                </ul>
            </div>

            <div className={styles.restaurantsList}>
                <h2>Lista de Restaurantes</h2>
                <div className={styles.cards}>
                    <a href="#" >
                        <div className={styles.card} >
                            <div className={styles.contentCard}>
                                <h4>Restaurante 1</h4>
                                <p className={styles.restaurantType}>Comida Italiana</p>
                                <p className={styles.restaurantDeliveryValue}>Entrega R$ 5</p>
                                <p className={styles.restaurantReviews}><MdStar /> 4.5</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>
                    </a>

                    <a href="#" >
                        <div className={styles.card} >
                            <div className={styles.contentCard}>
                                <h4>Restaurante 2</h4>
                                <p className={styles.restaurantType}>Comida Mexicana</p>
                                <p className={styles.restaurantDeliveryValue}>Entrega R$ 5</p>
                                <p className={styles.restaurantReviews}><MdStar /> 4.9</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>
                    </a>

                    <a href="#" >
                        <div className={styles.card} >
                            <div className={styles.contentCard}>
                                <h4>Restaurante 3</h4>
                                <p className={styles.restaurantType}>Comida Vegana</p>
                                <p className={styles.restaurantDeliveryValue}>Fechada</p>
                                <p className={styles.restaurantReviews}><MdStar /> 5.0</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
                        </div>
                    </a>

                    <a href="#" >
                        <div className={styles.card} >
                            <div className={styles.contentCard}>
                                <h4>Restaurante 4</h4>
                                <p className={styles.restaurantType}>Comida Francesa</p>
                                <p className={styles.restaurantDeliveryValue}>Entrega R$ 5</p>
                                <p className={styles.restaurantReviews}><MdStar /> 4.7</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>
                    </a>

                    <a href="#" >
                        <div className={styles.card} >
                            <div className={styles.contentCard}>
                                <h4>Restaurante 1</h4>
                                <p className={styles.restaurantType}>Comida Italiana</p>
                                <p className={styles.restaurantDeliveryValue}>Entrega R$ 5</p>
                                <p className={styles.restaurantReviews}><MdStar /> 4.5</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>
                    </a>

                    <a href="#" >
                        <div className={styles.card} >
                            <div className={styles.contentCard}>
                                <h4>Restaurante 2</h4>
                                <p className={styles.restaurantType}>Comida Mexicana</p>
                                <p className={styles.restaurantDeliveryValue}>Entrega R$ 5</p>
                                <p className={styles.restaurantReviews}><MdStar /> 4.9</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>
                    </a>

                    <a href="#" >
                        <div className={styles.card} >
                            <div className={styles.contentCard}>
                                <h4>Restaurante 3</h4>
                                <p className={styles.restaurantType}>Comida Vegana</p>
                                <p className={styles.restaurantDeliveryValue}>Fechada</p>
                                <p className={styles.restaurantReviews}><MdStar /> 5.0</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
                        </div>
                    </a>

                    <a href="#" >
                        <div className={styles.card} >
                            <div className={styles.contentCard}>
                                <h4>Restaurante 4</h4>
                                <p className={styles.restaurantType}>Comida Francesa</p>
                                <p className={styles.restaurantDeliveryValue}>Entrega R$ 5</p>
                                <p className={styles.restaurantReviews}><MdStar /> 4.7</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>
                    </a>
                </div>
            </div>

            <Footer />
        </section>
    )
}