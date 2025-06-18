import Scene3D from "./components/Scene3D";
import PortfolioSections from "./components/PortfolioSections";

function App() {
  return (
    <div className="relative w-full min-h-screen bg-gray-900">
      {/* 3D Scene Background - Fixed position */}
      <div className="fixed inset-0 z-0">
        <Scene3D />
      </div>

      {/* Portfolio UI Overlay - Scrollable */}
      <div className="relative z-10">
        <PortfolioSections />
      </div>
    </div>
  );
}

export default App;
