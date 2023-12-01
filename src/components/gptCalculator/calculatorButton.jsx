// CalculatorButton.jsx

const CalculatorButton = ({ value, onClick }) => (
  <button
    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
    onClick={() => onClick(value)}
  >
    {value}
  </button>
);

export default CalculatorButton;
