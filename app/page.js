import Image from "next/image";
import { ThemeProvider } from 'next-themes';
// export const ThemeContext = createContext(null)
import Home from "./(home)/_component.jsx/Home";
import EventsSection from "./event/page";
<<<<<<< HEAD
import Entry from "./contact/entry";
=======
import Entry from "./(Conact_US)/entry";
>>>>>>> ff6c3e46bc9ec16ee18673c5731c1c397a5f28b8
export default function page() {
  return (
    <div className="w-full min-h-screen">
      <Home />
    </div>
  );
}
