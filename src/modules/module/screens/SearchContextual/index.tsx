import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { SearchFilters } from '@/modules/module/components/SearchFilters';
import { SearchTable } from '@/modules/module/components/SearchTable';
import { Pagination } from '@/modules/module/components/Pagination';
import { DetailModal } from '@/modules/module/components/DetailModal';

import { DATA } from '@/lib/mocks/data.mock';

export const SearchContextualScreen = () => {
  const navigate = useNavigate();

  // Filtros
  const [tipoSolicitud, setTipoSolicitud] = useState('');
  const [estadoSolicitud, setEstadoSolicitud] = useState('');

  // Resultados filtrados
  const [resultados, setResultados] = useState<any[]>([]);

  // Paginación
  const [pagina, setPagina] = useState(1);
  const itemsPorPagina = 5;

  // Modal
  const [modalVisible, setModalVisible] = useState(false);
  const [detalleSeleccionado, setDetalleSeleccionado] = useState<any | null>(
    null,
  );

  // Buscar en base a filtros
  const handleSearch = () => {
    const filtrados = DATA.filter((item) => {
      return (
        (!tipoSolicitud || item.tipo === tipoSolicitud) &&
        (!estadoSolicitud || item.estado === estadoSolicitud)
      );
    });
    setPagina(1);
    setResultados(filtrados);
  };

  // Paginación lógica
  const totalPaginas = Math.ceil(resultados.length / itemsPorPagina);
  const start = (pagina - 1) * itemsPorPagina;
  const end = start + itemsPorPagina;
  const datosPagina = resultados.slice(start, end);

  // Ver detalle
  const handleVerDetalle = (item: any) => {
    setDetalleSeleccionado(item);
    setModalVisible(true);
  };

  // Cerrar modal
  const cerrarModal = () => {
    setDetalleSeleccionado(null);
    setModalVisible(false);
  };

  return (
    <div className="p-6 bg-gray-50 flex-1 relative">
      {/* Retornar */}
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 mb-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition self-start">
        ← Volver
      </button>

      {/* Título */}
      <h1 className="text-3xl font-bold mb-2 text-gray-900">
        Búsqueda Contextual Simple
      </h1>
      <p className="text-gray-700 mb-6">
        Consulta las solicitudes según los filtros seleccionados.
      </p>

      {/* Filtros */}
      <SearchFilters
        tipoSolicitud={tipoSolicitud}
        estadoSolicitud={estadoSolicitud}
        onTipoChange={setTipoSolicitud}
        onEstadoChange={setEstadoSolicitud}
        onSearch={handleSearch}
      />

      {/* Tabla o mensaje vacío */}
      {resultados.length > 0 ? (
        <>
          <SearchTable datos={datosPagina} onVerDetalle={handleVerDetalle} />
          <Pagination
            pagina={pagina}
            totalPaginas={totalPaginas}
            onPageChange={setPagina}
          />
        </>
      ) : (
        <div className="text-center text-gray-500 mt-10">
          No hay resultados. Ajusta los filtros y haz clic en "Buscar".
        </div>
      )}

      {/* Modal de detalle */}
      <DetailModal
        visible={modalVisible}
        detalle={detalleSeleccionado}
        onClose={cerrarModal}
      />
    </div>
  );
};

export default SearchContextualScreen;
