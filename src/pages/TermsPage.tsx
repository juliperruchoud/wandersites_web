import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, CheckCircle2 } from "lucide-react";
import contentData from "@/src/content.json";

export function TermsPage() {
  const { terminos, responsable } = contentData;

  useEffect(() => {
    document.title = terminos.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", terminos.metaDescription);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", terminos.metaTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", terminos.metaDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://wandersites.com/terminos");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://wandersites.com/terminos");

    window.scrollTo(0, 0);

    return () => {
      document.title = "Wandersites | Diseño Web para Alojamientos y Negocios";
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "Diseñamos páginas web modernas para alojamientos turísticos, cabañas, hoteles y negocios. Landing pages, formularios y Web Check-in online."
        );
      }
      if (canonical) canonical.setAttribute("href", "https://wandersites.com/");
    };
  }, [terminos]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      {/* Barra superior de navegación */}
      <header className="sticky top-0 z-40 border-b border-border/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-gunmetal hover:text-moonstone transition-colors"
          >
            <ArrowLeft className="size-4" /> Volver a Wandersites
          </Link>
          <div className="flex items-center gap-2">
            <img
              src="/images/logo-wandersites.webp"
              alt="Logo Wandersites"
              width={28}
              height={28}
              className="size-7 rounded-lg object-contain"
            />
            <span className="font-heading text-sm font-bold text-gunmetal hidden sm:inline">
              Wandersites
            </span>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16 flex-1">
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-moonstone/10 px-3.5 py-1 text-xs font-bold text-moonstone uppercase border border-moonstone/20">
            <FileText className="size-3.5" />
            Condiciones de Contratación
          </div>
          <h1 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gunmetal tracking-tight">
            {terminos.titulo}
          </h1>
          {terminos.subtitulo ? (
            <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {terminos.subtitulo}
            </p>
          ) : null}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground border-b border-border pb-6">
            <span>Última actualización: {terminos.ultimaActualizacion}</span>
            <span>•</span>
            <span>República Argentina</span>
          </div>
        </div>

        {/* Secciones de los términos */}
        <div className="space-y-8 text-left">
          {terminos.secciones.map((sec, idx) => (
            <section
              key={idx}
              className="rounded-2xl border border-border bg-white p-6 sm:p-7 shadow-xs space-y-3"
            >
              <h2 className="font-heading text-lg sm:text-xl font-bold text-gunmetal flex items-center gap-2.5">
                {sec.titulo}
              </h2>
              <div className="text-sm sm:text-base text-gunmetal/85 leading-relaxed whitespace-pre-line font-normal">
                {sec.contenido}
              </div>
            </section>
          ))}
        </div>

        {/* Datos y Contacto */}
        <div className="mt-10 rounded-2xl bg-surface border border-border p-6 sm:p-8 text-left space-y-3">
          <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
            Contacto y atención
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {responsable.nombre} · Servicios de diseño y desarrollo web · Email:{" "}
            <a href={`mailto:${responsable.email}`} className="text-moonstone underline">
              {responsable.email}
            </a>
          </p>
          <div className="pt-3 border-t border-border flex flex-wrap gap-4 items-center text-xs">
            <a
              href={contentData.defensaConsumidorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-moonstone font-semibold hover:underline"
            >
              Defensa de las y los consumidores · Formulario de reclamos oficial
            </a>
          </div>
        </div>
      </main>

      {/* Pie de página simple */}
      <footer className="border-t border-border bg-white py-6 text-center text-xs text-muted-foreground">
        <div className="mx-auto max-w-4xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Wandersites · Todos los derechos reservados</p>
          <div className="flex gap-4">
            <Link to="/" className="hover:underline">Inicio</Link>
            <Link to="/privacidad" className="hover:underline">Política de privacidad</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default TermsPage;
