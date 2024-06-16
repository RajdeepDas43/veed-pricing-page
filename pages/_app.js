import { MantineProvider } from '@mantine/core';
import '../styles/gloabls.css';

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  );
}