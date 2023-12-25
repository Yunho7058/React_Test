import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Map from './page/Map';
import Main from './page/Main';
import ReduxTest from './page/Redux';
import HooksTest from './page/HooksTest';
import Posts from './page/Posts';
import RecoilTest from './page/RecoilTest';
import AxiosTest from './page/AxiosTest';
//const Review = lazy(() => import('./page/Review'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>로딩중</div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/map" element={<Map />} />
          <Route path="/reduxTest" element={<ReduxTest />} />
          <Route path="/hooksTest" element={<HooksTest />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/recoilTest" element={<RecoilTest />} />
          <Route path="/axiosTest" element={<AxiosTest />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
