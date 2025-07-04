import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes';

export const Home = () => {
  return (
    <div className="p-6 bg-gray-50 flex flex-col gap-10">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Bienvenido 👋</h1>
        <p className="text-gray-700">Dashboard Ejemplo.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          to={ROUTES.SEARCH}
          className="block bg-yellow-100 hover:bg-yellow-200 p-6 rounded shadow transition">
          <h3 className="text-xl font-bold text-yellow-800 mb-1">
            Busqueda Contextual
          </h3>
          <p className="text-gray-700">Ejemplo de Busqueda Contextual Simple</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
