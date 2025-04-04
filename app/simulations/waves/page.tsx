import Link from 'next/link';
import styles from '@/app/styles/ReturnHome.module.css'; 

export default function GamePage () {
    return (
        <>
        <iframe
            src={'/simulations/waves/index.html'}
            style={{ width: '100vw', height: '90vh', border: 'none' }}
            title={"Game"}
        />
        <Link href='../' className={styles.button}>
            Return to home page
        </Link>
        </>
    );
}