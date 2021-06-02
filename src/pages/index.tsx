import { GetStaticProps } from 'next';

import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | FRNews</title>
      </Head>
      <main className={styles.contentContainer}>
        <img src="/images/avatar.svg" alt="Girl Power" />

        <section className={styles.hero}>
          <span>👏 Olá, bem-vindo!</span>

          <h1>
            Notícias sobre o mundo do <span>Direito</span> em um só lugar
          </h1>

          <p>
            Tenha acesso a todo conteúdo dos posts <br />
            <span>por apenas {product.amount} por mês</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1IxelaCyPluncVJQmeYklBa8');

  const product = {
    priceId: price.id,
    amount: Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
