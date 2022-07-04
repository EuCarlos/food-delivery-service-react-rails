import { FaHeart, FaHome, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from './styles.module.sass'

export function Footer () {
    return (
        <footer className={styles.contentFooter}>
            <p>Criado com <FaHeart /> por  <a href="https://carlosalves.vercel.app/">Carlos Alves</a></p>
            <ul>
                <li><Link to="/"><FaHome /> Inicio</Link></li>
                <li><a href="https://github.com/eucarlos"><FaGithub /> Github</a></li>
            </ul>
        </footer>
    )
}