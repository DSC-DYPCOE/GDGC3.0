import Image from "next/image";
import { ThemeProvider } from 'next-themes';
// export const ThemeContext = createContext(null)
import Home from "./(home)/_component.jsx/Home";
import GDGPreloader from "./Preloader/page";
import HomePage from "./(home)/_component.jsx/HomePage";
import GDSCInfoSection from "./Preloader/_components/LetsDoIt"
import Info from "./event/event";
export default function page() {
  return (
    <div className="w-full min-h-screen">
      {/* <GDGPreloader /> */}
      <HomePage />
      {/* <GDSCInfoSection /> */}
      
    </div>
  );
}
