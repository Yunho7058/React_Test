import Router from './Router';
import store from './redux/store';
import { Provider } from 'react-redux';
import GlobalStyle from './components/Global/GlobalStyle';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router />
    </Provider>
  );
}

export default App;
