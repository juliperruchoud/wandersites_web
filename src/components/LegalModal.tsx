import React, { useEffect } from "react";
import { X, Shield, FileText, ArrowRight } from "lucide-react";
import contentData from "@/src/content.json";

interface LegalModalProps {
  type: "privacidad" | "terminos" | null;
  onClose: () => void;
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  useEffect(() => {
    if (!type) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    // Prevenir scroll en el fondo cuando el modal está abierto
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  const data = type === "privacidad" ? contentData.privacidad : contentData.terminos;
  const isPrivacy = type === "privacidad";

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gunmetal/80 p-3 sm:p-5 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col my-auto max-h-[90vh] w-full max-w-3xl rounded-3xl bg-white shadow-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Cabecera del Pop-up */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-white/95 px-6 py-4.5 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-xl bg-moonstone/10 text-moonstone">
              {isPrivacy ? <Shield className="size-5" /> : <FileText className="size-5" />}
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-moonstone">
                {isPrivacy ? "Marco Legal · Ley 25.326" : "Condiciones del servicio"}
              </span>
              <h2 className="font-heading text-lg sm:text-xl font-bold text-gunmetal leading-tight">
                {data.titulo}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana"
            className="grid size-9 place-items-center rounded-full bg-slate-100 text-gunmetal transition-all hover:bg-slate-200 active:scale-95 cursor-pointer"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Contenido scrolleable del Pop-up */}
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-7 space-y-6 text-left">
          <div className="border-b border-border/80 pb-4">
            {data.subtitulo ? (
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {data.subtitulo}
              </p>
            ) : null}
            <p className="mt-2 text-xs text-muted-foreground">
              Última actualización: {data.ultimaActualizacion} · República Argentina
            </p>
          </div>

          <div className="space-y-6">
            {data.secciones.map((sec, idx) => (
              <section
                key={idx}
                className="rounded-2xl border border-border/80 bg-slate-50/60 p-5 sm:p-6 space-y-2.5"
              >
                <h3 className="font-heading text-sm sm:text-base font-bold text-gunmetal">
                  {sec.titulo}
                </h3>
                <div className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed whitespace-pre-line font-normal">
                  {sec.contenido}
                </div>
              </section>
            ))}
          </div>

          {/* Información complementaria al pie del pop-up */}
          {isPrivacy ? (
            <div className="rounded-2xl bg-surface border border-border p-5 text-xs text-gunmetal/80 space-y-2">
              <p className="font-semibold text-gunmetal">
                ¿Tenés consultas sobre tus datos personales?
              </p>
              <p>
                Podés escribirnos directamente a{" "}
                <a
                  href={`mailto:${contentData.responsable.email}`}
                  className="text-moonstone font-medium underline"
                >
                  {contentData.responsable.email}
                </a>
                .
              </p>
            </div>
          ) : (
            <div className="rounded-2xl bg-surface border border-border p-5 text-xs text-gunmetal/80 space-y-2">
              <p className="font-semibold text-gunmetal">
                Defensa de las y los consumidores
              </p>
              <a
                href={contentData.defensaConsumidorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-moonstone font-semibold hover:underline"
              >
                Acceder al formulario de reclamos oficial en argentina.gob.ar <ArrowRight className="size-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* Pie del Pop-up con botón de cierre */}
        <div className="sticky bottom-0 z-10 flex items-center justify-end border-t border-border bg-slate-50 px-6 py-3.5">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-gunmetal px-6 py-2 text-xs sm:text-sm font-bold text-white hover:bg-gunmetal/90 active:scale-95 transition-all cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default LegalModal;
