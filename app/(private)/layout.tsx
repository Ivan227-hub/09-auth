// app/(private routes)/layout.tsx
import React, { ReactNode } from "react";

interface PrivateLayoutProps {
  children: ReactNode;
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <div>
      {/* Тут хедер, сайдбар або інші спільні елементи */}
      {children}
    </div>
  );
}
