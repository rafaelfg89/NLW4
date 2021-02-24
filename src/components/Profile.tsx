import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/rafaelfg89.png" alt="Rafael Guimaraes" />
            <div>
                <strong>Rafael Guimaraes</strong>
                <p>Level 666</p>
            </div>
        </div>
    )
}