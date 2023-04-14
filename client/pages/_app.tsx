import type { AppProps } from 'next/app'
import '../styles/main.scss';
import { store } from '../redux/store';
import { Provider } from 'react-redux';


import Layout from '../components/Layout/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}