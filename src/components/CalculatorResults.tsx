function CalculatorResults() {
  return (
    <div className="grid grid-cols-1 w-full">
      {/* Employee Results */}

      <div className="border border-yellow-400 rounded-lg p-4">
        <div className="border-b border-yellow-400 pb-2 mb-4">
          <h2 className="text-center text-lg font-semibold">Angajat</h2>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Venit brut</span>

            <span className="font-semibold">5,999 lei</span>
          </div>

          <div className="flex justify-between text-red-600">
            <span>CASS (sănătate)</span>

            <span>-300 lei</span>
          </div>

          <div className="flex justify-between text-red-600">
            <span>CAS (pensie)</span>

            <span>-750 lei</span>
          </div>

          <div className="flex justify-between text-red-600">
            <span>Impozit pe venit</span>

            <span>-516 lei</span>
          </div>

          <div className="flex justify-between text-red-600">
            <span>Contabilitate</span>

            <span>-89 lei</span>
          </div>

          <div className="flex justify-between bg-yellow-100">
            <span className="font-semibold">Venit net</span>

            <span className="font-semibold">4,344 lei</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculatorResults;
