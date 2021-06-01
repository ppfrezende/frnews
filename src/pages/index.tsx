import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | FRNews</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Olá, bem-vindo!</span>

          <h1>
            Notícias sobre o mundo do <span>Direito</span> em um só lugar
          </h1>

          <p>
            Tenha acesso a todo conteúdo dos posts <br />
            <span>por apenas R$7,99</span>
          </p>

          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl Power" />
      </main>
    </>
  );
}
