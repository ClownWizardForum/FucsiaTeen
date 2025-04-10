"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/catalog/catalog.module.scss";

export default function PijamaCatalog() {
  const router = useRouter();

  return (
    <main className={styles.catalogContainer}>
      <h1>Catálogo Pijama 2025</h1>
      <div className={styles.iframeContainer}>
        <iframe
          src="/pdf/CATALOGO-PIJAMA2025.pdf"
          title="Catálogo Pijama 2025"
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
