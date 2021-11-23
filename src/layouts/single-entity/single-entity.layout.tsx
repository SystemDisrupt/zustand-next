import Link from 'next/link';

import { useEntityStore } from '../../../lib/entity.store';

import styles from '../../styles/home.module.css';

export const SingleEntityLayout = () => {
  const store = useEntityStore();
  const entity = store.entities.find((e: any) => e.id === store.selectedEntity);

  return (
    <div className={styles.container}>
      {entity && (
        <main className={styles.main}>
          <h1 className={styles.title}>Zustand - Entity #{entity.id}</h1>

          <p className={styles.description}>
            <Link href="/entities">Entities</Link>
          </p>

          <p className={styles.description}>
            <code className={styles.code}>{JSON.stringify(entity)}</code>
          </p>
        </main>
      )}
    </div>
  );
};
