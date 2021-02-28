import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css'


export function ChallengeBox(){
    const {activeChallenges, resetChallenges, completeChallenge} = useContext(challengesContext)
    const{ resetCountdown} = useContext(CountdownContext);



    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountdown ();
    }
    
    function handleChallengeFailed () {
        completeChallenge();
        resetCountdown ();
    }

    return (
        <div className={styles.ChallengeBoxContainer}>
            { activeChallenges ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenges.amount} xp</header>
                    
                    <main>
                        <img src={`icons/${activeChallenges.type}.svg`} />
                        <strong>Nove desafio</strong>
                        <p>{activeChallenges.description}</p>
                    </main>

                    <footer>
                        <button type="button"
                        className={styles.challengeFailedButton}
                        onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>

                        <button type="button"
                        className={styles.challengeSucceededButton}
                        onClick={handleChallengeSucceeded}
                        
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                            <div className={styles.challengeNotActive}>
                                <strong>Inicia um ciblo para receber desafios a serem completados  </strong>
                                <p>
                                    <img src="icons/level-up.svg" alt="Level Up" />
                                    Avance de level completando desafios.                    
                                </p>
                            </div>
            ) }
        </div>
    )
}