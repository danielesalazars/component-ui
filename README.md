# Component UI

Es un Aplicaciónn con Temporal para Componentes UI con Arquitectura Modular, la cual a sido desarrollada en **React + Vite** y que utliza **Module Federation**.

## 🎯 Propósito

Este proyecto tiene como objetivo proporcionar **Componentes UI**

## 🧠 ¿Qué nos ofrece?

- Funcionalidad independiente enfocada en su dominio (Dashboard, reportes, etc.).
- Integración remota sencilla a través de **Module Federation**.
- Configuración estandarizada para **TypeScript, TailwindCSS** y **Vitest**.
- Reporte de calidad y cobertura con **SonarQube**.

## 🧰 Tecnologías usadas

- ⚛️ React 19 + Vite: Empaquetado y desarrollo.
- 🧪 Vitest + Testing Library: Pruebas Unitarias.
- 🎨 TailwindCSS 3: Estilos.
- 🧭 Module Federation: Consumo dinámico de MicroFronts.
- 🔐 MSAL: Autenticación con Azure.
- 🧮 SonarQube — Calidad de código y cobertura.

## 📂 Estructura de proyecto

```text
microfront/
├── public/                    # Archivos públicos accesibles directamente
├── test/                      # Pruebas unitarias globales con Vitest
├── src/                       # Código fuente principal del Microfront
│   ├── assets/                # Recursos estáticos (imágenes, fuentes, etc.)
│   ├── home/                  # Componente visual del Dashboard Principal
│   ├── lib/                   # Librerías y utilidades compartidas
│   │   ├── config/            # Configuración global (e.g. MSAL, env vars)
│   │   ├── constants/         # Constantes usadas en todo el proyecto
│   │   ├── exceptions/        # Manejo centralizado de errores/excepciones
│   │   ├── mocks/             # Mocks de prueba temporal
│   │   ├── utils/             # Funciones helper reutilizables
│   │   └── validations/       # Lógica de validación (e.g. campos, formularios)
│   ├── modules/               # Módulos del Microfront
│   │   ├── module/            # Módulo específico del Microfront
│   │       ├── components/    # Componentes reutilizables globales del módulo
│   │       │   ├── [CMP-01]/  # Pantalla de componente para Modulo X
│   │       ├── hooks/         # Hooks personalizados de React para el módulo
│   │       ├── layouts/       # Layouts para la estructura base de páginas del módulo
│   │       ├── pages/         # Páginas base para rutas sencillas del módulo
│   │       ├── screens/       # Pantallas o features completas divididas por carpeta
│   │       └── services/      # Comunicación con microservicios Backend desde este módulo
│   ├── routes/                # Configuración y definición centralizada de rutas
├── .env.sonar.local           # Variables de entorno privadas para sonar (IDs, URLs)
├── index.html                 # HTML base que Vite usa como plantilla
├── package.json               # Dependencias y scripts del proyecto
├── postcss.config.js          # Configuración de PostCSS (TailwindCSS y autoprefixer)
├── sonar-project.properties   # Configuración para el análisis en SonarQube
├── tailwind.config.js         # Configuración global de TailwindCSS
├── tsconfig.app.json          # Configuración TS para la app
├── tsconfig.json              # Configuración TS raíz
├── tsconfig.node.json         # Configuración TS para Node (scripts Vite)
├── tsconfig.test.json         # Configuración TS para entorno de pruebas
├── vite.config.ts             # Configuración de Vite + Module Federation
├── vitest.config.ts           # Configuración de Vitest
├── vitest.setup.ts            # Configuración global para tests
└── README.md                  # Documentación del proyecto
```

## 🛠️ Comandos disponibles

| Comando              | Descripción                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `pnpm dev`           | Ejecuta Vite en modo desarrollo para probar el microfront en tiempo real.                                                 |
| `pnpm clean`         | Elimina las carpetas `dist` y los archivos temporales de compilación (`tsconfig.tsbuildinfo`).                            |
| `pnpm build`         | Ejecuta una limpieza y luego compila el microfront para producción generando los assets finales.                          |
| `pnpm preview`       | Previsualiza la compilación de producción en un servidor local.                                                           |
| `pnpm prod:remote`   | Realiza el build y sirve la app en el puerto `3001` para entornos remotos.                                                |
| `pnpm lint`          | Ejecuta ESLint para revisar el código en busca de errores y problemas de estilo.                                          |
| `pnpm format`        | Formatea automáticamente el código utilizando Prettier para mantener un estilo consistente.                               |
| `pnpm test`          | Ejecuta las pruebas unitarias usando **Vitest**.                                                                          |
| `pnpm test:watch`    | Ejecuta las pruebas unitarias en modo vigilancia (`--watch`).                                                             |
| `pnpm test:coverage` | Ejecuta las pruebas y genera un reporte de cobertura (usa `scripts/check.test.js`).                                       |
| `pnpm sonar`         | Ejecuta las pruebas y luego el análisis de calidad de código con **SonarQube** utilizando el token de `.env.sonar.local`. |

## 🚀 Primeros pasos

### 1️⃣ Clonar el repositorio

```bash
git clone [URL_DEL_REPOSITORIO]
cd component-ui
```

### 2️⃣ Instalar dependencias

Se recomienda el gesto de paquetes **pnpm** para este proyecto:

```bash
pnpm i
# (También puedes usar npm o yarn si es necesario)
```
