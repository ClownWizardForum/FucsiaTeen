"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/catalog/catalog.module.scss";

export default function TrajesCatalog() {
  const router = useRouter();

  return (
    <main className={styles.catalogContainer}>
      <h1>Catálogo Trajes de Baño 2024</h1>
      <div className={styles.iframeContainer}>
        <iframe
          src="/pdf/CATALOGO-TRAJES-BANO-2024.pdf"
          title="Catálogo Trajes de Baño 2024"
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
