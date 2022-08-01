import { Link } from 'react-router-dom'
import styles from './styles.module.sass'
import { MdStar, MdAdd, MdClose, MdKeyboardArrowRight } from 'react-icons/md'

import ios from '../../assets/button-ios.png'
import android from '../../assets/button-android.png'
import food from '../../assets/food.png'
import { Footer } from '../../components/Footer'

import { useEffect, useState } from 'react'
import { toSlug } from '../../services/toSlug'
import { useQuery } from '../../services/useQuery'
import { api } from '../../services/api'
import { toCurrency } from '../../services/toCurrency'
import { modifyTitle } from '../../services/modifyTitle'
import { randomIntFromInterval } from '../../services/randomIntFromInterval'
import { Loading } from '../../components/Loading'


type RestaurantProps = {
    id: number,
    name: string,
    image_url: string,
    delivery_tax: number,
    category_title: string,
}

type CategoryProps = {
    id?: number,
    title?: string,
    image_url?: string
}

export function Restaurants () {

    modifyTitle("Restaurantes")
    
    const query = useQuery()
    
    const queryParams = {
        q: query.get('q') ? `q=${query.get('q')}` : '',
        city: query.get('city') ? `city=${query.get('city')}` : '',
        category: query.get('category') ? `category=${query.get('category')}` : ''
    }

    const [ restaurants, setRestaurants ] = useState<RestaurantProps[]>([])
    const [ categories, setCategories ] = useState<CategoryProps[]>([])
    const [ isLoading, setIsLoading ] = useState<boolean>(true)

    useEffect(() => {
        api
            .get<RestaurantProps[]>(`/api/restaurants?${queryParams.q}&${queryParams.city}&${queryParams.category}`) // ?q=los&city=Curitiba&category=mexicana
            .then((response) => setRestaurants(response.data))
            .catch((err) => console.log("Ops, ocorreu um erro: " + err))
            .finally(() => setIsLoading(false))
    }, [])

    useEffect(() => {
        api
            .get<CategoryProps[]>('/api/categories')
            .then((response) => setCategories(response.data))
            .catch((err) => console.log("Ops, ocorreu um erro: " + err))
    }, [])

    const getCategories = () => {
        if (categories.length <= 0) {
            <li>Sem categorias</li>
        } else {
            return (
                categories.filter((category, index) => index <= 3).map(({ title, image_url }) => {
                return (
                    <a href={`/restaurantes?category=${title}`}>
                        <li>
                            <span className={styles.titleImage}>{title}</span>
                            <img src={image_url} alt={`comida ${title}`} />
                        </li>
                    </a>
                )
            })
            )
        }
    }

    const getRestaurants = () => {
        if (restaurants.length <= 0 && isLoading === false) {
            return (<div>Nenhum restaurante encontrado</div>)
            
        } else if (isLoading) {
            return (<Loading />)
        } else {
            return restaurants.map(({ id, name, image_url, delivery_tax, category_title  }) => {
                return (
                    <Link to={`/restaurante/${toSlug(name)}`}>
                        <div className={styles.card}>
                            <div className={styles.contentCard}>
                                <h4>{name}</h4>
                                <p className={styles.restaurantType}>Comida {category_title}</p>
                                <p className={styles.restaurantDeliveryValue}>Entrega {toCurrency(delivery_tax)}</p>
                                <p className={styles.restaurantReviews}><MdStar /> {randomIntFromInterval(4.4, 5.1)}</p>
                            </div>
                            <img src={image_url} alt={name} />
                        </div>
                    </Link>
                )
            })
        }
    }

    // should display modal with category list
    const [modal, setModal] = useState(false)

    const toggleModal = () => setModal(!modal)

    const Modal = () => {
        return(
            <div className={styles.overlay} onClick={() => toggleModal()}>
                <div className={styles.modalBox}>
                    <div className={styles.contentModal}>
                        <div style={{display: 'flex', justifyContent: 'end'}}>
                            <MdClose 
                                className={styles.closeModal} 
                                onClick={() => toggleModal()}
                            />
                        </div>
                        <ul>
                        {
                            categories.map(({ title }) => {
                                return (
                                    <a href={`/restaurantes?category=${title}`}>
                                        <li>
                                            <span className={styles.titleImage}>{title}</span>
                                            <MdKeyboardArrowRight />
                                        </li>
                                    </a>
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className={styles.contentWrapper}>
            {
                modal 
                ? <Modal /> 
                : null
            }
            <div className={styles.contentTop}>
                <div className={styles.text}>
                    <h1>Entrega<br/><span className={styles.highlight}>mais rápida</span> &<br/> <span className={styles.highlight}>coleta</span> fácil.</h1>
                    <p>Faça o download do app nas seguintes plataformas:</p>
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
                <ul onClick={() => toggleModal()}>
                    <>{getCategories()}</>
                    <li className={styles.moreCategories}>
                        <MdAdd size={70} />
                    </li>
                </ul>
            </div>

            <div className={styles.restaurantsList}>
                <h2>Lista de Restaurantes</h2>
                <div className={styles.cards}>
                    { getRestaurants() }
                </div>
            </div>

            <Footer />
        </section>
    )
}