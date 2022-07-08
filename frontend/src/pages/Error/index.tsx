import { Link } from 'react-router-dom'
import image from '../../assets/error.svg'

const sessionStyle = {
    margin: "2rem 0 4rem 0",
    width: "100%",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "center"
}

const buttonStyle = {
    display: "inline-block",
    background: "#2B2D42",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "25px",
    padding: "1rem 2rem",
}

export function Error () {
    return (
        <section style={sessionStyle}>
            <img 
                src={image} 
                alt="desenho de um homem empurrando um monte de caixa em ambiente logístico" 
                style={{width: "35rem", marginBottom: "2rem"}}
            />
            <div style={{color: "#2B2D42"}}>
                <h2 style={{fontSize: "3rem", margin: 0}}>Oops, algo deu errado!</h2>
                <p>Esta página não existe ou foi removida! Sugerimos que volte para o inicio.</p>
                <Link to="/restaurantes" style={buttonStyle}>Voltar para o inicio</Link>
            </div>
        </section>
    )
}