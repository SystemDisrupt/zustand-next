import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { fields } from '../layouts/single-entity/single-entity.config';

import styles from '../styles/home.module.css';

const Home: NextPage = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>Zustand - Next.js test</h1>

      <p className={styles.description}>
        <ul>
          <li>
            <Link href="/entities">Entities Index</Link>
          </li>
          <li>
            <Link href="/entities/1">Entity 1</Link>
          </li>
        </ul>
      </p>
    </main>
  </div>
);

export async function getServerSideProps() {
  return {
    props: {
      entity: fields[0],
    },
  };
}

export default Home;
