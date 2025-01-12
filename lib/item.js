import { Home, Tv, MapPin, Users, Mail, LogIn } from "lucide-react";

export const info = [
  {
    name: "Home",
    to: "/",
    icon: <Home size={20} />, // Home icon from Lucide React
  },
  {
    name: "Projects",
    to: "/projects",
    icon: <Tv size={20} />, // DVR icon replacement
  },
  {
    name: "Events",
    to: "/events",
    icon: <MapPin size={20} />, // Location icon from Lucide React
  },
  {
    name: "Team",
    to: "/team",
    icon: <Users size={20} />, // Groups icon from Lucide React
  },
  {
    name: "Contact",
    to: "/contact",
    icon: <Mail size={20} />, // Mail icon from Lucide React
  },
  {
    name: "Login",
    to: "/login-signup",
    icon: <LogIn size={20} />, // Login icon from Lucide React
  },
];
