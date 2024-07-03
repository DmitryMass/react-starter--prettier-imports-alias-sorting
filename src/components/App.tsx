import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './router/router';

import { Toaster } from 'sonner';

const App: FC = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors position="top-center" duration={3000} />
    </>
  );
};

export default App;
