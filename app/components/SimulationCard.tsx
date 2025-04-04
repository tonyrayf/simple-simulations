import styles from '../styles/SimulationCard.module.css';
import Link from 'next/link';

interface SimulationCardProps
{
    name : string;
    image : string;
}

export default function SimulationCard({name, image} : SimulationCardProps)
{
    return (
        <Link href="simulations/waves" className={styles.card}>
            <img src={image} />
            {name}
        </Link>
    );
}