# Dottex Landing — React + TypeScript + Tailwind

SPA con Clean Architecture y Atomic Design. Estética oscura corporativo-tecnológica inspirada en la landing de Dottex (Behance, versión 2023).

## Uso

```bash
npm install
npm run dev        # desarrollo
npm run build      # typecheck + build de producción
```

## Design tokens

Definidos como variables CSS (canales RGB) en `src/index.css` y expuestos como colores semánticos en `tailwind.config.js`:

| Token | Valor | Uso |
|---|---|---|
| `primary` | `#E65014` | Títulos destacados, botones principales |
| `secondary` | `#F89449` | Acentos, badges, hover |
| `surface` | `#090822` | Fondo principal |
| `surface-alt` | `#13123D` | Tarjetas y secciones alternas |
| `foreground` | `#EFE5DB` | Texto (secundario con `/70`) |

## Arquitectura

```
src/
├── domain/          models/ (entidades) + repositories/ (puerto ContentRepository)
├── application/     useCases/ (casos de uso que reciben el repositorio)
├── infrastructure/  data/ (datos en español + StaticContentRepository)
└── presentation/    components/{atoms,molecules,organisms}, layouts/, pages/
```

Regla de dependencias: `presentation → application → domain ← infrastructure`.
Para usar una API real, crea otra clase que implemente `ContentRepository` y cámbiala en `LandingPage.tsx`.

El contenido de `infrastructure/data/content.ts` es de ejemplo; reemplázalo por el real.
