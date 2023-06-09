import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

import { lazy } from 'react';

const Home = lazy(() => import('pages/Home'));
const Tweets = lazy(() => import('pages/Tweets/Tweets'));
const Error = lazy(()=> import('./Error/Error'))

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/tweets" element={<Tweets/>}/>
        <Route path="*" element={<Error/>}/>
      </Route>
    </Routes>
    </>
  )
};


