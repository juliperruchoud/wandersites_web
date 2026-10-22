import React, { useEffect } from "react";
import { X, Info, Check, MessageCircle } from "lucide-react";
import { CONFIG, waLink } from "@/src/pages/LandingPage";

interface PremiumPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PremiumPlanModal({ isOpen, onClose }: PremiumPlanModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const premiumWaMessage = "Hola, estuve leyendo la información detallada del Plan Premium y me gustaría consultar por mi proyecto.";
  const premiumWaLink = waLink(premiumWaMessage);

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gunmetal/80 p-3 sm:p-5 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col my-auto max-h-[92vh] w-full max-w-3xl rounded-3xl bg-white shadow-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Cabecera del Pop-up */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-white/95 px-6 py-4.5 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-xl bg-moonstone/10 text-moonstone">
              <Info className="size-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-moonstone">
                PLAN PREMIUM · INFORMACIÓN DETALLADA
              </span>
              <h2 className="font-heading text-lg sm:text-xl font-bold text-gunmetal leading-tight">
                Tu página web, bajo tu control
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

        {/* Contenido scrolleable */}
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-7 space-y-6 text-left">
          {/* Header de presentación y precio */}
          <div className="rounded-2xl border border-[#4a6ed1]/20 bg-[#4a6ed1]/[0.05] p-5 sm:p-6 space-y-2.5">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="font-heading text-2xl sm:text-3xl font-extrabold text-gunmetal">
                Desde $450.000 ARS
              </span>
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-700 border border-emerald-200">
                Pago único
              </span>
              <span className="inline-flex items-center rounded-md bg-amber-50 px-2 py-0.5 text-xs font-bold text-amber-800 border border-amber-300">
                Sin mantenimiento mensual
              </span>
            </div>
            <p className="text-sm sm:text-base text-gunmetal/90 leading-relaxed font-medium">
              Una página web profesional, moderna y autoadministrable, ideal para alojamientos turísticos, profesionales y negocios que necesitan mantener su información actualizada de manera independiente.
            </p>
            <p className="text-xs sm:text-sm font-semibold text-moonstone pt-1">
              Hosting y publicación incluidos. Sin mantenimiento mensual obligatorio con Wandersites.
            </p>
          </div>

          {/* ¿Qué incluye? */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-3">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              ¿Qué incluye el Plan Premium?
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gunmetal/85">
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Diseño de landing page de hasta <strong>5 secciones</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Diseño personalizado según la identidad de tu negocio.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Diseño responsive, adaptable a celulares, tablets y computadoras.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Hasta <strong>30 fotografías</strong> proporcionadas por el cliente.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Galería de imágenes.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Botón de contacto directo por WhatsApp.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Integración con Google Maps.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Enlaces a redes sociales.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Formulario de contacto vinculado al correo electrónico del cliente.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Integración de un calendario iCal de disponibilidad, cuando corresponda y exista una fuente compatible.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Optimización SEO básica.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Hosting incluido bajo las condiciones del servicio.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Certificado SSL/HTTPS proporcionado por la plataforma de alojamiento.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span><strong>Panel de administración de contenidos mediante Decap CMS.</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Configuración inicial y entrega de accesos.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Orientación inicial sobre el uso del panel de administración.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Una ronda de correcciones previa a la entrega definitiva.</span>
              </li>
            </ul>
          </section>

          {/* 1. Página web autoadministrable */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              1. Página web autoadministrable
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              El Plan Premium incorpora un sistema de gestión de contenidos (CMS) que permite actualizar determinados elementos de la página web sin necesidad de modificar código.
            </p>
            <p className="text-xs sm:text-sm text-gunmetal/85 font-medium">
              Según la configuración de cada proyecto, el cliente podrá administrar:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gunmetal/85">
              <li>Textos y descripciones.</li>
              <li>Fotografías de las secciones habilitadas.</li>
              <li>Información de contacto.</li>
              <li>Enlaces a redes sociales.</li>
              <li>Información de habitaciones, servicios o productos incluidos en el CMS.</li>
              <li>Otros campos previamente configurados.</li>
            </ul>
            <div className="mt-3 pt-2.5 border-t border-border/70 text-xs text-muted-foreground space-y-1">
              <p className="font-semibold text-gunmetal">Importante:</p>
              <p>
                El sistema autoadministrable no permite necesariamente cambiar cualquier elemento de la web. La modificación de la estructura, el diseño, las funcionalidades, la programación o las secciones no configuradas para edición requerirá una intervención técnica y un presupuesto adicional.
              </p>
            </div>
          </section>

          {/* 2. Diseño y estructura */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              2. Diseño y estructura
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Se incluye una landing page de hasta cinco secciones, organizadas según las necesidades del negocio.
            </p>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              El cliente deberá proporcionar la información necesaria para desarrollar el sitio, incluyendo textos, fotografías, logo (si dispone de uno), colores de referencia y preferencias de tipografía. Las tipografías personalizadas deberán estar disponibles en <strong>Google Fonts</strong>.
            </p>
            <p className="text-xs text-muted-foreground">
              Las páginas internas adicionales, las secciones extra y las funcionalidades especiales se presupuestarán por separado.
            </p>
          </section>

          {/* 3. Fotografías */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              3. Fotografías
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Se incluyen hasta <strong>30 fotografías</strong> proporcionadas por el cliente. Se realizará la adaptación técnica necesaria para su correcta visualización y optimización web.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              No se incluyen sesiones fotográficas, retoques profesionales, eliminación de objetos ni edición avanzada de imágenes. La incorporación de fotografías adicionales o la reorganización posterior de galerías fuera de las funciones autoadministrables podrá tener un costo adicional.
            </p>
          </section>

          {/* 4. Formulario de contacto */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              4. Formulario de contacto
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Se incluye un formulario de contacto conectado a una solución compatible para enviar consultas al correo electrónico indicado por el cliente. Su funcionamiento dependerá de los servicios externos utilizados, sus límites de uso y sus condiciones operativas.
            </p>
            <p className="text-xs text-muted-foreground">
              No se incluyen sistemas de CRM, campañas de email marketing ni automatizaciones avanzadas, salvo contratación adicional.
            </p>
          </section>

          {/* 5. Calendario de disponibilidad iCal */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              5. Calendario de disponibilidad iCal
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Para alojamientos turísticos, se podrá incorporar una integración con un calendario iCal compatible. La integración permite mostrar información de disponibilidad obtenida de una fuente externa.
            </p>
            <div className="mt-2 pt-2 border-t border-border/70 text-xs text-muted-foreground space-y-1">
              <p>
                <strong>El calendario iCal no constituye un motor de reservas</strong> y su actualización puede tener demoras según la plataforma de origen y la frecuencia de sincronización configurada. No garantiza disponibilidad en tiempo real ni evita por sí solo las reservas duplicadas.
              </p>
              <p>
                La integración de sistemas adicionales deberá presupuestarse por separado.
              </p>
            </div>
          </section>

          {/* 6. SEO básico */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              6. SEO básico
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Incluye configuración inicial de elementos técnicos de posicionamiento, tales como:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gunmetal/85">
              <li>Títulos y descripciones de páginas.</li>
              <li>Estructura de encabezados.</li>
              <li>Etiquetas para compartir contenido en redes sociales.</li>
              <li>Diseño adaptable a dispositivos móviles.</li>
              <li>URLs y estructura básica del sitio.</li>
              <li>Optimización técnica inicial de imágenes.</li>
              <li>Configuración de archivos de indexación, cuando corresponda.</li>
            </ul>
            <p className="text-xs text-muted-foreground pt-1">
              El SEO básico no garantiza aparecer en los primeros resultados de Google ni conseguir una determinada cantidad de visitas. No incluye campañas publicitarias, posicionamiento SEO avanzado, redacción SEO continua ni seguimiento mensual.
            </p>
          </section>

          {/* 7. Propiedad de la página web */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              7. Propiedad de la página web
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-moonstone">
              Tu página web es tuya.
            </p>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Una vez finalizado el proyecto y completado el pago, el cliente recibirá el código fuente, los archivos y los accesos correspondientes al sitio desarrollado, conforme al alcance contratado. La página se configurará preferentemente en cuentas propias del cliente.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Si el cliente no dispone de las cuentas necesarias, Wandersites podrá asistirlo durante su creación y configuración inicial. También se configurarán, cuando corresponda, los accesos a las herramientas utilizadas para el formulario de contacto y las integraciones contratadas. El cliente será responsable de conservar sus credenciales y mantener la seguridad de sus cuentas. La entrega del proyecto no implica la propiedad de plataformas, programas o infraestructura pertenecientes a proveedores externos.
            </p>
          </section>

          {/* 8. SEO básico (alcance extendido) */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              8. SEO básico
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              El Plan incluye una configuración inicial destinada a facilitar la interpretación e indexación de la página por parte de los buscadores:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gunmetal/85">
              <li>Título SEO.</li>
              <li>Metadescripción.</li>
              <li>Estructura jerárquica de encabezados.</li>
              <li>URLs amigables, cuando corresponda.</li>
              <li>Textos alternativos para imágenes relevantes.</li>
              <li>Adaptación a dispositivos móviles.</li>
              <li>Configuraciones técnicas básicas de rastreo e indexación.</li>
            </ul>
            <p className="text-xs text-muted-foreground pt-1">
              <strong>El SEO básico no garantiza aparecer en los primeros resultados de Google ni obtener una cantidad determinada de visitas.</strong> No incluye posicionamiento avanzado, campañas publicitarias, producción continua de contenido ni seguimiento permanente en Google Search Console.
            </p>
          </section>

          {/* 9. Formulario de contacto */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              9. Formulario de contacto
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Se incluye un formulario de contacto para facilitar que los visitantes envíen consultas desde la página web (nombre, correo electrónico, teléfono y mensaje). Las consultas se enviarán automáticamente a la dirección de correo proporcionada por el cliente.
            </p>
            <div className="mt-2 pt-2 border-t border-border/70 text-xs text-muted-foreground space-y-1">
              <p className="font-semibold text-gunmetal">Consideraciones importantes</p>
              <p>
                El cliente deberá contar con una dirección de correo válida para recibir las consultas. Wandersites realizará la configuración inicial y las pruebas básicas de funcionamiento. No se garantiza la recepción de todos los mensajes cuando existan problemas ajenos al desarrollo (filtros antispam, buzones llenos, bloqueos del proveedor).
              </p>
              <p>
                El cliente será responsable de revisar su correo y responder las consultas recibidas. No incluye sistemas de atención automatizada, CRM ni respuestas inteligentes, salvo contratación adicional.
              </p>
            </div>
          </section>

          {/* 10. Categorías de habitaciones, productos o servicios */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              10. Categorías de habitaciones, productos o servicios
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Permite presentar hasta <strong>4 categorías diferenciadas</strong> de habitaciones, cabañas, productos o servicios (por ejemplo: cuatro tipos de habitaciones de un hotel, cuatro categorías de cabañas, cuatro servicios de un estudio o cuatro líneas principales de productos).
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Cada categoría podrá contar con una descripción, fotografías y características principales, dentro de los límites generales del plan. No incluye catálogos extensos con decenas de productos individuales, gestión de stock ni tiendas online. Las categorías adicionales o fichas de mayor complejidad podrán presupuestarse por separado.
            </p>
          </section>

          {/* 11. Conexión iCal para alojamientos */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              11. Conexión iCal para alojamientos
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Para alojamientos turísticos, se incluye <strong>una integración iCal</strong>, cuando exista una fuente compatible. Esta funcionalidad permite consultar información de disponibilidad a partir de un calendario proporcionado por el alojamiento o una plataforma externa compatible.
            </p>
            <div className="mt-2 pt-2 border-t border-border/70 text-xs text-muted-foreground space-y-1">
              <p className="font-semibold text-gunmetal">Consideraciones importantes</p>
              <p>
                La sincronización mediante iCal depende de los tiempos de actualización de los proveedores involucrados; <strong>la información no necesariamente se actualiza en tiempo real</strong>. No constituye por sí misma un motor de reservas ni garantiza la prevención absoluta de reservas superpuestas. El cliente será responsable de mantener correctamente configurados sus calendarios y verificar la disponibilidad antes de confirmar reservas.
              </p>
            </div>
          </section>

          {/* 12. Correcciones incluidas */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              12. Correcciones incluidas
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Incluye <strong>una ronda de correcciones antes de la aprobación definitiva</strong> (textos, fotografías, colores, distribución de elementos, ajustes visuales e información).
            </p>
            <p className="text-xs text-muted-foreground">
              Las solicitudes deberán presentarse de manera conjunta. No se incluyen rediseños completos, cambios generales de identidad visual ni incorporación de nuevas funcionalidades.
            </p>
          </section>

          {/* 13. Modificaciones posteriores a la entrega */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-3">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              13. Modificaciones posteriores a la entrega
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Más allá de los contenidos autoadministrables desde el CMS, el cliente podrá solicitar a Wandersites actualizaciones técnicas puntuales cuando las necesite:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="rounded-xl bg-white border border-border p-3.5 space-y-1">
                <span className="font-heading text-sm font-bold text-gunmetal">Cambios de texto</span>
                <p className="font-bold text-moonstone text-base">$20.000 ARS</p>
                <p className="text-xs text-muted-foreground">Hasta 5 modificaciones puntuales sobre textos existentes, dentro de una misma solicitud.</p>
              </div>
              <div className="rounded-xl bg-white border border-border p-3.5 space-y-1">
                <span className="font-heading text-sm font-bold text-gunmetal">Cambios de texto + fotografías</span>
                <p className="font-bold text-moonstone text-base">$50.000 ARS</p>
                <p className="text-xs text-muted-foreground">Hasta 5 modificaciones de texto y reemplazo de hasta 10 fotografías existentes, en una misma solicitud.</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              <strong>Otras modificaciones: a cotizar.</strong> Nuevas secciones, cambios estructurales, integraciones adicionales, rediseños o nuevas funcionalidades.
            </p>
          </section>

          {/* 14. Mantenimiento y soporte posterior */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              14. Mantenimiento y soporte posterior
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 font-medium">
              El desarrollo se abona una sola vez. No existe obligación de contratar un mantenimiento mensual con Wandersites.
            </p>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              El sitio podrá permanecer publicado mientras se mantengan las condiciones necesarias de los servicios utilizados. Wandersites no realiza monitoreo técnico permanente ni mantenimiento preventivo de los sitios sin un servicio de soporte contratado.
            </p>
            <p className="text-xs text-muted-foreground">
              Los costos de dominio, hosting pago, correo electrónico y servicios externos son independientes del precio de desarrollo, salvo que el presupuesto indique expresamente lo contrario.
            </p>
          </section>

          {/* 15. Garantía técnica */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              15. Garantía técnica
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Wandersites ofrece <strong>30 días de garantía técnica desde la entrega</strong> para corregir errores atribuibles al desarrollo original sin costo adicional. La garantía comprende fallas en las funcionalidades expresamente contratadas, incluyendo la configuración inicial del formulario de contacto y la integración iCal, cuando corresponda.
            </p>
            <p className="text-xs text-muted-foreground">
              No comprende nuevas funcionalidades, actualizaciones de contenido, rediseños ni modificaciones solicitadas posteriormente. Esta garantía comercial no sustituye ni limita los derechos que pudieran corresponder al cliente conforme a la legislación aplicable.
            </p>
          </section>

          {/* 16. Forma de pago */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              16. Forma de pago
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Para comenzar el desarrollo se solicita una <strong>seña equivalente al 50% del presupuesto total</strong>. El 50% restante deberá abonarse una vez finalizado y aprobado el proyecto, antes de su publicación definitiva y entrega de accesos.
            </p>
            <p className="text-xs text-muted-foreground">
              El comienzo del trabajo estará sujeto a la confirmación del pago inicial y a la recepción del material necesario. Los costos de dominios, suscripciones y herramientas externas no incluidos en el presupuesto serán abonados por el cliente.
            </p>
          </section>

          {/* 17. Cancelaciones, suspensión y plazos de entrega */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              17. Cancelaciones, suspensión y plazos de entrega
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              El plazo estimado de desarrollo se acordará antes de comenzar el proyecto y comenzará a contarse una vez cumplidas las condiciones de contratación y recibida la información necesaria. Si el cliente demora la entrega de textos, fotografías, accesos o aprobaciones, el proyecto podrá quedar temporalmente suspendido y se acordará un nuevo cronograma.
            </p>
            <p className="text-xs text-muted-foreground">
              Si el cliente decide cancelar el servicio, se evaluarán los trabajos efectivamente realizados y los gastos autorizados. No se establece una pérdida automática de la seña en todos los supuestos.
            </p>
          </section>

          {/* 18. Funcionalidades no incluidas y servicios externos */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              18. Funcionalidades no incluidas y servicios externos
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Comprende exclusivamente las funcionalidades detalladas en su descripción y presupuesto. No incluye:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-muted-foreground pt-1">
              <span>• Motor de reservas con confirmación automática</span>
              <span>• Sistemas de pagos online</span>
              <span>• Web Check-in Online</span>
              <span>• Sistemas de turnos</span>
              <span>• Tiendas online</span>
              <span>• Gestión de reservas</span>
              <span>• Integraciones adicionales a la conexión iCal</span>
              <span>• CRM o automatizaciones comerciales</span>
              <span>• SEO avanzado</span>
              <span>• Campañas publicitarias</span>
              <span className="sm:col-span-2">• Mantenimiento mensual o administración de correos/consultas</span>
            </div>
            <p className="text-xs text-muted-foreground pt-1">
              La web puede utilizar herramientas externas (GitHub, Cloudflare, Google Maps, servicios de formularios, plataformas de reservas) con sus propias condiciones y disponibilidad.
            </p>
          </section>

          {/* 19. Responsabilidades y condiciones finales */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              19. Responsabilidades y condiciones finales
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85">
              El cliente será responsable de:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gunmetal/85">
              <li>Proporcionar información verdadera y actualizada.</li>
              <li>Entregar textos, fotografías y demás materiales necesarios.</li>
              <li>Contar con derechos para utilizar los contenidos.</li>
              <li>Mantener vigentes sus dominios y servicios contratados.</li>
              <li>Conservar las credenciales de acceso.</li>
              <li>Revisar las consultas recibidas mediante el formulario.</li>
              <li>Mantener actualizada la fuente de disponibilidad iCal, cuando corresponda.</li>
              <li>Verificar la disponibilidad antes de confirmar reservas.</li>
              <li>Revisar y aprobar la web antes de su publicación.</li>
              <li>Proporcionar las políticas de privacidad y demás textos legales que correspondan a su actividad.</li>
            </ul>
            <p className="text-xs text-muted-foreground pt-1">
              El servicio no incluye asesoramiento legal, contable, fiscal ni gestión comercial del negocio. Antes de comenzar, Wandersites enviará un presupuesto con el alcance del desarrollo, precio, funcionalidades, plazos y condiciones particulares. Cualquier servicio no contemplado expresamente deberá acordarse y presupuestarse por separado.
            </p>
          </section>

          {/* Cierre institucional */}
          <div className="rounded-2xl bg-gunmetal text-white p-5 sm:p-6 text-center space-y-2">
            <p className="font-heading text-base sm:text-lg font-bold text-white">
              Wandersites — Tu web es tuya. Sin mensualidades obligatorias.
            </p>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl mx-auto">
              Creamos tu página web, incorporamos herramientas para facilitar las consultas y te entregamos los accesos correspondientes. Si necesitás actualizarla más adelante, podés solicitar modificaciones puntuales cuando quieras.
            </p>
          </div>
        </div>

        {/* Pie con acciones */}
        <div className="sticky bottom-0 z-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border bg-slate-50 px-6 py-3.5">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto rounded-full border border-border bg-white px-6 py-2 text-xs sm:text-sm font-semibold text-gunmetal hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Cerrar
          </button>
          <a
            href={premiumWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-saffron px-6 py-2 text-xs sm:text-sm font-bold text-white hover:brightness-105 active:scale-95 transition-all cursor-pointer shadow-sm"
          >
            <MessageCircle className="size-4" /> Consultar por Plan Premium
          </a>
        </div>
      </div>
    </div>
  );
}

export default PremiumPlanModal;
