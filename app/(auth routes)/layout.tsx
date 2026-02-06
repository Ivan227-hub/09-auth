// app/(auth routes)/layout.tsx
import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      {/* Можеш додати спільний хедер/стилі для сторінок auth */}
      {children}
    </div>
  );
}
