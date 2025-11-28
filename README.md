# 🎯 Nevra - Presentación Ejecutiva

Presentación interactiva profesional de la plataforma **Nevra**, diseñada para mostrar las capacidades, arquitectura y valor diferencial de nuestra solución de digitalización operativa y gestión inteligente.

## 📋 Descripción

Esta presentación ejecutiva es una aplicación web moderna construida con **React**, **TypeScript** y **Vite**, que presenta de manera visual y profesional los 3 pilares fundamentales de Nevra:

- **Cliente**: Onboarding inteligente y experiencia mobile
- **Interno**: Legajo digital 360° y matrices de decisión  
- **Soporte**: Blockchain inmutable y monitoreo con IA

### ✨ Características

- 🎨 **16 slides profesionales** con diseño moderno y fluido
- ⌨️ **Navegación intuitiva** con teclado, botones y gestos
- 📱 **Responsive design** que se adapta a cualquier pantalla
- 🎬 **Transiciones suaves** entre diapositivas
- 🔍 **Indicadores visuales** de progreso y navegación
- ⚡ **Carga rápida** y rendimiento optimizado

## 🚀 Inicio Rápido

### Prerrequisitos

- **Node.js** (versión 18 o superior)
- **npm** (incluido con Node.js)

### Instalación

1. **Clonar el repositorio** (o descargar el código):
```bash
git clone <url-del-repositorio>
cd nevra_presentacion_ejecutiva
```

2. **Instalar las dependencias**:
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**:
```bash
npm run dev
```

4. **Abrir en el navegador**:
```
http://localhost:3000
```

¡Listo! La presentación debería estar corriendo en tu navegador.

## 📁 Estructura del Proyecto

```
nevra_presentacion_ejecutiva/
├── src/
│   ├── components/           # Componentes de slides y UI
│   │   ├── Slide01Portada.tsx
│   │   ├── Slide02Problema.tsx
│   │   ├── Slide04PreguntaCritica.tsx
│   │   └── ...               # Más componentes de slides
│   │   └── ui/               # Componentes UI reutilizables
│   ├── assets/               # Imágenes y recursos estáticos
│   ├── styles/               # Estilos globales
│   ├── App.tsx               # Componente principal
│   └── main.tsx              # Punto de entrada
├── index.html                # HTML base
├── package.json              # Dependencias y scripts
├── vite.config.ts            # Configuración de Vite
└── README.md                 # Este archivo
```

## 🎮 Controles de Navegación

### Teclado
- **←** Flecha izquierda: Slide anterior
- **→** Flecha derecha o **Espacio**: Siguiente slide

### Mouse/Touch
- **Botones laterales**: Navegar hacia atrás/adelante
- **Indicadores inferiores**: Saltar a una slide específica
- **Puntos de navegación**: Click para ir directamente a cualquier slide

## 📊 Contenido de la Presentación

La presentación está estructurada en 4 secciones principales:

### 1️⃣ **Problema** (2 slides)
- Portada de presentación
- Identificación de problemas operativos

### 2️⃣ **Solución Nevra** (5 slides)
- Pregunta crítica que abordamos
- Los 3 pilares de Nevra
- Arquitectura dual de la plataforma
- Módulos principales
- Diferenciadores clave

### 3️⃣ **Capacidades Principales** (5 slides)
- Onboarding inteligente
- Experiencia multiplataforma
- Legajo digital 360°
- Matrices inteligentes de decisión
- Blockchain inmutable

### 4️⃣ **Valor y Cierre** (4 slides)
- Impacto medible
- Diferenciadores únicos
- Call to Action
- Agradecimiento

## 🛠️ Scripts Disponibles

```bash
# Desarrollo - Inicia servidor con hot reload
npm run dev

# Producción - Genera build optimizado
npm run build

# Preview - Previsualiza el build de producción
npm run preview
```

## 🔧 Tecnologías Utilizadas

### Core
- **React 18** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultrarrápido

### UI & Styling
- **Tailwind CSS** - Framework CSS utility-first
- **Radix UI** - Componentes accesibles
- **Framer Motion** - Animaciones fluidas
- **Lucide React** - Iconos modernos

### Herramientas
- **class-variance-authority** - Variantes de componentes
- **clsx** - Utilidades para clases CSS
- **React Hook Form** - Gestión de formularios

## 🎨 Personalización

### Modificar Slides

Cada slide es un componente independiente en `src/components/`. Para modificar el contenido:

1. Abre el archivo del slide que deseas editar (ej: `Slide01Portada.tsx`)
2. Modifica el contenido JSX
3. Los cambios se reflejarán automáticamente en el navegador

### Agregar/Quitar Slides

Edita el array `slides` en `src/App.tsx`:

```typescript
const slides = [
  Slide01Portada,
  Slide02Problema,
  // Agrega o quita componentes aquí
];
```

### Cambiar Colores

Los colores principales se pueden modificar en:
- `src/index.css` - Variables CSS globales
- `src/styles/globals.css` - Estilos personalizados
- Componentes individuales - Clases Tailwind inline

## 📦 Build para Producción

Para generar una versión optimizada para producción:

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`. Estos archivos están listos para ser desplegados en cualquier servidor web o plataforma de hosting.

## 🌐 Deployment

Esta aplicación puede ser desplegada en:

- **Vercel** - Recomendado para proyectos Vite
- **Netlify** - Configuración automática
- **GitHub Pages** - Hosting gratuito
- **AWS S3 + CloudFront** - Solución enterprise
- Cualquier servidor web estático

## 🐛 Troubleshooting

### El servidor no inicia
```bash
# Limpia node_modules e reinstala
rm -rf node_modules package-lock.json
npm install
```

### Puerto 3000 en uso
Vite automáticamente usará otro puerto disponible. Revisa la terminal para ver la URL correcta.

### Errores de TypeScript
```bash
# Verifica la configuración de TypeScript
npx tsc --noEmit
```

## 📄 Licencia

Este proyecto es propiedad de **Nevra**. Todos los derechos reservados.

## 👥 Contacto

Para más información sobre Nevra y nuestra plataforma, visita nuestro sitio web o contáctanos.

---

**Nevra** - Transformando la gestión operativa con inteligencia artificial y blockchain.
