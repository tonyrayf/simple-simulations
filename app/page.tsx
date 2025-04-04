import styles from './styles/Home.module.css';
import SimulationCard from './components/SimulationCard';

export default function Home() {
	return (
		<>
            <h1 className={styles.heading}>Simple physics simulations</h1>
			<p className={styles.by}>by ARF-paradox</p>

			<div className={styles.cardContainer}>
				<SimulationCard name='wAvEs' image='wave.jpg'/>
				<SimulationCard name='pendulum' image='pendulum.jpg'/>
			</div>
		</>
	);
}