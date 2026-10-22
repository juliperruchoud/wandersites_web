import React, { useState } from "react";
import {
  LayoutTemplate,
  BedDouble,
  Store,
  Smartphone,
  MessageCircle,
  MapPin,
  Images,
  Share2,
  PencilRuler,
  Instagram,
  Mail,
  ArrowRight,
  Check,
  Menu,
  X,
  FileSpreadsheet,
  ChevronLeft,
  ChevronRight,
  Eye,
  Percent,
  ShieldAlert,
  Clock,
  Home,
  User,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Sliders,
  ExternalLink,
  Send,
  Database,
  Lock,
  Plus,
  Minus,
  Info,
} from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";
import { Link } from "react-router-dom";
import contentData from "@/src/content.json";
import { CookieBanner } from "@/src/components/CookieBanner";
import { LegalModal } from "@/src/components/LegalModal";
import { BasicPlanModal } from "@/src/components/BasicPlanModal";
import { StandardPlanModal } from "@/src/components/StandardPlanModal";
import { PremiumPlanModal } from "@/src/components/PremiumPlanModal";

/* ============================================================
   EDITÁ ACÁ — reemplazá estos datos por los tuyos y todo el
   sitio (botones, footer, enlaces) se actualiza solo.
   ============================================================ */
export const CONFIG = {
  businessName: "Wandersites",
  whatsappUrl: "https://api.whatsapp.com/message/44UCN3277HGKI1?autoload=1&app_absent=0",
  whatsappNumber: "44UCN3277HGKI1",
  whatsappMessage: "¡Hola! Quiero una página web para mi negocio.",
  email: "wandersites23@gmail.com",
  instagram: "https://instagram.com/wandersites.web",
};

export const waLink = (message?: string) => {
  const msg = message ?? CONFIG.whatsappMessage;
  const base = CONFIG.whatsappUrl;
  return msg ? `${base}&text=${encodeURIComponent(msg)}` : base;
};

// Imagen principal del Hero
const heroMockup = "/images/somosnomadesmockup.webp";

/* ---------------- Building blocks ---------------- */

function PrimaryCta({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-saffron px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_-8px_oklch(0.857_0.147_82.6/0.6)] transition-all hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 sm:px-8 sm:text-base cursor-pointer ${className}`}
    >
      {children}
    </a>
  );
}

function SecondaryCta({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-moonstone px-6 py-3 text-sm font-bold text-moonstone transition-colors hover:bg-moonstone hover:text-white sm:px-8 sm:text-base cursor-pointer"
    >
      {children}
    </a>
  );
}

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-moonstone via-saffron to-moonstone origin-left z-60"
    />
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={centered ? "mx-auto max-w-2xl text-center" : "max-w-3xl text-left"}
    >
      {eyebrow && (
        <p className="text-xs font-bold tracking-[0.2em] text-moonstone uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-gunmetal sm:text-4xl font-heading">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

/* ---------------- Header ---------------- */

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Web check-in", href: "#web-check-in" },
  { label: "Sobre nosotros", href: "#sobre-nosotros" },
  { label: "Ejemplos", href: "#ejemplos" },
  { label: "Planes", href: "#planes" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <a href="#" className="flex min-w-0 items-center gap-2.5">
          <img
            src="/images/logo-wandersites.webp"
            alt="Logo Wandersites"
            width={36}
            height={36}
            className="size-9 rounded-xl object-contain shadow-xs"
          />
          <span className="truncate font-heading text-lg font-bold text-gunmetal">
            {CONFIG.businessName}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-moonstone"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-gradient-to-r from-[#4A6ED1] to-[#FF7A2A] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:brightness-105 hover:scale-[1.02] active:scale-95 sm:inline-flex cursor-pointer"
          >
            Quiero mi web
          </a>
          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-xl border border-border text-gunmetal lg:hidden cursor-pointer"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-border bg-white px-4 py-3 lg:hidden space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-gunmetal hover:bg-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block rounded-lg bg-gradient-to-r from-[#4A6ED1] to-[#FF7A2A] px-3 py-2.5 text-center text-sm font-bold text-white shadow-sm"
          >
            Quiero mi web
          </a>
        </nav>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section className="relative border-b border-border bg-background bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:22px_22px]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold tracking-wide text-moonstone uppercase shadow-sm border border-border/50">
            Diseño web para alojamientos y pequeños negocios
          </span>
          <h1 className="mt-5 text-4xl leading-tight font-extrabold tracking-tight text-gunmetal sm:text-5xl lg:text-[3.4rem] font-heading">
            Tu negocio también merece una{" "}
            <span className="text-moonstone">web profesional</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
            Diseñamos páginas web modernas, simples y adaptadas a todos los
            dispositivos para alojamientos turísticos, emprendimientos,
            negocios y servicios.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <PrimaryCta>
              Quiero mi página web <ArrowRight className="size-4" />
            </PrimaryCta>
            <SecondaryCta href="#ejemplos">Ver ejemplos</SecondaryCta>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Respuesta rápida por WhatsApp · Sin compromiso
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-4xl bg-white/50" aria-hidden />
          <img
            src={heroMockup}
            alt="Persona trabajando en una notebook con una página web de viajes y diseño responsive"
            width={1448}
            height={1086}
            fetchPriority="high"
            decoding="auto"
            className="w-full rounded-3xl object-cover aspect-[4/3] shadow-[0_24px_60px_-24px_oklch(0.32_0.03_209.6/0.35)]"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- The Problem ---------------- */

const PROBLEMS = [
  {
    icon: Percent,
    title: "Las comisiones se llevan tu ganancia",
    description:
      "Terminás pagando comisiones altísimas a plataformas por cada reserva que podrías haber cerrado directamente con tu huésped.",
  },
  {
    icon: ShieldAlert,
    title: "Sin web propia, dependés de otros",
    description:
      "Si las aplicaciones cambian sus comisiones, sus algoritmos o sus condiciones, tu visibilidad y tus ventas quedan en manos de terceros.",
  },
  {
    icon: Clock,
    title: "Las mismas preguntas, todos los días",
    description:
      "Ubicación, fotos, tarifas, qué incluye... Pasás horas respondiendo por WhatsApp lo que una web resuelve en segundos.",
  },
];

function TheProblem() {
  return (
    <section id="el-problema" className="scroll-mt-20 border-b border-border bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="EL PROBLEMA"
          title="¿Te suena familiar?"
          description="La mayoría de los alojamientos turísticos y pequeños negocios se enfrentan a las mismas trabas todos los días:"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROBLEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              className="flex flex-col justify-start rounded-3xl border border-border bg-white p-7 shadow-[0_4px_20px_-8px_oklch(0.32_0.03_209.6/0.12)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_oklch(0.32_0.03_209.6/0.2)] text-left"
            >
              <div className="grid size-12 place-items-center rounded-2xl bg-saffron/15 text-saffron font-bold">
                <item.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold text-gunmetal leading-snug">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Frase de cierre centrada */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <p className="font-heading text-base sm:text-lg font-semibold text-gunmetal leading-relaxed">
            Tener tu propia página web no es un lujo: es la forma de conseguir{" "}
            <span className="text-moonstone font-bold">más reservas directas</span> y
            recuperar el control de tu tiempo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */

const SERVICES = [
  {
    icon: Home,
    tag: "Hospitalidad & Turismo",
    title: "Alojamientos turísticos",
    text: "Cabañas, departamentos y hoteles chicos con galería, ubicación, reservas por WhatsApp y disponibilidad conectada a Booking/Airbnb.",
    image: "/images/alojamientos.jpg",
    alt: "Alojamiento turístico con diseño moderno y entorno natural",
    badgeColor: "bg-moonstone/10 text-moonstone border-moonstone/20",
  },
  {
    icon: Store,
    tag: "Comercio & Gastronomía",
    title: "Negocios",
    text: "Comercios y gastronomía: catálogo o menú, horarios, ubicación y contacto directo, todo editable cuando lo necesites.",
    image: "/images/pequenosnegocios.jpg",
    alt: "Comercio y pequeños negocios locales con atención directa",
    badgeColor: "bg-saffron/10 text-saffron border-saffron/20",
  },
  {
    icon: User,
    tag: "Estudios & Consultoría",
    title: "Servicios",
    text: "Profesionales y estudios: presentación clara de lo que ofrecés, con turnos o consultas por WhatsApp.",
    image: "/images/servicios.jpg",
    alt: "Servicios profesionales y asesoramiento personalizado",
    badgeColor: "bg-moonstone/10 text-moonstone border-moonstone/20",
  },
];

function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 py-16 sm:py-24 bg-surface/50 border-y border-border/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="QUÉ HAGO"
          title="Una misma base técnica, adaptada a tu rubro."
        />

        {/* Composición visual editorial con fotografías y jerarquía enriquecida */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.14, ease: "easeOut" }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-[0_4px_24px_-10px_oklch(0.32_0.03_209.6/0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-moonstone/35 hover:shadow-[0_20px_40px_-16px_oklch(0.32_0.03_209.6/0.18)]"
            >
              {/* Fotografía de portada representativa del rubro */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.alt}
                  width={800}
                  height={500}
                  decoding="auto"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gunmetal/60 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

                {/* Ícono de rubro en la esquina superior izquierda */}
                <div className="absolute top-4 left-4 grid size-10 place-items-center rounded-2xl bg-white/95 text-gunmetal shadow-md backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
                  <service.icon className="size-5 text-[#E8734A]" />
                </div>
              </div>

              {/* Bloque de contenido editorial con etiqueta y texto original intacto */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7 text-left">
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center rounded-full border px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider ${service.badgeColor}`}>
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="mt-3.5 font-heading text-xl font-bold text-gunmetal group-hover:text-moonstone transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>
                </div>

                {/* Indicador de detalle y estética sutil en el pie */}
                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-moonstone">
                  <span>Diseño optimizado</span>
                  <span className="text-muted-foreground/60 group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Web check-in ---------------- */

const CHECKIN_STEPS = [
  {
    step: "1",
    title: "Compartís el enlace",
    text: "El huésped completa sus datos desde el celular, antes de llegar.",
    icon: Smartphone,
  },
  {
    step: "2",
    title: "Recibís la información",
    text: "Te llega un correo automático con los datos del check-in.",
    icon: Mail,
  },
  {
    step: "3",
    title: "Todo organizado",
    text: "Los registros se guardan en una planilla de Google Sheets.",
    icon: FileSpreadsheet,
  },
];

const CHECKIN_BENEFITS = [
  {
    icon: Clock,
    title: "Ahorrá tiempo",
    description: "Reducí la carga manual de datos al recibir huéspedes.",
  },
  {
    icon: Database,
    title: "Información ordenada",
    description: "Consultá los registros desde una planilla digital.",
  },
  {
    icon: HeartHandshake,
    title: "Más comodidad",
    description: "Tus huéspedes completan sus datos desde donde estén.",
  },
  {
    icon: Sliders,
    title: "Adaptado a tu alojamiento",
    description: "Personalizamos el formulario con tu nombre, logo y colores.",
  },
];

function WebCheckIn() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const checkInMessage =
    "Hola, estuve viendo el Web Check-in en Wandersites y me gustaría incorporarlo a mi alojamiento.";
  const checkInLink = waLink(checkInMessage);

  return (
    <section
      id="web-check-in"
      className="relative scroll-mt-20 border-y border-border bg-background bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:22px_22px] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* BLOQUE PRINCIPAL: DOS COLUMNAS EQUILIBRADAS */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Columna Izquierda: Fotografía original integrada y con protagonismo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Resplandor y halo sutil detrás de la foto */}
              <div
                className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-tr from-[#4a6ed1]/15 to-white/80 blur-xl"
                aria-hidden
              />

              {/* Etiqueta flotante elegante sobre la fotografía */}
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-gunmetal shadow-[0_4px_14px_rgba(0,0,0,0.12)] border border-[#4a6ed1]/25 backdrop-blur-md">
                <span className="size-2 rounded-full bg-[#4a6ed1] animate-pulse" />
                <span>100% online</span>
              </div>

              {/* Imagen del celular exacta, sin deformar ni estirar */}
              <img
                src="/images/checkinmockup.webp"
                alt="Mockup del formulario de Web check-in en celular para registro previo de huéspedes"
                width={1254}
                height={1254}
                loading="lazy"
                decoding="auto"
                className="w-full h-auto max-h-[500px] rounded-3xl object-contain bg-white shadow-[0_20px_50px_-20px_rgba(74,110,209,0.3)] border border-[#4a6ed1]/15"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Columna Derecha: Información clara, concisa y jerarquizada */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center rounded-full bg-[#4a6ed1]/10 px-3.5 py-1 text-xs font-bold tracking-wide text-[#4a6ed1] uppercase border border-[#4a6ed1]/25">
                WEB CHECK-IN
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200/80">
                <CheckCircle2 className="size-3.5 text-emerald-600" />
                Sin apps que instalar
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-gunmetal sm:text-3xl lg:text-[34px] leading-tight font-heading">
              Menos tiempo en recepción. Más comodidad para tus huéspedes.
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
              Tus huéspedes completan sus datos antes de llegar. Vos recibís la información por correo electrónico y queda organizada automáticamente en Google Sheets.
            </p>

            {/* Pequeña línea destacada: se contrata sin web */}
            <div className="mt-2.5 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#4a6ed1]">
              <span className="size-1.5 rounded-full bg-[#4a6ed1]" />
              <span>También disponible sin contratar una página web.</span>
            </div>

            {/* CÓMO FUNCIONA: 3 pasos compactos y ligeros */}
            <div className="mt-6 border-y border-border/80 py-4">
              <p className="font-heading text-xs font-bold uppercase tracking-wider text-[#4a6ed1] mb-3">
                Cómo funciona
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-start gap-2.5">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#4a6ed1] text-[11px] font-bold text-white shadow-xs">
                    1
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-[13px] font-bold text-gunmetal leading-tight">
                      Compartís el enlace
                    </h4>
                    <p className="mt-0.5 text-[11px] sm:text-xs text-muted-foreground leading-snug">
                      Por WhatsApp, correo o desde tu web.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#4a6ed1] text-[11px] font-bold text-white shadow-xs">
                    2
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-[13px] font-bold text-gunmetal leading-tight">
                      El huésped completa
                    </h4>
                    <p className="mt-0.5 text-[11px] sm:text-xs text-muted-foreground leading-snug">
                      Desde su celular, antes de llegar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#4a6ed1] text-[11px] font-bold text-white shadow-xs">
                    3
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-[13px] font-bold text-gunmetal leading-tight">
                      Recibís todo ordenado
                    </h4>
                    <p className="mt-0.5 text-[11px] sm:text-xs text-muted-foreground leading-snug">
                      Por correo y en tu planilla digital.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTÓN PRINCIPAL */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={checkInLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#4a6ed1] px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-[0_8px_20px_-8px_rgba(74,110,209,0.5)] transition-all hover:-translate-y-0.5 hover:bg-[#3d5cb5] active:translate-y-0 cursor-pointer"
              >
                Conocé nuestro Web Check-in
              </a>
            </div>

            {/* PRIVACIDAD Y CARACTERÍSTICAS DISCRETAS */}
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] sm:text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Database className="size-3.5 text-[#4a6ed1]" />
                Registros en tu cuenta de Google Sheets
              </span>
              <span className="hidden sm:inline text-border">•</span>
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(true)}
                className="inline-flex items-center gap-1 text-[#4a6ed1] hover:underline font-medium cursor-pointer"
              >
                <Lock className="size-3" /> Privacidad y tratamiento de datos
              </button>
            </div>
          </motion.div>
        </div>

        {/* BENEFICIOS: FRANJA INFERIOR A TODO EL ANCHO (liviana y equilibrada) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="mt-10 rounded-2xl border border-border bg-white p-4 sm:p-5 shadow-[0_4px_20px_-8px_oklch(0.32_0.03_209.6/0.08)]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-border/60">
            <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-2">
              <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#4a6ed1]/10 text-[#4a6ed1]">
                <Clock className="size-4.5" />
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-sm font-bold text-gunmetal leading-tight">
                  Ahorrás tiempo
                </p>
                <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                  Check-in veloz sin demoras
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-4">
              <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#4a6ed1]/10 text-[#4a6ed1]">
                <ShieldCheck className="size-4.5" />
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-sm font-bold text-gunmetal leading-tight">
                  Reducís tareas manuales
                </p>
                <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                  Sin cargar datos en papel
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-4">
              <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#4a6ed1]/10 text-[#4a6ed1]">
                <FileSpreadsheet className="size-4.5" />
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-sm font-bold text-gunmetal leading-tight">
                  Información organizada
                </p>
                <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                  Centralizada en tu planilla
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-4">
              <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#4a6ed1]/10 text-[#4a6ed1]">
                <Sliders className="size-4.5" />
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-sm font-bold text-gunmetal leading-tight">
                  Personalizado con tu marca
                </p>
                <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                  Tu nombre, logo y colores
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal discreto de Privacidad y Tratamiento de Datos */}
      {privacyModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setPrivacyModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gunmetal/80 p-4 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-3xl bg-white p-6 sm:p-7 shadow-2xl border border-border text-left space-y-4"
          >
            <div className="flex items-center justify-between pb-2 border-b border-border">
              <div className="flex items-center gap-2.5 text-gunmetal">
                <Lock className="size-5 text-[#4a6ed1]" />
                <h3 className="font-heading text-lg font-bold">
                  Privacidad y tratamiento de datos
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(false)}
                className="grid size-8 place-items-center rounded-full bg-slate-100 text-gunmetal hover:bg-slate-200 cursor-pointer"
              >
                <X className="size-4" />
              </button>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              En Wandersites priorizamos la seguridad y la soberanía de los datos de cada establecimiento:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-gunmetal list-disc pl-4">
              <li>
                <strong>Propiedad exclusiva del alojamiento:</strong> Los datos ingresados por tus huéspedes viajan directamente a la cuenta de Google de tu alojamiento. Wandersites no comercializa ni retiene bases de datos de tus pasajeros.
              </li>
              <li>
                <strong>Cumplimiento normativo:</strong> Facilita el cumplimiento del registro de pasajeros exigido por organismos de turismo y seguridad provinciales/nacionales sin depender de libros de papel expuestos.
              </li>
              <li>
                <strong>Conexión segura SSL:</strong> Todo el formulario corre bajo protocolo seguro HTTPS encriptado de extremo a extremo.
              </li>
            </ul>
            <div className="pt-2 text-right">
              <button
                type="button"
                onClick={() => setPrivacyModalOpen(false)}
                className="rounded-full bg-[#4a6ed1] px-5 py-2 text-xs font-bold text-white hover:bg-[#3d5cb5] cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}



/* ---------------- Portfolio ---------------- */

interface PortfolioProject {
  tag: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  gallery: string[];
  isDemo?: boolean;
}

const PORTFOLIO: PortfolioProject[] = [
  {
    tag: "Agencia de viajes",
    title: "Ecos del Hielo",
    category: "Agencia de viajes y excursiones",
    image: "/images/webecosdelhielo3.webp",
    alt: "Web para agencia de viajes Ecos del Hielo",
    gallery: [
      "/images/webecosdelhielo3.webp",
      "/images/webecosdelhielo.webp",
      "/images/webecosdelhielo2.webp",
    ],
  },
  {
    tag: "Agencia de viajes",
    title: "Somos Nómades",
    category: "Agencia de viajes a medida",
    image: "/images/somosnomadesmockup.webp",
    alt: "Web para agencia de viajes Somos Nómades",
    gallery: [
      "/images/somosnomadesmockup.webp",
      "/images/websomosnomades1.webp",
    ],
  },
  {
    tag: "Cabañas de lujo",
    title: "Las Totoras",
    category: "Complejo de cabañas de lujo",
    image: "/images/mockup_lastotoras_1.webp",
    alt: "Web para cabañas de lujo Las Totoras",
    gallery: [
      "/images/mockup_lastotoras_1.webp",
      "/images/mockup_lastotoras_2.webp",
      "/images/mockup_lastotoras_3.webp",
      "/images/mockup_lastotoras_4.webp",
    ],
    isDemo: true,
  },
  {
    tag: "Instituto de inglés",
    title: "London Institute",
    category: "Instituto de idiomas",
    image: "/images/londoninstitute1.webp",
    alt: "Web para instituto de inglés London Institute",
    gallery: [
      "/images/londoninstitute1.webp",
      "/images/londoninstitute2.webp",
      "/images/londoninstitute3.webp",
    ],
  },
  {
    tag: "Departamento turístico",
    title: "Rambla 7",
    category: "Alquiler temporario y departamentos",
    image: "/images/mockup_rambla7_1.webp",
    alt: "Web para departamento turístico Rambla 7",
    gallery: [
      "/images/mockup_rambla7_1.webp",
      "/images/mockup_rambla7_2.webp",
      "/images/mockup_rambla7_3.webp",
    ],
    isDemo: true,
  },
  {
    tag: "Web Check-in",
    title: "Web Check-in",
    category: "Sistema de check-in digital",
    image: "/images/checkinmockup.webp",
    alt: "Web Check-in para alojamientos turísticos",
    gallery: [
      "/images/checkinmockup.webp",
      "/images/webcheckin1.webp",
      "/images/webcheckin2.webp",
    ],
  },
];

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Control de scroll del carrusel
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 6);
  };

  React.useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.75;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const openGallery = (project: PortfolioProject, index: number = 0) => {
    setSelectedProject(project);
    setActiveImageIndex(index);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setActiveImageIndex(0);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProject) return;
    setActiveImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProject) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
    );
  };

  // Manejo de teclado (Escape, Flechas)
  React.useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="ejemplos" className="scroll-mt-20 bg-surface border-y border-border py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-moonstone uppercase">
            Ejemplos
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gunmetal sm:text-4xl font-heading">
            Algunos ejemplos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Explorá algunos de nuestros diseños web para distintos tipos de negocios. Sitios modernos, funcionales y adaptados a la identidad de cada proyecto.
          </p>
          <p className="mt-2 text-xs sm:text-sm font-medium text-moonstone/90">
            Hacé clic en cada proyecto para explorar su galería.
          </p>
        </div>

        {/* Contenedor del Carrusel Horizontal */}
        <div className="relative mt-12">
          {/* Flecha Lateral Izquierda */}
          <button
            type="button"
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            aria-label="Ver proyectos anteriores"
            className={`absolute -left-3.5 sm:-left-5 top-1/2 -translate-y-1/2 z-20 grid size-11 place-items-center rounded-full bg-white text-gunmetal shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-border/80 backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer ${
              !canScrollLeft
                ? "opacity-0 pointer-events-none"
                : "opacity-100 hover:bg-slate-50"
            }`}
          >
            <ChevronLeft className="size-6 text-gunmetal" />
          </button>

          {/* Flecha Lateral Derecha */}
          <button
            type="button"
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            aria-label="Ver siguientes proyectos"
            className={`absolute -right-3.5 sm:-right-5 top-1/2 -translate-y-1/2 z-20 grid size-11 place-items-center rounded-full bg-white text-gunmetal shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-border/80 backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer ${
              !canScrollRight
                ? "opacity-0 pointer-events-none"
                : "opacity-100 hover:bg-slate-50"
            }`}
          >
            <ChevronRight className="size-6 text-gunmetal" />
          </button>

          {/* Track deslizable horizontal (con soporte táctil y snap) */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-2 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {PORTFOLIO.map((item) => (
              <figure
                key={item.title}
                onClick={() => openGallery(item)}
                className="group relative flex flex-col cursor-pointer overflow-hidden rounded-3xl border border-border bg-white shadow-[0_4px_20px_-8px_oklch(0.32_0.03_209.6/0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:border-moonstone/40 hover:shadow-[0_18px_38px_-12px_oklch(0.32_0.03_209.6/0.25)] shrink-0 snap-start select-none w-[82%] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
              >
                <div className="relative aspect-[8/5] w-full overflow-hidden bg-slate-100 shrink-0">
                  {/* Etiqueta discreta de Proyecto demo cuando corresponde */}
                  {item.isDemo && (
                    <span className="absolute top-3 left-3 z-10 inline-flex items-center rounded-full bg-gunmetal/75 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-white/95 backdrop-blur-md border border-white/20 shadow-xs">
                      Proyecto demo
                    </span>
                  )}

                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    decoding="auto"
                    width={1024}
                    height={640}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gunmetal/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-gunmetal shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-100 scale-95">
                      <Eye className="size-4 text-moonstone" />
                      Ver galería ({item.gallery.length} fotos)
                    </span>
                  </div>
                </div>

                <figcaption className="p-5 flex flex-1 flex-col justify-between gap-3">
                  <div className="min-h-[52px] flex flex-col justify-center">
                    <h3 className="font-heading text-base font-bold text-gunmetal leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-snug">
                      {item.category}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-border/50 text-[11px] text-muted-foreground">
                    <span className="font-medium text-gunmetal/70">
                      {item.tag}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-light-blue/60 px-2.5 py-0.5 font-semibold text-moonstone group-hover:bg-moonstone group-hover:text-white transition-colors">
                      <Images className="size-3" />
                      {item.gallery.length}
                    </span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Indicador para móviles */}
          <p className="mt-3 text-center text-xs text-muted-foreground sm:hidden">
            Deslizá horizontalmente para ver más proyectos →
          </p>
        </div>
      </div>

      {/* Modal Galería Lightbox */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeGallery}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-gunmetal/95 p-4 backdrop-blur-md sm:p-6 animate-in fade-in duration-200"
        >
          {/* Barra superior */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex w-full max-w-6xl mx-auto items-center justify-between pb-4 text-white"
          >
            <div>
              <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-saffron uppercase tracking-wider">
                {selectedProject.tag}
              </span>
              <h3 className="mt-1 font-heading text-lg sm:text-xl font-bold text-white">
                {selectedProject.title}
              </h3>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs sm:text-sm font-semibold text-white/70">
                {activeImageIndex + 1} de {selectedProject.gallery.length}
              </span>
              <button
                type="button"
                onClick={closeGallery}
                aria-label="Cerrar galería"
                className="grid size-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>

          {/* Imagen principal con botones de navegación */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-1 items-center justify-center py-2"
          >
            {selectedProject.gallery.length > 1 && (
              <button
                type="button"
                onClick={prevImage}
                aria-label="Foto anterior"
                className="absolute left-2 sm:left-4 z-10 grid size-12 place-items-center rounded-full bg-white/15 text-white shadow-xl backdrop-blur-md transition-all hover:bg-white/30 cursor-pointer"
              >
                <ChevronLeft className="size-6" />
              </button>
            )}

            <div className="relative max-h-[72vh] max-w-5xl overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={selectedProject.gallery[activeImageIndex]}
                alt={`${selectedProject.title} - Foto ${activeImageIndex + 1}`}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-2xl"
              />
            </div>

            {selectedProject.gallery.length > 1 && (
              <button
                type="button"
                onClick={nextImage}
                aria-label="Siguiente foto"
                className="absolute right-2 sm:right-4 z-10 grid size-12 place-items-center rounded-full bg-white/15 text-white shadow-xl backdrop-blur-md transition-all hover:bg-white/30 cursor-pointer"
              >
                <ChevronRight className="size-6" />
              </button>
            )}
          </div>

          {/* Tira de miniaturas inferior */}
          {selectedProject.gallery.length > 1 && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="mx-auto flex max-w-md items-center justify-center gap-3 pt-4"
            >
              {selectedProject.gallery.map((thumb, idx) => (
                <button
                  key={`${thumb}-${idx}`}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative overflow-hidden rounded-xl border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? "border-saffron scale-105 shadow-md"
                      : "border-white/20 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={thumb}
                    alt={`Miniatura ${idx + 1}`}
                    className="h-14 w-20 object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

/* ---------------- Pricing ---------------- */

const PLANS = [
  {
    name: "Basic",
    tagline: "Tu negocio en internet",
    price: "Desde $150.000",
    originalPrice: "$290.000",
    isOffer: true,
    billingNote: "Pago único",
    features: [
      "Landing page de hasta 3 secciones",
      "Diseño responsive",
      "Galería de fotos",
      "Botón de WhatsApp",
      "Ubicación Google Maps",
      "SEO básico",
      "Publicación online",
    ],
    recommended: false,
  },
  {
    name: "Standard",
    tagline: "Más herramientas para tu negocio",
    price: "Desde $250.000",
    originalPrice: "$450.000",
    features: [
      "Todo lo de Basic",
      "Hasta 5 secciones",
      "Formulario de contacto",
      "Hasta 6 tipos de servicios (habitaciones para alojamientos)",
      "Una integración iCal para alojamientos",
      "Configuración de dominio propio (no incluido el costo)",
    ],
    recommended: true,
  },
  {
    name: "Premium",
    tagline: "Tu web, bajo tu control",
    price: "Desde $450.000",
    originalPrice: "$690.000",
    features: [
      "Todo lo de Standard",
      "Web autoadministrable",
      "Edición de textos e imágenes desde un panel",
      "Diseño más personalizado",
      "Capacitación básica de uso",
      "Funciones adicionales a evaluar",
    ],
    recommended: false,
  },
];

function Pricing({
  onOpenBasicInfo,
  onOpenStandardInfo,
  onOpenPremiumInfo,
}: {
  onOpenBasicInfo?: () => void;
  onOpenStandardInfo?: () => void;
  onOpenPremiumInfo?: () => void;
}) {
  const checkInMessage = "Hola, quiero más info sobre el web check-in";
  const checkInLink = waLink(checkInMessage);

  return (
    <section id="planes" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Planes"
          title="Planes simples"
          description="Precios claros, sin sorpresas. Elegí el plan que mejor se adapte a tu proyecto."
        />
        <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              className={`relative flex flex-col rounded-3xl border bg-white p-7 transition-all hover:-translate-y-1 ${
                plan.recommended
                  ? "border-2 border-moonstone shadow-[0_16px_40px_-16px_oklch(0.65_0.078_212.2/0.45)]"
                  : "border-border shadow-[0_4px_20px_-8px_oklch(0.32_0.03_209.6/0.12)] hover:shadow-lg"
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-saffron px-4 py-1 text-xs font-bold tracking-wide text-gunmetal uppercase shadow-sm">
                  Recomendado
                </span>
              )}
              {plan.isOffer && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-3.5 py-0.5 text-[11px] font-bold tracking-wide text-white uppercase shadow-sm">
                  Oferta
                </span>
              )}
              <h3 className="font-heading text-lg font-bold text-moonstone uppercase">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">
                {plan.tagline}
              </p>

              <div className="mt-4">
                {plan.originalPrice && (
                  <p className="text-xs sm:text-sm font-semibold text-muted-foreground line-through">
                    {plan.originalPrice}
                  </p>
                )}
                <p className="font-heading text-3xl font-extrabold text-gunmetal">
                  {plan.price}
                </p>

                {/* Chips de Pago único y Sin mantenimiento mensual */}
                <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                  <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-200">
                    Pago único
                  </span>
                  <span className="inline-flex items-center rounded-md bg-amber-50 px-2 py-0.5 text-[11px] font-bold text-amber-800 border border-amber-300">
                    Sin mantenimiento mensual
                  </span>
                </div>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-moonstone" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Botón 'Más información' para Plan Basic */}
              {plan.name === "Basic" && (
                <div className="mt-6 pt-4 border-t border-border/70 flex justify-center">
                  <button
                    type="button"
                    onClick={onOpenBasicInfo}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-moonstone hover:text-[#3856a8] hover:underline transition-colors cursor-pointer py-1"
                  >
                    <Info className="size-4" />
                    <span>Más información</span>
                  </button>
                </div>
              )}

              {/* Botón 'Más información' para Plan Standard */}
              {plan.name === "Standard" && (
                <div className="mt-6 pt-4 border-t border-border/70 flex justify-center">
                  <button
                    type="button"
                    onClick={onOpenStandardInfo}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-moonstone hover:text-[#3856a8] hover:underline transition-colors cursor-pointer py-1"
                  >
                    <Info className="size-4" />
                    <span>Más información</span>
                  </button>
                </div>
              )}

              {/* Botón 'Más información' para Plan Premium */}
              {plan.name === "Premium" && (
                <div className="mt-6 pt-4 border-t border-border/70 flex justify-center">
                  <button
                    type="button"
                    onClick={onOpenPremiumInfo}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-moonstone hover:text-[#3856a8] hover:underline transition-colors cursor-pointer py-1"
                  >
                    <Info className="size-4" />
                    <span>Más información</span>
                  </button>
                </div>
              )}

              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition-all cursor-pointer ${
                  plan.recommended
                    ? "bg-saffron text-white hover:brightness-105"
                    : "border-2 border-moonstone text-moonstone hover:bg-moonstone hover:text-white"
                }`}
              >
                Consultar por este plan
              </a>
            </motion.div>
          ))}
        </div>

        {/* Plan PERSONALIZADO - Bloque horizontal de ancho completo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.25, ease: "easeOut" }}
          className="mt-8 overflow-hidden rounded-3xl border border-[#4a6ed1]/20 bg-[#4a6ed1]/[0.06] p-7 sm:p-9 shadow-[0_4px_24px_-10px_rgba(74,110,209,0.12)] text-left"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Información a la izquierda */}
            <div className="flex-1 space-y-4">
              <div>
                <span className="font-heading text-xs font-bold uppercase tracking-wider text-moonstone">
                  PERSONALIZADO
                </span>
                <h3 className="mt-1 font-heading text-2xl sm:text-3xl font-extrabold text-gunmetal tracking-tight">
                  Una web diseñada para tus necesidades.
                </h3>
                <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-gunmetal">
                  A cotizar
                </p>
              </div>

              {/* Lista de características con checks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-gunmetal/85">
                <div className="flex items-center gap-2.5">
                  <Check className="size-4 shrink-0 text-moonstone stroke-[2.5]" />
                  <span>Diseño y estructura a medida.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="size-4 shrink-0 text-moonstone stroke-[2.5]" />
                  <span>Secciones personalizadas.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="size-4 shrink-0 text-moonstone stroke-[2.5]" />
                  <span>Formularios y funciones especiales.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="size-4 shrink-0 text-moonstone stroke-[2.5]" />
                  <span>Integraciones con herramientas externas.</span>
                </div>
                <div className="flex items-center gap-2.5 sm:col-span-2">
                  <Check className="size-4 shrink-0 text-moonstone stroke-[2.5]" />
                  <span>Presupuesto según tu proyecto.</span>
                </div>
              </div>
            </div>

            {/* Botón a la derecha en desktop, apilado en móvil */}
            <div className="shrink-0 lg:self-center">
              <a
                href={waLink("Hola, quiero consultar por una página web personalizada")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-moonstone px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#3d5cb5] hover:scale-102 active:scale-95 cursor-pointer"
              >
                Solicitar presupuesto
              </a>
            </div>
          </div>
        </motion.div>

        {/* Módulo destacado de Web check-in debajo de las tarjetas */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.35, ease: "easeOut" }}
          className="relative mt-8 overflow-hidden rounded-3xl border-2 border-moonstone/40 bg-gradient-to-br from-white via-[#4a6ed1]/[0.03] to-[#4a6ed1]/[0.08] p-7 sm:p-10 shadow-[0_20px_50px_-20px_rgba(74,110,209,0.32)]"
        >
          {/* Luz sutil de fondo para realce */}
          <div
            className="pointer-events-none absolute -top-20 -right-20 size-72 rounded-full bg-moonstone/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Columna izquierda con información y características */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-moonstone px-3.5 py-1 text-xs font-bold text-white shadow-xs tracking-wide">
                  <Sparkles className="size-3.5" />
                  SERVICIO INDEPENDIENTE
                </span>
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-700 tracking-wide border border-emerald-300">
                  SIN CUOTAS MENSUALES
                </span>
              </div>

              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-gunmetal tracking-tight">
                  Simplificá el check-in de tus huéspedes.
                </h3>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Tus huéspedes completan sus datos antes de llegar desde su celular. Vos recibís la información organizada, sin formularios en papel ni cargas manuales.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-gunmetal font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4.5 shrink-0 text-emerald-600" />
                  <span>Sin necesidad de tener una web</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4.5 shrink-0 text-emerald-600" />
                  <span>Formulario personalizado con tu logo</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4.5 shrink-0 text-emerald-600" />
                  <span>Aviso por correo electrónico</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4.5 shrink-0 text-emerald-600" />
                  <span>Registro automático en planilla</span>
                </div>
              </div>
            </div>

            {/* Columna derecha con precio destacado y CTA */}
            <div className="lg:col-span-5 rounded-2xl border border-moonstone/25 bg-white/95 p-6 sm:p-7 text-left flex flex-col justify-between h-full shadow-[0_10px_30px_-15px_rgba(74,110,209,0.2)]">
              <div>
                <span className="font-heading text-xs font-bold uppercase tracking-wider text-moonstone">
                  INVERSIÓN ÚNICA
                </span>
                <div className="mt-1.5 font-heading text-3xl sm:text-4xl font-extrabold text-gunmetal tracking-tight">
                  $100.000
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Sin abonos mensuales por el servicio de Wandersites.
                </p>
              </div>

              <div className="mt-6 pt-2">
                <a
                  href={checkInLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-moonstone px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-[0_10px_24px_-8px_rgba(74,110,209,0.55)] transition-all hover:-translate-y-0.5 hover:bg-[#3d5cb5] hover:shadow-[0_14px_30px_-8px_rgba(74,110,209,0.6)] active:translate-y-0 cursor-pointer"
                >
                  Conocer el web check-in <ArrowRight className="size-4" />
                </a>
                <p className="mt-2.5 text-center text-xs text-muted-foreground">
                  Se puede contratar solo o sumar a tu página web.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Los precios pueden variar según las necesidades de cada proyecto.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Sobre nosotros ---------------- */

function About() {
  return (
    <section id="sobre-nosotros" className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28">
      {/* Imagen de fondo del alojamiento oscurecida */}
      <img
        src="/images/j_about_bg.jpg"
        alt="Alojamiento turístico con piscina iluminada al anochecer"
        width={1920}
        height={1080}
        loading="lazy"
        decoding="auto"
        className="absolute inset-0 h-full w-full object-cover object-center"
        referrerPolicy="no-referrer"
      />
      {/* Capa de oscurecimiento y gradiente para contraste óptimo */}
      <div
        className="absolute inset-0 bg-gunmetal/85 backdrop-blur-[2px] transition-opacity"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-gunmetal via-transparent to-gunmetal/80"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-saffron uppercase backdrop-blur-md border border-white/15">
            Sobre nosotros
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl font-heading">
            Webs hechas por gente del turismo
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
          className="mt-8 text-center max-w-2xl mx-auto"
        >
          <p className="text-base leading-relaxed text-white font-medium sm:text-lg sm:leading-relaxed text-balance">
            Con más de <span className="font-bold text-saffron">10 años de experiencia</span> en hotelería y <span className="font-bold text-saffron">formación profesional en turismo</span>, conocemos el sector desde adentro. Sabemos qué buscan los huéspedes antes de reservar y qué necesitan los alojamientos para <span className="font-bold text-saffron">destacarse online</span>.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 items-stretch">
          {/* TARJETA 1 */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col h-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-6 text-center text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-white/[0.13]"
          >
            <div className="mx-auto size-12 rounded-xl bg-saffron/20 border border-saffron/30 text-saffron flex items-center justify-center font-heading font-extrabold text-lg shrink-0">
              10+
            </div>
            <h3 className="mt-3.5 font-heading font-bold text-white text-base">
              Años de experiencia
            </h3>
            <p className="mt-2 text-xs sm:text-[13px] text-white/80 leading-relaxed flex-1">
              Conocemos las necesidades reales de los alojamientos y sus huéspedes.
            </p>
          </motion.div>

          {/* TARJETA 2 */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
            className="flex flex-col h-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-6 text-center text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-white/[0.13]"
          >
            <div className="mx-auto size-12 rounded-xl bg-saffron/20 border border-saffron/30 text-saffron flex items-center justify-center font-heading font-extrabold text-lg shrink-0">
              0%
            </div>
            <h3 className="mt-3.5 font-heading font-bold text-white text-base">
              Sin comisiones por consultas
            </h3>
            <p className="mt-2 text-xs sm:text-[13px] text-white/80 leading-relaxed flex-1">
              Tus potenciales huéspedes pueden contactarte directamente, sin intermediarios.
            </p>
          </motion.div>

          {/* TARJETA 3 */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.34, ease: "easeOut" }}
            className="flex flex-col h-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-6 text-center text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-white/[0.13]"
          >
            <div className="mx-auto size-12 rounded-xl bg-saffron/20 border border-saffron/30 text-saffron flex items-center justify-center font-heading font-extrabold text-lg shrink-0">
              100%
            </div>
            <h3 className="mt-3.5 font-heading font-bold text-white text-base">
              Diseño adaptable
            </h3>
            <p className="mt-2 text-xs sm:text-[13px] text-white/80 leading-relaxed flex-1">
              Una experiencia optimizada para celulares, tablets y computadoras.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Preguntas Frecuentes (FAQ) ---------------- */

const FAQS = [
  {
    question: "¿Necesito conocimientos técnicos para tener mi página web?",
    answer:
      "¡No! En Wandersites nos encargamos de diseñar, configurar y publicar tu sitio web para que esté listo para usar. No necesitás saber de programación ni diseño.",
  },
  {
    question: "¿Tengo que pagar un mantenimiento mensual?",
    answer:
      "No. Nuestros planes no requieren mantenimiento mensual obligatorio. Una vez entregada tu web, podés utilizarla sin pagar una cuota mensual a Wandersites. Las modificaciones posteriores se presupuestan por separado.\n\nEl dominio y determinados servicios externos pueden tener costos de renovación.",
  },
  {
    question: "¿La página web queda a mi nombre?",
    answer:
      "¡Sí! Tu página web se entrega en cuentas bajo tu control, con todos los accesos correspondientes. De esta manera, mantenés el control de tu sitio.",
  },
  {
    question: "¿Puedo modificar los textos, las fotos o los precios?",
    answer:
      "Depende del plan contratado. Contamos con opciones autoadministrables que te permiten actualizar determinados contenidos por tu cuenta. En los planes básicos, podés solicitarnos modificaciones cuando las necesites, con un costo adicional.",
  },
  {
    question: "¿Cuánto tiempo tarda en estar lista mi página web?",
    answer:
      "El plazo depende del diseño y las funcionalidades que necesites. Antes de comenzar, te informamos el tiempo estimado de entrega. Para avanzar es importante contar con la información y los materiales de tu negocio.",
  },
  {
    question: "¿Qué necesito para comenzar?",
    answer:
      "Solo necesitamos la información principal de tu negocio, fotografías, logo (si tenés) y datos de contacto. Te acompañamos durante el proceso para organizar todo el contenido.",
  },
  {
    question: "¿Mi página web va a aparecer en Google?",
    answer:
      "Todos nuestros sitios incluyen optimización SEO básica para facilitar su indexación en buscadores. La aparición y el posicionamiento en los resultados dependen de Google y no pueden garantizarse.",
  },
  {
    question: "¿Puedo recibir consultas o reservas desde mi página web?",
    answer:
      "¡Sí! Podemos incorporar botones de WhatsApp, formularios de contacto, calendarios de disponibilidad e integraciones con sistemas de reservas externos, según las funcionalidades de tu plan.",
  },
  {
    question: "¿Qué es el Web Check-in y cómo funciona?",
    answer:
      "Es un formulario digital que permite a tus huéspedes completar sus datos desde el celular antes de llegar al alojamiento. Solo tenés que compartirles un enlace por WhatsApp o correo electrónico. Una vez enviado el formulario, recibís la información automáticamente por email y queda registrada en una planilla de Google Sheets.",
  },
  {
    question: "¿Puedo contratar el Web Check-in sin tener una página web?",
    answer:
      "¡Sí! El Web Check-in es un servicio independiente. No necesitás contratar una página web con Wandersites ni tener una web propia. Te entregamos un enlace personalizado para compartir directamente con tus huéspedes, sin necesidad de instalar aplicaciones.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="scroll-mt-20 border-t border-border bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[850px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full bg-moonstone/10 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-moonstone uppercase border border-moonstone/20">
            FAQ
          </span>
          <h2 className="mt-3.5 text-3xl font-extrabold tracking-tight text-gunmetal sm:text-4xl font-heading">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Todo lo que necesitás saber antes de crear tu página web con nosotros.
          </p>
        </motion.div>

        {/* Acordeón de preguntas */}
        <div className="mt-12 divide-y divide-border/80 border-y border-border/80">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-btn-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={faq.question}
                className={`transition-colors duration-200 ${
                  isOpen ? "bg-surface/50" : "hover:bg-surface/30"
                }`}
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors cursor-pointer"
                >
                  <span
                    className={`font-heading text-base sm:text-lg font-bold leading-snug transition-colors ${
                      isOpen ? "text-moonstone" : "text-gunmetal"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-200 ${
                      isOpen
                        ? "border-moonstone/40 bg-moonstone/10 text-moonstone"
                        : "border-border text-gunmetal/70 bg-white"
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <Minus className="size-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="size-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {/* Panel de respuesta con soporte semántico y animación fluida */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-5"
                      : "grid-rows-[0fr] opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm sm:text-base leading-relaxed text-gunmetal/80 whitespace-pre-line font-normal pr-4 sm:pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

function FinalCta() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-r from-[#4A6ED1] via-[#7B68C4] to-[#FF7A2A]">
      {/* Sutil halo decorativo para suavidad visual */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full bg-white/15 blur-3xl"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6"
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-heading drop-shadow-xs">
          ¿Listo para tener tu página web?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg font-medium drop-shadow-xs">
          Contame sobre tu proyecto y te envío una propuesta.
        </p>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-bold text-gunmetal shadow-[0_16px_36px_-12px_rgba(11,16,32,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:bg-slate-50 active:translate-y-0 sm:text-lg cursor-pointer"
        >
          <MessageCircle className="size-5 text-[#25D366]" />
          Contactar por WhatsApp
        </a>
      </motion.div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer({
  onOpenLegal,
}: {
  onOpenLegal: (type: "privacidad" | "terminos") => void;
}) {
  return (
    <footer className="bg-gunmetal px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <img
              src="/images/logo-wandersites.webp"
              alt="Logo Wandersites"
              width={36}
              height={36}
              loading="lazy"
              decoding="auto"
              className="size-9 rounded-xl object-contain bg-white/10 p-1"
            />
            <span className="font-heading text-lg font-bold text-white">
              {CONFIG.businessName}
            </span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-white/70">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-saffron cursor-pointer"
            >
              WhatsApp
            </a>
            <a
              href={CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-saffron cursor-pointer"
            >
              <Instagram className="size-4" /> Instagram
            </a>
            <a
              href={`mailto:${CONFIG.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-saffron cursor-pointer"
            >
              <Mail className="size-4" /> Email
            </a>
            <button
              type="button"
              onClick={() => onOpenLegal("privacidad")}
              className="transition-colors hover:text-saffron cursor-pointer bg-transparent border-0 p-0 text-white/70 font-semibold"
            >
              Política de privacidad
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal("terminos")}
              className="transition-colors hover:text-saffron cursor-pointer bg-transparent border-0 p-0 text-white/70 font-semibold"
            >
              Términos y condiciones
            </button>
          </nav>
        </div>

        {/* Datos de la responsable y Defensa del Consumidor */}
        <div className="mt-8 border-t border-white/10 pt-6 flex flex-col gap-3 text-xs text-white/60 text-center sm:text-left sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-white/80 font-medium">
              {CONFIG.businessName} · Argentina
            </p>
            <p>
              © {new Date().getFullYear()} {CONFIG.businessName} · Diseño web · Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Floating WhatsApp ---------------- */

function WhatsAppIcon({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed right-5 bottom-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_-5px_rgba(37,211,102,0.55)] transition-all hover:bg-[#20ba5a] hover:scale-110 active:scale-95 cursor-pointer sm:size-15"
    >
      <WhatsAppIcon className="size-7 sm:size-8" />
    </a>
  );
}

/* ---------------- Page ---------------- */

export function LandingPage() {
  const [legalModal, setLegalModal] = useState<"privacidad" | "terminos" | null>(null);
  const [basicPlanModalOpen, setBasicPlanModalOpen] = useState(false);
  const [standardPlanModalOpen, setStandardPlanModalOpen] = useState(false);
  const [premiumPlanModalOpen, setPremiumPlanModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgressBar />
      <Header />
      <main>
        <Hero />
        <TheProblem />
        <Services />
        <WebCheckIn />
        <About />
        <Portfolio />
        <Pricing
          onOpenBasicInfo={() => setBasicPlanModalOpen(true)}
          onOpenStandardInfo={() => setStandardPlanModalOpen(true)}
          onOpenPremiumInfo={() => setPremiumPlanModalOpen(true)}
        />
        <Faq />
        <FinalCta />
      </main>
      <Footer onOpenLegal={(type) => setLegalModal(type)} />
      <FloatingWhatsApp />
      <CookieBanner onOpenPrivacy={() => setLegalModal("privacidad")} />
      <LegalModal
        type={legalModal}
        onClose={() => setLegalModal(null)}
      />
      <BasicPlanModal
        isOpen={basicPlanModalOpen}
        onClose={() => setBasicPlanModalOpen(false)}
      />
      <StandardPlanModal
        isOpen={standardPlanModalOpen}
        onClose={() => setStandardPlanModalOpen(false)}
      />
      <PremiumPlanModal
        isOpen={premiumPlanModalOpen}
        onClose={() => setPremiumPlanModalOpen(false)}
      />
    </div>
  );
}

export default LandingPage;
