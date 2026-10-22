import React, { useEffect } from "react";
import { X, Info, Check, MessageCircle } from "lucide-react";
import { CONFIG, waLink } from "@/src/pages/LandingPage";

interface BasicPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BasicPlanModal({ isOpen, onClose }: BasicPlanModalProps) {
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

  const basicWaMessage = "Hola, estuve leyendo la información detallada del Plan Basic y me gustaría consultar por mi proyecto.";
  const basicWaLink = waLink(basicWaMessage);

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
                PLAN BASIC · INFORMACIÓN DETALLADA
              </span>
              <h2 className="font-heading text-lg sm:text-xl font-bold text-gunmetal leading-tight">
                Tu negocio en internet
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
                Desde $150.000 ARS
              </span>
              <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-700 border border-emerald-200">
                Pago único
              </span>
              <span className="inline-flex items-center rounded-md bg-amber-50 px-2 py-0.5 text-xs font-bold text-amber-800 border border-amber-300">
                Sin mantenimiento mensual
              </span>
            </div>
            <p className="text-sm sm:text-base text-gunmetal/90 leading-relaxed font-medium">
              El Plan Basic está pensado para alojamientos turísticos, pequeños comercios, emprendedores y profesionales que desean contar con una página web moderna, funcional y accesible.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Es una solución ideal para presentar tu negocio, mostrar tus productos o servicios y facilitar el contacto con potenciales clientes.
            </p>
            <p className="text-xs sm:text-sm font-semibold text-moonstone pt-1">
              Hosting y publicación incluidos. Sin mantenimiento mensual obligatorio con Wandersites.
            </p>
          </div>

          {/* 1. ¿Qué incluye el Plan Basic? */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-3">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              1. ¿Qué incluye el Plan Basic?
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gunmetal/85">
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Landing page de una sola página, con hasta <strong>3 secciones de contenido</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="size-4 shrink-0 text-moonstone mt-0.5" />
                <span>Diseño moderno y adaptable a celulares, tablets y computadoras (responsive).</span>
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
                <span>Integración de ubicación mediante Google Maps.</span>
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
              No requiere contratar un mantenimiento mensual obligatorio con Wandersites.
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
              <li>Inicio o presentación del negocio.</li>
              <li>Habitaciones, cabañas, productos o servicios.</li>
              <li>Galería de fotografías.</li>
              <li>Información general.</li>
              <li>Ubicación y contacto.</li>
            </ul>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              El Plan Basic incluye hasta 3 secciones, cuya distribución se acordará antes de comenzar el desarrollo. Los botones de WhatsApp, la galería y el mapa podrán incorporarse dentro de las secciones acordadas, según el diseño.
            </p>
            <p className="text-xs text-muted-foreground">
              La cantidad de secciones no implica una cantidad ilimitada de categorías, fichas individuales o contenidos. Las secciones adicionales deberán presupuestarse por separado.
            </p>
          </section>

          {/* 3. Fotografías y contenido */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              3. Fotografías y contenido
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Se podrán incorporar hasta <strong>30 fotografías</strong> proporcionadas por el cliente. Las imágenes deberán contar con una resolución y calidad adecuadas para su publicación.
            </p>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Wandersites realizará, cuando sea necesario, ajustes básicos de tamaño, formato y optimización para favorecer su visualización y carga.
            </p>
            <p className="text-xs font-semibold text-gunmetal pt-1">No se incluye:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-muted-foreground">
              <span>• Producción fotográfica</span>
              <span>• Retoque profesional de imágenes</span>
              <span>• Creación de ilustraciones personalizadas</span>
              <span>• Compra de fotografías o licencias</span>
              <span>• Creación de logotipos</span>
              <span>• Redacción extensa de contenido comercial</span>
            </div>
            <p className="text-xs text-muted-foreground pt-1">
              El cliente deberá proporcionar los textos, fotografías, datos de contacto, descripciones y demás información necesaria para desarrollar la página. También será responsable de contar con los derechos o autorizaciones correspondientes para utilizar dichos materiales.
            </p>
          </section>

          {/* 4. Colores, tipografías e identidad visual */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              4. Colores, tipografías e identidad visual
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Antes de comenzar, el cliente deberá indicar una paleta de colores aproximada o referencias visuales de su preferencia. Si cuenta con logotipo, identidad de marca o manual de estilo, podrá proporcionarlos para integrarlos al diseño.
            </p>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              También podrá solicitar una tipografía específica, siempre que esté disponible en <strong>Google Fonts</strong> y resulte adecuada para el proyecto. Si no dispone de una identidad visual definida, Wandersites podrá proponer una combinación de colores y tipografías acorde al rubro.
            </p>
            <p className="text-xs text-muted-foreground">
              El diseño se desarrollará a partir de las preferencias acordadas inicialmente. Los cambios importantes de identidad visual solicitados después de la aprobación podrán considerarse un rediseño y presupuestarse por separado.
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
              <li><strong>Si ya tiene un dominio:</strong> Wandersites podrá realizar la configuración necesaria para vincularlo con la nueva página, siempre que el cliente proporcione los accesos y permisos correspondientes.</li>
              <li><strong>Si todavía no tiene un dominio:</strong> podrá solicitar asistencia para elegir, registrar y configurar uno nuevo. El alcance y costo de esta gestión se informarán previamente.</li>
            </ul>
            <p className="text-xs text-muted-foreground">
              La compra y renovación del dominio no están incluidas en el precio del Plan Basic. El dominio deberá registrarse a nombre del cliente, quien será responsable de mantenerlo activo y abonar las renovaciones correspondientes. La configuración de registros DNS o servicios externos que requieran trabajos extraordinarios podrá presupuestarse por separado.
            </p>
          </section>

          {/* 6. Hosting y publicación incluidos */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              6. Hosting y publicación incluidos
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              El Plan Basic incluye la configuración inicial del hosting y la publicación de la página web. Siempre que las características del proyecto lo permitan, se utilizarán plataformas con modalidades gratuitas compatibles con el uso comercial, como <strong>Cloudflare Pages</strong>. Esto permite publicar una página web sencilla sin contratar necesariamente un servicio de alojamiento pago.
            </p>
            <p className="text-xs sm:text-sm text-gunmetal/85 font-medium">
              El hosting incluido corresponde a la configuración y publicación inicial en una modalidad compatible con las necesidades del sitio.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              El servicio de alojamiento es proporcionado por una empresa externa, cuyas condiciones, capacidades y precios pueden modificarse. Si en el futuro el sitio necesita recursos superiores, servicios adicionales o una modalidad de hosting paga, el cliente deberá aprobar y asumir esos costos. Wandersites no contratará servicios externos pagos en nombre del cliente sin su autorización previa.
            </p>

            <div className="mt-3 pt-3 border-t border-border/70 space-y-1 text-xs text-muted-foreground">
              <p className="font-semibold text-gunmetal">Límites y disponibilidad</p>
              <p>
                Las plataformas de hosting pueden establecer límites relacionados con almacenamiento, tamaño de archivos, publicaciones, funcionalidades dinámicas y otros recursos técnicos. En determinados servicios, las visitas a archivos estáticos pueden ser ilimitadas, mientras que otras funcionalidades tienen restricciones específicas.
              </p>
              <p>
                Si se superan los límites aplicables, algunos servicios podrían restringirse, interrumpirse temporalmente o requerir una actualización de plan. No se garantiza una cantidad ilimitada de visitas para cualquier tipo de sitio ni la disponibilidad ininterrumpida de los servicios externos. Las condiciones vigentes serán las establecidas por el proveedor correspondiente.
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
              Al finalizar el proyecto y completar el pago, el cliente recibirá los archivos, el código fuente y los accesos correspondientes al sitio desarrollado, conforme al alcance contratado. La web se configurará preferentemente en cuentas propias del cliente.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Si el cliente no dispone de las cuentas necesarias, Wandersites podrá asistirlo durante su creación y configuración inicial. El cliente será responsable de conservar las credenciales y mantener la seguridad de sus cuentas. La entrega del proyecto no implica la propiedad del software, infraestructura o servicios pertenecientes a proveedores externos. Los componentes o recursos de terceros estarán sujetos a sus respectivas licencias.
            </p>
          </section>

          {/* 8. SEO básico */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              8. SEO básico
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              El Plan Basic incluye una configuración inicial destinada a facilitar que los buscadores puedan interpretar el contenido de la página. Según las características técnicas del sitio, podrá comprender:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gunmetal/85">
              <li>Título de la página (SEO title).</li>
              <li>Metadescripción.</li>
              <li>Encabezados organizados jerárquicamente.</li>
              <li>URLs amigables, cuando corresponda.</li>
              <li>Textos alternativos para imágenes relevantes.</li>
              <li>Configuración básica para dispositivos móviles.</li>
              <li>Elementos técnicos que faciliten el rastreo e indexación.</li>
            </ul>
            <p className="text-xs text-muted-foreground pt-1">
              <strong>El SEO básico no garantiza que la página aparezca en los primeros resultados de Google ni que obtenga una cantidad determinada de visitas.</strong> No incluye campañas publicitarias, estrategias avanzadas de posicionamiento, creación periódica de contenido ni seguimiento continuo en Google Search Console.
            </p>
          </section>

          {/* 9. Correcciones incluidas */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              9. Correcciones incluidas
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              El Plan Basic incluye <strong>una ronda de correcciones antes de la aprobación definitiva</strong>. Esta instancia permite solicitar ajustes puntuales sobre textos, fotografías, colores, tamaños y distribución de determinados elementos, y detalles visuales dentro del diseño acordado.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Las correcciones deberán solicitarse de manera conjunta para poder implementarlas en una misma instancia. <strong>La ronda de correcciones no equivale a un rediseño completo de la página.</strong> No incluye cambiar íntegramente la propuesta visual, agregar nuevas secciones, modificar la estructura general aprobada ni incorporar funcionalidades no contempladas. Las modificaciones que excedan el alcance contratado podrán cotizarse por separado.
            </p>
          </section>

          {/* 10. Modificaciones posteriores a la entrega */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-3">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              10. Modificaciones posteriores a la entrega
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              El Plan Basic no incluye un panel de autoadministración de contenidos. Una vez entregada la página web, el cliente podrá solicitar a Wandersites modificaciones puntuales cuando las necesite.
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
                <p className="text-xs text-muted-foreground">Hasta 5 modificaciones puntuales de texto y reemplazo de hasta 10 fotografías existentes, en una misma solicitud.</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              <strong>Otras modificaciones: a cotizar.</strong> Nuevas secciones, cambios de estructura, funcionalidades, rediseños o trabajos especiales. Estas tarifas corresponden a modificaciones de contenido existente y no a la creación de nuevas funcionalidades. Los precios podrán actualizarse y se confirmarán antes de realizar cada trabajo. El cliente no está obligado a contratar actualizaciones periódicas.
            </p>
          </section>

          {/* 11. Mantenimiento y soporte posterior */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              11. Mantenimiento y soporte posterior
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 font-medium">
              El desarrollo se abona una sola vez. No existe obligación de contratar un mantenimiento mensual con Wandersites.
            </p>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              La página podrá permanecer publicada utilizando los servicios de alojamiento contratados, siempre que se mantengan vigentes sus condiciones de funcionamiento. Wandersites no realiza monitoreo permanente ni mantenimiento preventivo sobre sitios que no cuenten con un servicio de soporte contratado.
            </p>
            <p className="text-xs text-muted-foreground">
              Si el cliente necesita asistencia técnica, podrá solicitarla y recibir un presupuesto cuando corresponda. Esto no limita las obligaciones de garantía aplicables al trabajo entregado. Los costos de dominio, hosting pago o herramientas externas no están incluidos en el mantenimiento de Wandersites y corresponden a sus respectivos proveedores.
            </p>
          </section>

          {/* 12. Garantía técnica */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              12. Garantía técnica
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Wandersites ofrece <strong>30 días de garantía técnica</strong> desde la entrega para corregir errores atribuibles al desarrollo original, sin costo adicional.
            </p>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Esta garantía comprende fallas respecto de las funcionalidades expresamente incluidas en el servicio contratado. No comprende nuevas funcionalidades, actualizaciones de contenido, rediseños ni modificaciones solicitadas posteriormente.
            </p>
            <p className="text-xs text-muted-foreground">
              Las incidencias ocasionadas por alteraciones realizadas por terceros o por servicios externos se evaluarán para determinar su origen y la solución correspondiente. Esta garantía comercial no sustituye ni limita los derechos que pudieran corresponder al cliente conforme a la legislación aplicable.
            </p>
          </section>

          {/* 13. Forma de pago */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              13. Forma de pago
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Para iniciar el desarrollo se solicita una <strong>seña del 50%</strong> del presupuesto total. El 50% restante deberá abonarse al finalizar y aprobar el proyecto, antes de su publicación definitiva y entrega de accesos.
            </p>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              El inicio del trabajo estará sujeto a la confirmación del pago inicial y a la recepción de los materiales necesarios.
            </p>
            <p className="text-xs text-muted-foreground">
              Los servicios adicionales deberán acordarse y presupuestarse previamente. Los costos de dominios, suscripciones y servicios externos no incluidos en el presupuesto serán abonados por el cliente.
            </p>
          </section>

          {/* 14. Cancelaciones y suspensión del proyecto */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              14. Cancelaciones y suspensión del proyecto
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Si el cliente decide cancelar el servicio antes de finalizarlo, se evaluarán los trabajos efectivamente realizados, los gastos autorizados y las condiciones de contratación aplicables. Las devoluciones o importes pendientes se determinarán conforme a lo acordado y a la normativa vigente. No se establece una pérdida automática de la seña en todos los supuestos.
            </p>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Si el cliente demora la entrega de información, materiales, accesos o aprobaciones, el proyecto podrá quedar temporalmente suspendido. Cuando se retome el trabajo, se acordará un nuevo cronograma según la disponibilidad.
            </p>
            <p className="text-xs text-muted-foreground">
              Las condiciones particulares de cancelación se informarán antes de confirmar el servicio, respetando los derechos que correspondan al cliente.
            </p>
          </section>

          {/* 15. Plazos de entrega */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              15. Plazos de entrega
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              El plazo estimado de desarrollo se acordará previamente y dependerá de las características del proyecto. El plazo comenzará a contarse cuando se hayan cumplido las condiciones de contratación y el cliente haya entregado la información necesaria.
            </p>
            <p className="text-xs text-muted-foreground">
              Las demoras en la entrega de materiales, revisiones, aprobaciones o configuración de servicios externos podrán modificar la fecha prevista. Las solicitudes adicionales realizadas durante el desarrollo también podrán requerir una revisión del cronograma.
            </p>
          </section>

          {/* 16. Funcionalidades no incluidas */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              16. Funcionalidades no incluidas
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              El Plan Basic comprende exclusivamente las funcionalidades especificadas en su descripción y presupuesto. No incluye:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-muted-foreground pt-1">
              <span>• Formularios de contacto con envío automático</span>
              <span>• Motores de reservas</span>
              <span>• Sistemas de pagos online</span>
              <span>• Calendarios iCal</span>
              <span>• Web Check-in Online</span>
              <span>• Panel de autoadministración</span>
              <span>• Sistemas de turnos</span>
              <span>• Tiendas online</span>
              <span>• Gestión de reservas</span>
              <span>• Mantenimiento mensual</span>
              <span>• Gestión de redes sociales</span>
              <span>• Campañas publicitarias</span>
              <span className="sm:col-span-2">• SEO avanzado</span>
            </div>
            <p className="text-xs text-muted-foreground pt-1">
              Estas funcionalidades podrán contratarse mediante planes superiores o presupuestos personalizados, según su disponibilidad y complejidad.
            </p>
          </section>

          {/* 17. Servicios de terceros y limitaciones técnicas */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              17. Servicios de terceros y limitaciones técnicas
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Para su funcionamiento, la página puede utilizar plataformas o servicios externos como <strong>GitHub, Cloudflare, Google Maps, WhatsApp y proveedores de dominios</strong>. Estos servicios poseen condiciones de uso, políticas, restricciones técnicas y esquemas de precios propios.
            </p>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Wandersites no controla sus cambios comerciales, interrupciones o modificaciones de funcionamiento. Si una modificación de terceros afecta la página, se evaluará la situación y, cuando corresponda, se presupuestará la intervención necesaria.
            </p>
            <p className="text-xs text-muted-foreground">
              No se garantiza el funcionamiento ininterrumpido de servicios externos ni su gratuidad permanente.
            </p>
          </section>

          {/* 18. Responsabilidades del cliente */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              18. Responsabilidades del cliente
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85">
              El cliente será responsable de:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gunmetal/85">
              <li>Proporcionar información verdadera y actualizada.</li>
              <li>Entregar los materiales necesarios para el desarrollo.</li>
              <li>Contar con autorización para utilizar fotografías, textos, logotipos y otros contenidos.</li>
              <li>Mantener vigentes sus dominios y servicios contratados.</li>
              <li>Conservar las credenciales de acceso.</li>
              <li>Informar oportunamente errores o inconvenientes.</li>
              <li>Revisar y aprobar el contenido antes de la publicación.</li>
              <li>Proporcionar las políticas legales, comerciales y de privacidad que correspondan a su actividad.</li>
            </ul>
            <p className="text-xs text-muted-foreground pt-1">
              La contratación del servicio de diseño web no incluye asesoramiento legal, contable o fiscal.
            </p>
          </section>

          {/* 19. Alcance del servicio y condiciones finales */}
          <section className="rounded-2xl border border-border/80 bg-slate-50/70 p-5 sm:p-6 space-y-2.5">
            <h3 className="font-heading text-base sm:text-lg font-bold text-gunmetal">
              19. Alcance del servicio y condiciones finales
            </h3>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Antes de comenzar, Wandersites enviará un presupuesto con el detalle del servicio contratado. El presupuesto indicará las características del proyecto, precio, forma de pago, funcionalidades incluidas y condiciones particulares.
            </p>
            <p className="text-xs sm:text-sm text-gunmetal/85 leading-relaxed">
              Los trabajos no contemplados expresamente deberán presupuestarse y aprobarse por separado. Cualquier modificación del alcance inicialmente acordado podrá requerir ajustes de precio y plazos.
            </p>
          </section>

          {/* Cierre institucional */}
          <div className="rounded-2xl bg-gunmetal text-white p-5 sm:p-6 text-center space-y-2">
            <p className="font-heading text-base sm:text-lg font-bold text-white">
              Wandersites — Tu web es tuya. Sin mensualidades obligatorias.
            </p>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl mx-auto">
              Creamos tu página web, la publicamos y te entregamos los accesos correspondientes. Si necesitás actualizarla en el futuro, podés solicitar modificaciones puntuales cuando quieras.
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
            href={basicWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-saffron px-6 py-2 text-xs sm:text-sm font-bold text-white hover:brightness-105 active:scale-95 transition-all cursor-pointer shadow-sm"
          >
            <MessageCircle className="size-4" /> Consultar por Plan Basic
          </a>
        </div>
      </div>
    </div>
  );
}

export default BasicPlanModal;
