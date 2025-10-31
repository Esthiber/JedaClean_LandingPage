# Design Guidelines: Servicios de Limpieza JEDA

## Design Approach

**Reference-Based Design**: Following doncella.com.do aesthetic with modern landing page principles, creating a professional cleaning services website with dynamic video storytelling.

**Key Design Principles**:
- Clean, trustworthy professional service aesthetic
- Dynamic video-driven narrative with rotating text slides
- Clear service communication with strong CTAs
- Accessibility and mobile-first responsiveness

## Typography System

**Font Families** (Google Fonts):
- Primary: 'Poppins' (headings, navigation, CTAs) - weights: 400, 600, 700
- Secondary: 'Inter' (body text, descriptions) - weights: 400, 500

**Typography Scale**:
- Hero Headlines: text-5xl to text-7xl, font-bold (Poppins)
- Slide Text: text-4xl to text-6xl, font-semibold (Poppins)
- Section Headers: text-3xl to text-4xl, font-semibold (Poppins)
- Subheadings: text-xl to text-2xl, font-medium (Poppins)
- Body Text: text-base to text-lg (Inter)
- Navigation: text-sm to text-base, font-medium (Poppins)

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Component padding: p-6, p-8, p-12
- Section spacing: py-16, py-20, py-24 (desktop), py-12, py-16 (mobile)
- Element gaps: gap-4, gap-6, gap-8

**Grid System**:
- Container max-width: max-w-7xl with mx-auto
- Services grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Content sections: max-w-6xl for standard content
- Navigation: flex with space-between

## Hero Section with Video Background

**Structure**:
- Full viewport height (min-h-screen) video container
- Autoplay looping background video (muted, no controls)
- Semi-transparent overlay for text readability (opacity-40 to opacity-60)
- Centered content container (z-index above video/overlay)

**Text Slide System**:
- Rotating text content with smooth fade transitions (duration-700)
- Slide interval: 5-6 seconds per slide
- Slides include: "¿Quiénes somos?", "Nuestros Servicios", "Calidad Garantizada", "Contacta con Nosotros"
- Each slide: Large headline + supporting subtitle + CTA button
- Animation: fade-in/fade-out with subtle slide-up effect (translate-y-4)

**CTA Buttons**:
- Primary: "COTIZA" - rounded-full, px-8, py-4, text-lg, font-semibold, backdrop-blur-md
- Secondary: "VER SERVICIOS" - rounded-full, px-8, py-4, text-lg, outline style
- Both buttons positioned below slide text with gap-4

## Navigation

**Desktop Navigation**:
- Fixed header (sticky top-0) with backdrop-blur
- Logo: "Servicios de Limpieza JEDA" (text-xl, font-bold)
- Menu items: Servicios, Productos, Equipos, Clientes, Nosotros, Empleos, Tienda, Contáctanos
- Horizontal flex layout with gap-6
- Padding: px-6 to px-12, py-4

**Mobile Navigation**:
- Hamburger menu icon (right-aligned)
- Slide-in drawer menu (from right or top)
- Stacked menu items with py-4 spacing

## Services Section

**Layout**: 4-column grid on desktop (grid-cols-4), 2-column tablet (md:grid-cols-2), stacked mobile
**Service Cards**:
- Each card: rounded-2xl, p-6, shadow-lg, hover:shadow-2xl transition
- Icon: 64px to 80px size (use Heroicons outline for consistency)
- Title: text-xl, font-semibold, mb-3
- Description: text-base, leading-relaxed
- Services highlighted: Limpieza del Hogar, Piscinas, Tanques de Agua, Cisternas

## "Lo Que Hacemos" Section

**Two-column layout** (lg:grid-cols-2):
- Left: Image showcase (rounded-2xl, aspect-video or aspect-square)
- Right: Content (heading + paragraphs + bulleted list + CTA)
- Padding: py-20 on desktop, py-16 on mobile
- Content max-width: max-w-prose for readability

## Additional Sections

**Testimonials/Social Proof**:
- 3-column grid (lg:grid-cols-3)
- Card-based layout with quotes
- Customer name, role, rating stars

**Why Choose Us**:
- Icon + text layout
- 3-column grid showcasing value propositions
- Each item: icon (Heroicons), bold title, brief description

**Contact/CTA Section**:
- Centered layout with max-w-3xl
- Large headline + paragraph + prominent CTA button
- Alternative contact methods (phone, email, WhatsApp) as icon buttons

## Footer

**Multi-column layout** (grid-cols-1 md:grid-cols-4):
- Column 1: Logo + company description
- Column 2: Quick links (navigation items)
- Column 3: Services list
- Column 4: Contact information + social media icons

**Social Media Icons**: Font Awesome (Facebook, Instagram, WhatsApp, Twitter)
**Padding**: py-12 to py-16
**Copyright**: text-sm, text-center, border-top, py-6

## Component Library

**Icons**: Heroicons (outline style via CDN)
**Buttons**: Three variants - solid (primary CTA), outline (secondary), text-only (tertiary)
**Cards**: Consistent rounded-2xl with shadow-md to shadow-xl, hover states with transform scale-105
**Form Inputs**: rounded-lg, px-4, py-3, border with focus states

## Animations

Use sparingly and purposefully:
- Text slide transitions: fade + translate (duration-700)
- Card hover effects: shadow and slight scale (duration-300)
- Button hover: subtle brightness increase
- NO distracting scroll animations or parallax effects
- Video plays continuously without user interaction controls

## Images

**Hero Video**: Professional cleaning service video showing team in action, clean homes, satisfied customers (16:9 aspect ratio, optimized for web, 1920x1080 minimum)

**Service Section Icons**: Heroicons representing each service (home, water droplet, cleaning tools)

**"Lo Que Hacemos" Image**: Professional photo showing cleaning team or before/after results (landscape orientation, high quality)

**Video Implementation**: Use `<video>` tag with autoplay, loop, muted, playsinline attributes. Provide fallback poster image for browsers that don't support autoplay.