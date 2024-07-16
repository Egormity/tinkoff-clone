import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AppLoyaut from './ui/AppLoyaut';
import PageNotFound from './ui/PageNotFound';
import Home from './ui/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLoyaut />}>
          <Route index element={<Navigate replace to='home' />} />
          <Route path='home' element={<Home />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
