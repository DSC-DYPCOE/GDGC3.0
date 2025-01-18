import Image from "next/image";
import { ThemeProvider } from 'next-themes';
// export const ThemeContext = createContext(null)
import Home from "./(home)/_component.jsx/Home";
import EventsSection from "./event/page";
import Entry from "./(Conact_US)/entry";
export default function page() {
  return (
    <div className="w-full min-h-screen">
      <Home />
    </div>
  );
}
