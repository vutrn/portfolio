import PortfolioSections from './components/PortfolioSections'
import Scene3D from './components/Scene3D'

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* 3D Scene Background */}
      <Scene3D />
      
      {/* Portfolio UI Overlay */}
      <PortfolioSections />
    </div>
  )
}

export default App
