interface Props {
  visible: boolean;
  detalle: any;
  onClose: () => void;
}

export const DetailModal = ({ visible, detalle, onClose }: Props) => {
  if (!visible || !detalle) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Detalle de la Solicitud</h2>
        <ul className="space-y-2 text-gray-700">
          <li>
            <strong>ID:</strong> {detalle.id}
          </li>
          <li>
            <strong>Tipo:</strong> {detalle.tipo}
          </li>
          <li>
            <strong>Estado:</strong> {detalle.estado}
          </li>
          <li>
            <strong>Fecha:</strong> {detalle.fecha}
          </li>
        </ul>
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
