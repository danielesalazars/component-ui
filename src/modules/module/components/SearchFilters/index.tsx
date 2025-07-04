interface Props {
  tipoSolicitud: string;
  estadoSolicitud: string;
  onTipoChange: (value: string) => void;
  onEstadoChange: (value: string) => void;
  onSearch: () => void;
}

export const SearchFilters = ({
  tipoSolicitud,
  estadoSolicitud,
  onTipoChange,
  onEstadoChange,
  onSearch,
}: Props) => (
  <div className="bg-white rounded shadow p-4 space-y-4 mb-6">
    <div className="flex flex-wrap gap-4">
      <select
        value={tipoSolicitud}
        onChange={(e) => onTipoChange(e.target.value)}
        className="px-4 py-2 border rounded-md flex-1 min-w-[200px]">
        <option value="">Tipo de solicitud</option>
        <option value="Registro">Registro</option>
        <option value="Modificación">Modificación</option>
        <option value="Eliminación">Eliminación</option>
      </select>

      <select
        value={estadoSolicitud}
        onChange={(e) => onEstadoChange(e.target.value)}
        className="px-4 py-2 border rounded-md flex-1 min-w-[200px]">
        <option value="">Estado</option>
        <option value="Pendiente">Pendiente</option>
        <option value="En revisión">En revisión</option>
        <option value="Aprobada">Aprobada</option>
        <option value="Rechazada">Rechazada</option>
      </select>

      <button
        onClick={onSearch}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition h-fit self-end">
        Buscar
      </button>
    </div>
  </div>
);
