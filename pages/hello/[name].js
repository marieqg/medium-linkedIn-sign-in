import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}> Hello {name}</h1>
      </main>
    </div>
  );
};
export default Index;
