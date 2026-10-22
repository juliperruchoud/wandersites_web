import React, { useEffect } from "react";
import { X, Info, Check, MessageCircle } from "lucide-react";
import { CONFIG, waLink } from "@/src/pages/LandingPage";

interface StandardPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StandardPlanModal({ isOpen, onClose }: StandardPlanModalProps) {
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

  const standardWaMessage = "Hola, estuve leyendo la información detallada del Plan Standard y me gustaría consultar por mi proyecto.";
  const standardWaLink = waLink(standardWaMessage);

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
                PLAN STANDARD · INFORMACIÓN DETALLADA
              </span>
              <h2 className="font-heading text-lg sm:text-xl font-bold text-gunmetal leading-tight">
                Más herramientas para tu negocio
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
                Desde $250.000 ARS
              </span>
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-700 border border-emerald-200">
                Pago único
              </span>
              <span className="inline-flex items-center rounded-md bg-amber-50 px-2 py-0.5 text-xs font-bold text-amber-800 border border-amber-300">
                Sin mantenimiento mensual
              </span>
            </div>
            <p className="text-sm sm:text-base text-gunmetal/90 leading-relaxed font-medium">
              El Plan Standard está diseñado para alojamientos turísticos, comercios, emprendedores y profesionales que necesitan una página web más completa, con mayor capacidad para presentar sus servicios, recibir consultas y ofrecer información organizada a sus clientes.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Incluye todas las características del Plan Basic, con funcionalidades adicionales que permiten mejorar la comunicación y la experiencia de los visitantes.
            </p>
            <p className="text-xs sm:text-sm font-semibold text-moonstone pt-1">
              Hosting y publicación incluidos. Sin mantenimiento mensual obligatorio con Wandersites.
            </p>
          </div>

          {/* 1. ¿Qué incluye el Plan Standard? */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-3">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              1. ¿Qué incluye el Plan Standard?
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gunmetal/85">
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Landing page de una sola página, con hasta <strong>5 secciones de contenido</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Diseño moderno, funcional y adaptable a celulares, tablets y computadoras (responsive).</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Incorporación de hasta <strong>30 fotografías</strong> proporcionadas por el cliente.</span>
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
                <span>Ubicación mediante Google Maps.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span><strong>Formulario de contacto con envío automático al correo electrónico del negocio.</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span><strong>Presentación de hasta 4 categorías de habitaciones, alojamientos, productos o servicios.</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span><strong>Una conexión iCal para mostrar disponibilidad, cuando corresponda a un alojamiento turístico.</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Configuración inicial de SEO básico.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Configuración inicial del hosting y publicación online.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Una ronda de correcciones antes de la aprobación definitiva.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Entrega del código, archivos y accesos correspondientes al proyecto.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span><strong>30 días de garantía técnica</strong> sobre errores atribuibles al desarrollo original.</span>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground pt-2 border-t border-border/70">
              El plan no incluye un panel de autoadministración de contenidos.
            </p>
          </section>

          {/* 2. ¿Qué se considera una sección? */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              2. ¿Qué se considera una sección?
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Una sección es un bloque de contenido dentro de la página web. Por ejemplo:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gunmetal/85">
              <li>Presentación del negocio.</li>
              <li>Habitaciones, cabañas, productos o servicios.</li>
              <li>Galería de fotografías.</li>
              <li>Servicios e instalaciones.</li>
              <li>Ubicación y contacto.</li>
            </ul>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              El Plan Standard incluye hasta 5 secciones, cuya distribución se acordará antes de comenzar el desarrollo. Las funcionalidades incluidas podrán incorporarse dentro de estas secciones sin que necesariamente cada elemento requiera un bloque independiente.
            </p>
            <p className="text-xs text-muted-foreground">
              Las secciones adicionales, nuevas páginas internas o estructuras de mayor complejidad se presupuestarán por separado.
            </p>
          </section>

          {/* 3. Fotografías y contenido */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              3. Fotografías y contenido
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              El Plan Standard permite incorporar hasta <strong>30 fotografías</strong>, proporcionadas por el cliente. Las imágenes deberán contar con calidad y resolución adecuadas para su publicación.
            </p>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Wandersites podrá realizar ajustes básicos de tamaño, formato y optimización para favorecer su visualización y carga.
            </p>
            <p className="text-xs font-semibold text-gunmetal pt-1">No se incluyen:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-muted-foreground">
              <span>• Producción fotográfica</span>
              <span>• Retoque profesional</span>
              <span>• Creación de ilustraciones</span>
              <span>• Compra de imágenes o licencias</span>
              <span>• Diseño de logotipos</span>
              <span>• Redacción comercial extensa</span>
            </div>
            <p className="text-xs text-muted-foreground pt-1">
              El cliente deberá proporcionar textos, fotografías, descripciones, datos de contacto y demás contenido necesario para desarrollar la web. También será responsable de contar con los derechos y autorizaciones correspondientes para utilizar los materiales suministrados.
            </p>
          </section>

          {/* 4. Colores, tipografías e identidad visual */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              4. Colores, tipografías e identidad visual
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Antes de comenzar el desarrollo, el cliente deberá proporcionar una paleta de colores aproximada o referencias visuales de su preferencia. Si dispone de logotipo, manual de marca o identidad visual, podrá compartirlos para integrarlos al diseño.
            </p>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              También podrá solicitar fuentes específicas disponibles en <strong>Google Fonts</strong>, siempre que sean compatibles con el proyecto. Si el cliente no cuenta con una identidad visual definida, Wandersites podrá proponer una combinación de colores y tipografías acorde al rubro.
            </p>
            <p className="text-xs text-muted-foreground">
              El diseño se desarrollará sobre la base de las preferencias acordadas inicialmente. Los cambios generales de estilo solicitados después de aprobar la propuesta podrán considerarse un rediseño y presupuestarse por separado.
            </p>
          </section>

          {/* 5. Dominio web */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              5. Dominio web
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              El dominio es la dirección que permite ingresar a una página web, por ejemplo: <code className="bg-white px-1.5 py-0.5 rounded border border-border">www.tunegocio.com.ar</code>.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gunmetal/85">
              <li><strong>Si ya tiene un dominio:</strong> Wandersites podrá realizar la configuración necesaria para vincularlo con la nueva página, siempre que el cliente proporcione los accesos correspondientes.</li>
              <li><strong>Si todavía no tiene un dominio:</strong> podrá solicitar asistencia para elegir, registrar y configurar uno nuevo. El alcance y el posible costo adicional de esta gestión se informarán previamente.</li>
            </ul>
            <p className="text-xs text-muted-foreground">
              La compra y renovación del dominio no están incluidas en el precio del plan. El dominio deberá registrarse a nombre del cliente, quien será responsable de mantenerlo vigente. Las configuraciones extraordinarias de DNS o servicios externos podrán presupuestarse por separado.
            </p>
          </section>

          {/* 6. Hosting y publicación incluidos */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              6. Hosting y publicación incluidos
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              El Plan Standard incluye la configuración inicial del hosting y la publicación online de la página web. Siempre que las características técnicas del proyecto lo permitan, se utilizarán servicios de alojamiento con modalidades gratuitas compatibles con el uso comercial, como <strong>Cloudflare Pages</strong>.
            </p>
            <p className="text-xs sm:text-sm text-gunmetal/85 font-medium">
              El hosting incluido comprende la configuración y publicación inicial en una modalidad adecuada para el sitio contratado.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Los proveedores externos pueden establecer límites técnicos, restricciones de uso, condiciones de disponibilidad y costos asociados a determinadas funcionalidades. Si el proyecto requiere recursos superiores o servicios pagos, se informará al cliente antes de contratar cualquier ampliación.
            </p>

            <div className="mt-3 pt-3 border-t border-border/70 space-y-1 text-xs text-muted-foreground">
              <p className="font-semibold text-gunmetal">Límites y disponibilidad</p>
              <p>
                Las plataformas de alojamiento pueden establecer restricciones relacionadas con almacenamiento, tamaño y cantidad de archivos, solicitudes de funcionalidades dinámicas, frecuencia de publicaciones, consumo de recursos y servicios de correo electrónico e integraciones. Si se alcanzan los límites del servicio utilizado, determinadas funcionalidades podrían verse restringidas o requerir un plan superior. No se garantiza una cantidad ilimitada de visitas ni la disponibilidad ininterrumpida de servicios de terceros.
              </p>
            </div>
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
              Si el cliente no dispone de las cuentas necesarias, Wandersites podrá asistirlo durante su creación y configuración inicial. También se configurarán, cuando corresponda, los accesos a las herramientas utilizadas para el formulario de contacto y las integraciones contratadas. El cliente será responsable de conservar sus credenciales y mantener la seguridad de sus cuentas.
            </p>
          </section>

          {/* 8. SEO básico */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              8. SEO básico
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              El Plan Standard incluye una configuración inicial destinada a facilitar la interpretación e indexación de la página por parte de los buscadores:
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
              El Plan Standard incluye un formulario de contacto para facilitar que los visitantes envíen consultas desde la página web (nombre, correo electrónico, teléfono y mensaje). Las consultas se enviarán automáticamente a la dirección de correo proporcionada por el cliente.
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
              El Plan Standard permite presentar hasta <strong>4 categorías diferenciadas</strong> de habitaciones, cabañas, productos o servicios (por ejemplo: cuatro tipos de habitaciones de un hotel, cuatro categorías de cabañas, cuatro servicios de un estudio o cuatro líneas principales de productos).
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
              Para alojamientos turísticos, el Plan Standard incluye <strong>una integración iCal</strong>, cuando exista una fuente compatible. Esta funcionalidad permite consultar información de disponibilidad a partir de un calendario proporcionado por el alojamiento o una plataforma externa compatible.
            </p>
            <div className="mt-2 pt-2 border-t border-border/70 text-xs text-muted-foreground space-y-1">
              <p className="font-semibold text-gunmetal">Consideraciones importantes</p>
              <p>
                La sincronización mediante iCal depende de los tiempos de actualización de los proveedores involucrados; <strong>la información no necesariamente se actualiza en tiempo real</strong>. No constituye por sí misma un motor de reservas ni garantiza la prevención absoluta de reservas superpuestas. El cliente será responsable de mantener correctamente configurados sus calendarios y verificar la disponibilidad antes de confirmar reservas.
              </p>
              <p>
                Si el negocio no pertenece al sector de alojamientos, esta funcionalidad no será necesaria y no se reemplazará automáticamente por otro desarrollo equivalente.
              </p>
            </div>
          </section>

          {/* 12. Correcciones incluidas */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              12. Correcciones incluidas
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              El Plan Standard incluye <strong>una ronda de correcciones antes de la aprobación definitiva</strong> (textos, fotografías, colores, distribución de elementos, ajustes visuales e información).
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
              El Plan Standard no incluye un panel de autoadministración. Una vez entregada la web, el cliente podrá solicitar a Wandersites actualizaciones puntuales cuando las necesite:
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
              El desarrollo del Plan Standard se abona una sola vez. No existe obligación de contratar un mantenimiento mensual con Wandersites.
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
              El plazo estimado de desarrollo se acordará antes de comenzar el proyecto y comenzará a contarse una vez cumplidas las condiciones de contratación y recibida la información necesaria. Si el cliente demora la entrega de materiales o aprobaciones, el proyecto podrá quedar temporalmente suspendido.
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
              El Plan Standard comprende exclusivamente las funcionalidades detalladas en su descripción y presupuesto. No incluye:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-muted-foreground pt-1">
              <span>• Panel de autoadministración</span>
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
              <span className="sm:col-span-2">• Mantenimiento mensual o administración de consultas</span>
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
              Antes de comenzar, Wandersites enviará un presupuesto con el alcance del desarrollo, precio, funcionalidades, plazos y condiciones particulares. Cualquier servicio no contemplado expresamente deberá acordarse y presupuestarse por separado.
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
            href={standardWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-saffron px-6 py-2 text-xs sm:text-sm font-bold text-white hover:brightness-105 active:scale-95 transition-all cursor-pointer shadow-sm"
          >
            <MessageCircle className="size-4" /> Consultar por Plan Standard
          </a>
        </div>
      </div>
    </div>
  );
}

export default StandardPlanModal;
