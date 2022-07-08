import { useState } from "react"
import { Footer } from "../../components/Footer"
import { modifyTitle } from "../../services/modifyTitle"
import styles from './styles.module.sass'

export function Restaurant (props: any) {
    modifyTitle(`Restaurante ${props.match.params.id}`)

    // remover antes de subir
    type FoodListProps = {
        name: string,
        image: string,
        description: string,
        price: number
    }
    const FoodList: FoodListProps[] = [
        {
            name: "Nacho Guacamole",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            description: "Tortilha com guacamole",
            price: 19
        },
        {
            name: "Nacho Guacamole",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            description: "Tortilha com guacamole",
            price: 19
        },
        {
            name: "Nacho Guacamole",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            description: "Tortilha com guacamole",
            price: 19
        },
        {
            name: "Nacho Guacamole",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            description: "Tortilha com guacamole",
            price: 19
        },
        {
            name: "Nacho Guacamole",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            description: "Tortilha com guacamole",
            price: 19
        }
    ]

    const [isLoading, setIsLoading] = useState<boolean>(true)

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
                        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div className={styles.restaurant}>
                        <h2>Los sombreros</h2>
                        <p>Nostrud in consectetur labore eu occaecat eu aliqua proident excepteur. Aliqua sit exercitation elit ea cupidatat ut consectetur et velit minim proident ut amet pariatur. Ad duis mollit eiusmod quis. Laborum amet aliquip sunt nostrud minim voluptate qui anim. Aute amet laborum id mollit labore.</p>
                        <p className={styles.price}>Entrega R$ 5,20</p>
                    </div>
                </div>
                <div className={styles.products}>
                    <div>
                        <h2>Pratos Mexicanos</h2>
                    </div>
                    <div className={styles.plates}>
                    {FoodList.map(({name, image, description, price}) => {
                            return (
                                <div className={styles.plate}>
                                    <img src={image} alt={description} />
                                    <div className={styles.info}>
                                        <h3>{name}</h3>
                                        <p>{description}</p>
                                        <p className={styles.price}>R$ {price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
    

    return (
        <section>
            {Loading()}
            <Footer />
        </section>
    )
}