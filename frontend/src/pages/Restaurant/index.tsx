import { useState, useEffect } from "react"

import { Error } from '../Error'
import { Footer } from "../../components/Footer"

import { api } from '../../services/api'
import { modifyTitle } from "../../services/modifyTitle"
import { toCurrency } from "../../services/toCurrency"

import styles from './styles.module.sass'
import { isEmpty } from "../../services/isEmpty"

export function Restaurant (props: any) {
    
    type RestaurantProps = {
        id: number,
        name: string,
        description: string,
        delivery_tax: number,
        image_url: string,
        product_categories: [{ 
                title: string,
                products: [{
                    id: string,
                    name: string,
                    description: string,
                    price: number,
                    image_url: string
                }]
        }]
    }

    type ProductsProps = {
        id: number, 
        name: string, 
        description: string, 
        price: number, 
        image_url: string
    }

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [restaurant, setRestaurant] = useState<RestaurantProps>()

    useEffect(() => {
        api
            .get<RestaurantProps>(`/api/restaurants/${props.match.params.id}`)
            .then((response) => setRestaurant(response.data))
            .catch((err) => console.log("Ops, ocorreu um erro: " + err))
            .finally(() => setIsLoading(false))
    }, [])

    const Loading = () => {
        return (
            <div className={styles.contentLoading}>
                <div className={styles.detailsRestaurantLoading}>
                    <div className={styles.imageRestaurant}></div>
                    <div className={styles.restaurant}></div>
                </div>
                <div className={styles.productsLoading}>
                    <div className={styles.textLoading}></div>
                    <div className={styles.plates}>
                        <div className={styles.plate} id={styles.first}></div>
                        <div className={styles.plate} id={styles.second}></div>
                        <div className={styles.plate} id={styles.third}></div>
                    </div>
                </div>
            </div>
        )
    }

    const renderRestaurant = () => {
        return (
            <div className={styles.contentWrapper}>
                <div className={styles.detailsRestaurant}>
                    <div className={styles.imageRestaurant}>
                        <img src={restaurant?.image_url} alt={restaurant?.name} />
                    </div>
                    <div className={styles.restaurant}>
                        <h2>{restaurant?.name}</h2>
                        <p>{restaurant?.description}</p>
                        {restaurant?.delivery_tax ? <p className={styles.price}>Entrega {toCurrency(restaurant.delivery_tax)}</p> : ''} 
                    </div>
                </div>
                <div className={styles.products}>
                    {restaurant?.product_categories.map(({title, products}) => {
                        return (<>
                            <div>
                                <h2>{title}</h2>
                            </div>
                            <div className={styles.plates}>
                            {products.map(({id, name, description, price, image_url})  => {
                                    return (
                                        <div className={styles.plate} id={`r${id}`}>
                                            <img src={image_url} alt={description} />
                                            <div className={styles.info}>
                                                <h3>{name}</h3>
                                                <p>{description}</p>
                                                <p className={styles.price}>{toCurrency(price)}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </>)
                    })}
                    
                    
                </div>
            </div>
        )
    }
    
    const getRestaurant = () =>{
        if (isEmpty(restaurant || {}) && isLoading === false) {
            return <Error />
        } else if (isLoading) {
            return Loading()
        } else {
            return renderRestaurant()
        }
    }

    modifyTitle(`Restaurante ${restaurant?.name || 'Não Encontrado'}`)

    return (
        <section>
            {getRestaurant()}
            <Footer />
        </section>
    )
}