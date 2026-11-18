import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Code2,
  FileBox,
  FlaskConical,
  Github,
  Grid2x2Check,
  Handshake,
  Layers,
  LayoutPanelTop,
  Linkedin,
  Mail,
  Menu,
  Rocket,
  Scaling,
  Search,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

const registry: Record<string, LucideIcon> = {
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  chart: BarChart3,
  book: BookOpen,
  code: Code2,
  flask: FlaskConical,
  github: Github,
  handshake: Handshake,
  layers: Layers,
  linkedin: Linkedin,
  mail: Mail,
  menu: Menu,
  rocket: Rocket,
  search: Search,
  shield: ShieldCheck,
  sparkles: Sparkles,
  close: X,
  zap: Zap,
  "grid-2x2-check": Grid2x2Check,
  "layout-panel-top": LayoutPanelTop,
  "file-box": FileBox,
  scaling: Scaling,
};

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 20, className }: IconProps) {
  const Component = registry[name] ?? Sparkles;
  return <Component size={size} className={className} aria-hidden="true" />;
}
