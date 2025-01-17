import Image from "next/image";
import { ThemeProvider } from 'next-themes';
import Home from "./(home)/_component.jsx/Home";
import EventsSection from "./(contact)/contact";
import Entry from "./(Conact_US)/entry";
export default function page() {
  return (
    <div className="w-full min-h-screen">
      <Home />
    </div>
  );
}
