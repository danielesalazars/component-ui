interface Props {
  datos: any[];
  onVerDetalle: (item: any) => void;
}

const getEstadoClass = (estado: string) => {
  switch (estado) {
    case 'Pendiente':
      return 'bg-yellow-100 text-yellow-800';
    case 'En revisión':
      return 'bg-blue-100 text-blue-800';
    case 'Aprobada':
      return 'bg-green-100 text-green-800';
    case 'Rechazada':
      return 'bg-red-100 text-red-800';
    default:
      return '';
  }
};

export const SearchTable = ({ datos, onVerDetalle }: Props) => (
  <div className="overflow-x-auto bg-white rounded shadow">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
            ID
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
            Tipo
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
            Estado
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
            Fecha
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {datos.map((item) => (
          <tr key={item.id}>
            <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.tipo}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                className={`px-2 py-1 text-sm font-medium rounded ${getEstadoClass(item.estado)}`}>
                {item.estado}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{item.fecha}</td>
            <td
              onClick={() => onVerDetalle(item)}
              className="px-6 py-4 whitespace-nowrap text-blue-600 cursor-pointer hover:underline">
              Ver
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
