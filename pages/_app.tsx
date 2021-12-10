import { AppProps } from 'next/app';
import { Fragment } from 'react';
import { DefaultSeo } from 'next-seo';
import Layout from '@/components/layout';
import '@styles/tailwind.css';
import '@styles/global.css';

const Paycoins = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <DefaultSeo title="Billionaire Club" />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Fragment>
);

export default Paycoins;
