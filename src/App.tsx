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


) {
  const stateDarkMode = useSelector(
    (state: TypeRootReducer) => state.isDarkeMode
  );
  const theme = stateDarkMode === 'light' ? { mode: light } : { mode: dark };
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ScrollToTop />
          <Reset />
          <Backgound>
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/main" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/oauth/naver" element={<Naver />} />
                <Route path="/oauth/kakao" element={<Kakao />} />
                <Route path="/oauth/google" element={<Google />} />
              </Routes>
            </Suspense>
          </Backgound>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}


