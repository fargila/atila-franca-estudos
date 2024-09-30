import { FaSpinner } from "react-icons/fa"
import styles from '../styles/Loader.module.css'

const Loader = () => {
    return (
        <>
            <div className={styles.mainDivLoader}>
                <h3>Aguarde um momento... [tempo médio de espera: 10s]</h3>
                <FaSpinner className={styles.loader}/>
            </div>
        </>
    )
}

export default Loader
