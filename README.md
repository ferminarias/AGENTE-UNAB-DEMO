# Universidad ULINEA - Landing Page

<!-- trigger vercel deploy: update -->
Una landing page moderna y completamente funcional para la Universidad ULINEA, construida con Next.js 14, TypeScript y Tailwind CSS.

## 🚀 Características

### ✨ Funcionalidades Principales
- **Diseño Responsive**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- **Formulario de Contacto**: Integración completa con Supabase para almacenamiento de datos
- **Asistente de Voz**: Widget flotante con integración a ElevenLabs para consultas por voz
- **Animaciones Suaves**: Implementadas con Framer Motion para una experiencia fluida
- **SEO Optimizado**: Meta tags, JSON-LD, sitemap y robots.txt incluidos
- **Modo Oscuro**: Soporte completo para tema claro y oscuro
- **Accesibilidad**: Cumple con estándares WCAG 2.1 AA

### 🎨 Secciones Incluidas
1. **Hero Section**: Presentación principal con CTAs
2. **Programas**: Grid de programas académicos con detalles
3. **Beneficios**: Características destacadas de la universidad
4. **Testimonios**: Carrusel de testimonios de graduados
5. **Proceso de Admisión**: Pasos del proceso de inscripción
6. **FAQ**: Preguntas frecuentes con acordeón
7. **Contacto**: Formulario completo con validación
8. **Footer**: Enlaces útiles y información de contacto

### 🛠 Stack Tecnológico
- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Componentes**: shadcn/ui
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form + Zod
- **Base de Datos**: Supabase
- **IA de Voz**: ElevenLabs
- **SEO**: next-sitemap
- **Analytics**: Vercel Analytics

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Cuenta de Supabase
- Cuenta de ElevenLabs (opcional)

### 1. Clonar el repositorio
\`\`\`bash
git clone <repository-url>
cd ulinea-university
\`\`\`

### 2. Instalar dependencias
\`\`\`bash
npm install
# o
yarn install
\`\`\`

### 3. Configurar variables de entorno
Copia `.env.example` a `.env.local` y configura las variables:

\`\`\`env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Universidad ULINEA"

# Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# ElevenLabs Configuration (opcional)
ELEVENLABS_API_KEY=your_elevenlabs_api_key
ELEVENLABS_VOICE_ID=your_voice_id

# Security & Captcha (opcional)
ENABLE_CAPTCHA=false
RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
\`\`\`

### 4. Configurar Supabase
Ejecuta el script SQL incluido en tu proyecto de Supabase:

\`\`\`sql
-- Ver archivo supabase.sql para el schema completo
\`\`\`

### 5. Ejecutar en desarrollo
\`\`\`bash
npm run dev
# o
yarn dev
\`\`\`

Visita `http://localhost:3000` para ver la aplicación.

## 📁 Estructura del Proyecto

\`\`\`
├── app/                    # App Router de Next.js
│   ├── api/               # API Routes
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/            # Componentes React
│   ├── sections/          # Secciones de la página
│   ├── ui/               # Componentes de UI (shadcn)
│   └── voice-assistant/   # Widget de asistente de voz
├── lib/                   # Utilidades y configuración
│   ├── constants.ts       # Datos estáticos
│   ├── supabase.ts       # Cliente de Supabase
│   ├── validators.ts      # Esquemas de validación
│   └── seo.ts            # Configuración SEO
├── public/               # Archivos estáticos
└── supabase.sql          # Schema de base de datos
\`\`\`

## 🎯 Funcionalidades Detalladas

### Formulario de Contacto
- Validación en tiempo real con Zod
- Rate limiting para prevenir spam
- Captura de datos UTM para tracking
- Almacenamiento seguro en Supabase
- Notificaciones con toasts

### Asistente de Voz
- Integración con ElevenLabs Realtime API
- Reconocimiento de voz (Web Speech API como fallback)
- Síntesis de voz natural
- Interfaz conversacional intuitiva
- Manejo de errores y reconexión automática

### SEO y Performance
- Meta tags optimizados
- JSON-LD para datos estructurados
- Sitemap automático
- Imágenes optimizadas con next/image
- Lazy loading de componentes pesados
- Core Web Vitals optimizados

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Despliega automáticamente

### Otros Proveedores
El proyecto es compatible con cualquier proveedor que soporte Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 🔧 Personalización

### Colores de Marca
Los colores se definen en `app/globals.css`:
\`\`\`css
:root {
  --ulinea-blue: #1e40af;
  --ulinea-orange: #ff6b35;
  /* ... */
}
\`\`\`

### Contenido
Los datos se centralizan en `lib/constants.ts`:
- Programas académicos
- Testimonios
- Beneficios
- FAQ

### Componentes
Todos los componentes usan shadcn/ui y son completamente personalizables.

## 📊 Analytics y Monitoreo

- **Vercel Analytics**: Métricas de performance y uso
- **Supabase**: Logs de formularios de contacto
- **Rate Limiting**: Protección contra spam y abuso

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o consultas:
- Email: soporte@ulinea.edu.mx
- Teléfono: +52 55 1234 5678

---

Desarrollado con ❤️ para Universidad ULINEA
