import { ApolloProvider } from '@apollo/client';
import { client } from '../../graphql';
import styles from './App.module.css';
import { Main } from '../index';

export function App() {
  console.log(styles);
  return (
    <ApolloProvider client={client}>
    <div className={styles.app}>
      <Main />
    </div>
    </ApolloProvider>
  );
}
