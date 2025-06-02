const Controls = ({ onChangeType, onRefresh }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">Tipo de gráfico</label>
      <select
        className="border rounded p-2"
        onChange={(e) => onChangeType(e.target.value)}
      >
        <option value="bar">Barras</option>
        <option value="line">Líneas</option>
        <option value="pie">Pastel</option>
      </select>
      <button
        onClick={onRefresh}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Actualizar datos
      </button>
    </div>
  );
};

export default Controls;