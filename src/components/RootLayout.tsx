import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/src/components/ui/sonner";
import { ErrorBoundary } from "@/src/components/ErrorBoundary";

export function RootLayout() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background text-foreground antialiased font-sans">
        <Toaster position="top-right" richColors />
        <Outlet />
      </div>
    </ErrorBoundary>
  );
}

export default RootLayout;
