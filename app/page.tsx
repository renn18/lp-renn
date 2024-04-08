import {NavbarDemo} from './components/Navbar'
import Image from "next/image";
import {ImagesSliderDemo}  from './components/Slider';
import {HeroParallaxDemo} from './components/Parallax'
import { GridBackgroundDemo } from './components/ui/grid-background';
// import About from './components/About';

export default function Home() {
  return (
    <main className='bg-black'>
      <NavbarDemo />
      <ImagesSliderDemo />
      <HeroParallaxDemo />
      {/* <About/> */}
      <GridBackgroundDemo/>
    </main>
  );
}
