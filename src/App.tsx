import Router from './Router';
import store from './redux/store';
import { Provider } from 'react-redux';
import GlobalStyle from './components/Global/GlobalStyle';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <Provider store={store}>
      <RecoilRoot>
        <GlobalStyle />
        <Router />
      </RecoilRoot>
    </Provider>
  );
}

export default App;
