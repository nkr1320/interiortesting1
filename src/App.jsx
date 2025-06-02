import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css'
import LandingPage from './TailwindBlocks/Components/Pages/LandingPage'
import WoodCarvingDecorativeWork from './TailwindBlocks/Components/Pages/WoodCarvingDecorativeWork';
import DoorsWindows from './TailwindBlocks/Components/Pages/Doors-Windows';
import FurnitureMaking from './TailwindBlocks/Components/Pages/FurnitureMaking';
import PanelingCladding from './TailwindBlocks/Components/Pages/Paneling-Cladding';
import StructuralWoodwork from './TailwindBlocks/Components/Pages/StructuralWoodwork';
import ShootingStars from './TailwindBlocks/Components/Pages/ShootingStars';
import WoodenCeilingDesign from './TailwindBlocks/Components/Pages/WoodenCeilingDesign';
import WoodFlooring from './TailwindBlocks/Components/Pages/WoodFlooring';
import GallerySection from './TailwindBlocks/Components/Pages/GallerySection';
import ContentSection from './TailwindBlocks/Components/Pages/ContentSection';
import HeroSection from './TailwindBlocks/Components/Pages/HeroSection';


function App() {

  return (
    <>
<Router>
  <Routes>
<Route path="/" element={<LandingPage />} />
<Route path='/herosection' element={<HeroSection />} />
<Route path='/explore' element={<ContentSection />}/>
<Route path="/Gallery" element={<GallerySection />}/>     
    <Route path='/WoodCarvingDecorativeWork' element={<WoodCarvingDecorativeWork />} />
    <Route path='/DoorsWindows' element={<DoorsWindows />} />
    <Route path='/FurnitureMaking' element={<FurnitureMaking />} />
    <Route path='/PanellingCladding' element={<PanelingCladding />}/>
    <Route path='/StructuralWoodwork' element={<StructuralWoodwork />} />
    <Route path='/ShootingStars' element={<ShootingStars />} />
    <Route path='/WoodenCeilingDesign' element={<WoodenCeilingDesign />}/>
    <Route path='/WoodFlooring' element={<WoodFlooring />} />

  </Routes>
</Router>
    </>
  )
}

export default App