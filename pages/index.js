// pages/index.js
import Head from 'next/head';
import AppHeader from '../components/Header';
import Pricing from '../components/Pricing';
import TrustedBy from '../components/TrustedBy';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Veed.io Pricing</title>
        <meta name="description" content="Veed.io Pricing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="background"></div>
      <div className="content">
        <AppHeader />
        <main>
          <Pricing />
          <TrustedBy />
        </main>
      </div>
    </div>
  );
}
