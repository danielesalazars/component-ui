import { Route, Routes } from 'react-router-dom';
import { Home } from '@/home';
import { ROUTES } from '@/routes';
import SearchContextualPage from '@/modules/module/pages/SearchContextual';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.SEARCH} element={<SearchContextualPage />} />
    </Routes>
  );
}

export default App;
