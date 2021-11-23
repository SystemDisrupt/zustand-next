import Link from 'next/link';
import { useEntityStore } from '../../../lib/entity.store';

import styles from '../../styles/home.module.css';

export const MultipleEntitiesLayout = () => {
  const { entities } = useEntityStore();

  console.log(entities);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Zustand - Entities Index</h1>

        <ul className={styles.description}>
          {entities.map((entity, index) => (
            <li key={`entity-${entity.id}`}>
              <Link href={`/entities/${index}`}>{entity.label}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};
