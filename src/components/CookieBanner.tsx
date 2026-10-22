import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import contentData from "@/src/content.json";

export function CookieBanner({
  onOpenPrivacy,
}: {
  onOpenPrivacy?: () => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("wandersites_cookie_consent");
      if (!consent) {
        setVisible(true);
      } else if (consent === "accepted") {
        initAnalyticsIfPresent();
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("wandersites_cookie_consent", "accepted");
    } catch {
      // Ignorar fallo de almacenamiento
    }
    setVisible(false);
    initAnalyticsIfPresent();
  };

  const initAnalyticsIfPresent = () => {
    // Gancho preparado para analítica futura
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Aviso de cookies"
      className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-4 animate-in fade-in slide-in-from-bottom-4 duration-300 pointer-events-none"
    >
      <div className="mx-auto max-w-4xl rounded-2xl bg-gunmetal/95 text-white p-4 sm:p-5 shadow-2xl border border-white/15 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pointer-events-auto">
        <div className="flex items-start gap-3">
          <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/10 text-saffron mt-0.5">
            <Cookie className="size-5" />
          </div>
          <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
            {contentData.cookieBanner.mensaje}{" "}
            {onOpenPrivacy ? (
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="text-saffron hover:underline font-semibold inline-block cursor-pointer bg-transparent border-0 p-0"
              >
                {contentData.cookieBanner.enlaceTexto}
              </button>
            ) : (
              <Link
                to="/privacidad"
                className="text-saffron hover:underline font-semibold inline-block"
              >
                {contentData.cookieBanner.enlaceTexto}
              </Link>
            )}
            .
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-full bg-saffron px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-md hover:brightness-105 transition-all active:scale-95 cursor-pointer"
          >
            {contentData.cookieBanner.boton}
          </button>
        </div>
      </div>
    </aside>
  );
}

export default CookieBanner;
