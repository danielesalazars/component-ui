interface Props {
  pagina: number;
  totalPaginas: number;
  onPageChange: (nueva: number) => void;
}

export const Pagination = ({ pagina, totalPaginas, onPageChange }: Props) => (
  <div className="flex justify-end items-center mt-4 space-x-2">
    <button
      className="px-3 py-1 border rounded-md text-sm bg-white hover:bg-gray-100 disabled:opacity-50"
      onClick={() => onPageChange(pagina - 1)}
      disabled={pagina === 1}>
      Anterior
    </button>
    <span className="text-sm text-gray-600">
      Página {pagina} de {totalPaginas}
    </span>
    <button
      className="px-3 py-1 border rounded-md text-sm bg-white hover:bg-gray-100"
      onClick={() => onPageChange(pagina + 1)}
      disabled={pagina === totalPaginas}>
      Siguiente
    </button>
  </div>
);
