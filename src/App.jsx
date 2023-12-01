import Calculator from "./components/calculator"
import GptCalculator from "./components/gptCalculator/gptCalculator"
function App() {

  return (
    <div className="h-screen bg-slate-50 flex justify-center items-center">
      <Calculator />
      <GptCalculator />
    </div>
  )
}

export default App
