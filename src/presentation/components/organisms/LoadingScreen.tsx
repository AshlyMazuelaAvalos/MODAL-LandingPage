import barLogo from "../../../assets/icons/BarLogo.svg";
import mincienciaAnidLogo from "../../../assets/icons/LOGOS MINCIENCIA + ANID 2026_PLUMA-BLANCO.svg";
import uvLogo from "../../../assets/Images/uv_logo_alta_rgba_blanco-2023.png";

const logos = [
  { src: barLogo, alt: "BarLogo", className: "w-36 sm:w-44" },
  { src: uvLogo, alt: "Universidad de Valparaíso", className: "w-24 sm:w-32" },
  {
    src: mincienciaAnidLogo,
    alt: "Ministerio de Ciencia y ANID",
    className: "w-48 sm:w-60",
  },
];

export function LoadingScreen() {
  return (
    <div
      className="loading-screen fixed inset-0 z-[100] flex min-h-screen items-center justify-center bg-surface/75 px-6 backdrop-blur-xl"
      role="status"
      aria-label="Cargando"
    >
      <div className="flex w-full max-w-4xl flex-col items-center gap-10 sm:gap-12">
        <div className="flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-8 sm:gap-x-14">
          {logos.map((logo, index) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className={`loading-screen__logo h-auto max-h-20 object-contain ${logo.className}`}
              style={{ animationDelay: `${index * 180}ms` }}
            />
          ))}
        </div>
        <div className="h-1 w-36 overflow-hidden rounded-full bg-foreground/20">
          <div className="loading-screen__progress h-full w-full origin-left rounded-full bg-secondary" />
        </div>
      </div>
    </div>
  );
}
