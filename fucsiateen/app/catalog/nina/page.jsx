"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/catalog/catalog.module.scss";

export default function NinaCatalog() {
  const router = useRouter();

  return (
    <main className={styles.catalogContainer}>
      <h1>Catálogo Niña 2025</h1>
      <div className={styles.iframeContainer}>
        <iframe
          src="/pdf/CATALOGO_NIÑA2025.pdf"
          title="Catálogo Niña 2025"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <button className={styles.backButton} onClick={() => router.back()}>
        Volver
      </button>
    </main>
  );
}
