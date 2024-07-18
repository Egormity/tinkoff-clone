import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import AppLoyaut from './ui/AppLoyaut';
import PageNotFound from './ui/PageNotFound';
import Home from './ui/Home';
import LoginPage from './ui/LoginPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLoyaut />}>
          <Route index element={<Navigate replace to='home' />} />
          <Route path='home' element={<Home />} />
        </Route>

        <Route path='login-page' element={<LoginPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

      <Toaster
        position='top-center'
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'white',
            color: 'inherit',
          },
        }}
      />
    </BrowserRouter>
  );
}
