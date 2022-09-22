import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Map from './page/Map';
import Main from './page/Main';
import ReduxTest from './page/Redux';
import HooksTest from './page/HooksTest';
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
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
