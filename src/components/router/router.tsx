import { createBrowserRouter } from 'react-router-dom';

import HomePage from '@pages/HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: (
      //   <MainLayout> your layout here
      <HomePage />
      //   </MainLayout>
    ),
  },
]);
