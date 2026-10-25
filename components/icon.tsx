import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  Server,
  Smartphone,
  Sun,
  UsersRound,
  X,
} from "lucide-react";

const icons = {
  arrowDownRight: ArrowDownRight,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  check: Check,
  chevronDown: ChevronDown,
  code: Code2,
  globe: Globe2,
  layers: Layers3,
  linkedin: Linkedin,
  mail: Mail,
  mapPin: MapPin,
  menu: Menu,
  message: MessageCircle,
  moon: Moon,
  phone: Phone,
  server: Server,
  smartphone: Smartphone,
  sun: Sun,
  users: UsersRound,
  close: X,
};

export type IconName = keyof typeof icons;

export function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  const Component = icons[name];
  return <Component aria-hidden="true" className={className} strokeWidth={1.8} />;
}
