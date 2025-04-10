"use client";
import React from "react";
import Image from "next/image";
import "@fontsource/comic-neue";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss";

/**
 * Main page component for the Fucsiateen website.
 * This component displays various sections including a header with a background image,
 * a product section showing product images, an image section for a large display image,
 * and a footer with contact information.
 */

export default function Page() {
  const router = useRouter();
  return (
    <main className={styles.container}>
      {/*
        HEADER SECTION:
        Contains a background image that fills the header container and a heading on top.
      */}
      <header className={styles.header}>
        <div className={styles.backgroundImage}>
          <Image
            src="/img/foto1.png"
            alt="Background Image"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <h1>Fucsiateen</h1>

        {/* 
          CALL-OUT SECTION:
          This container displays the additional text ("Prendas básicas...").
          The styling for its border and background color is handled in page.module.scss.
        */}
        <div className={styles.callout}>
          <p>Prendas básicas en algodón ideal para niños con piel sensible</p>
        </div>
      </header>

      {/*
        PRODUCT SECTION:
        Displays a list of product images with labels.
      */}
      <div className={styles.callout}>
        <h2>Líneas de productos</h2>
      </div>
      <section className={styles.productSection}>
        <div className={styles.productGrid}>
          {/* Card 1 */}
          <div className={styles.productCard}>
            <Image
              src="/img/product1.png"
              alt="Ropa interior niños"
              width={200}
              height={200}
              className={styles.productImage}
            />
            <h3>Ropa interior niños</h3>
            <p>
              Bodies, camisas, conjuntos para una máxima comodidad y libertad de
              movimiento.
            </p>
            <button
              className={styles.moreBtn}
              onClick={() => router.push("/catalog/nino")}
            >
              Ver más
            </button>
          </div>

          {/* Card 2 */}
          <div className={styles.productCard}>
            <Image
              src="/img/product2.jpg"
              alt="Pijama niños"
              width={200}
              height={200}
              className={styles.productImage}
            />
            <h3>Pijama niños</h3>
            <p>
              Pijamas suaves y transpirables para garantizar dulces sueños y un
              buen descanso.
            </p>
            <button
              className={styles.moreBtn}
              onClick={() => router.push("/catalog/pijama")}
            >
              Ver más
            </button>
          </div>

          {/* Card 3 */}
          <div className={styles.productCard}>
            <Image
              src="/img/product3.png"
              alt="Ropa interior niñas"
              width={200}
              height={200}
              className={styles.productImage}
            />
            <h3>Ropa interior niñas</h3>
            <p>
              Conjuntos cómodos y coloridos diseñados para niñas, ideales para
              el día a día.
            </p>
            <button
              className={styles.moreBtn}
              onClick={() => router.push("/catalog/nina")}
            >
              Ver más
            </button>
          </div>

          {/* Card 4 */}
          <div className={styles.productCard}>
            <Image
              src="/img/vestido.jpg"
              alt="Vestidos de baño"
              width={200}
              height={200}
              className={styles.productImage}
            />
            <h3>Vestidos de baño</h3>
            <p>
              Ropa de baño perfecta para disfrutar de la playa o la piscina con
              total libertad.
            </p>
            <button
              className={styles.moreBtn}
              onClick={() => router.push("/catalog/trajes")}
            >
              Ver más
            </button>
          </div>
        </div>
      </section>

      {/* ... Other sections above ... */}

      {/*
        CLOUD SECTION:
        - Pink cloud shape at the top
        - Centered content in the middle (text + character image)
        - Pink cloud shape at the bottom (mirrored)
      */}
      <section className={styles.cloudSection}>
        {/* TOP CLOUD SHAPE */}
        <div className={styles.cloudShapeTop}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 283.5 27.8"
            preserveAspectRatio="xMidYMax slice"
          >
            <path
              d="M0 0v6.7c1.9-.8 4.7-1.4 8.5-1 9.5 1.1 11.1 6 11.1 6s2.1-.7 4.3-.2c2.1.5 2.8 2.6 2.8 2.6s.2-.5 1.4-.7c1.2-.2 1.7.2 1.7.2s0-2.1 1.9-2.8c1.9-.7 3.6.7 3.6.7s.7-2.9 3.1-4.1 4.7 0 4.7 0 1.2-.5 2.4 0 1.7 1.4 1.7 1.4h1.4c.7 0 1.2.7 1.2.7s.8-1.8 4-2.2c3.5-.4 5.3 2.4 6.2 4.4.4-.4 1-.7 1.8-.9 2.8-.7 4 .7 4 .7s1.7-5 11.1-6c9.5-1.1 12.3 3.9 12.3 3.9s1.2-4.8 5.7-5.7c4.5-.9 6.8 1.8 6.8 1.8s.6-.6 1.5-.9c.9-.2 1.9-.2 1.9-.2s5.2-6.4 12.6-3.3c7.3 3.1 4.7 9 4.7 9s1.9-.9 4 0 2.8 2.4 2.8 2.4 1.9-1.2 4.5-1.2 4.3 1.2 4.3 1.2.2-1 1.4-1.7 2.1-.7 2.1-.7-.5-3.1 2.1-5.5 5.7-1.4 5.7-1.4 1.5-2.3 4.2-1.1c2.7 1.2 1.7 5.2 1.7 5.2s.3-.1 1.3.5c.5.4.8.8.9 1.1.5-1.4 2.4-5.8 8.4-4 7.1 2.1 3.5 8.9 3.5 8.9s.8-.4 2 0 1.1 1.1 1.1 1.1 1.1-1.1 2.3-1.1 2.1.5 2.1.5 1.9-3.6 6.2-1.2 1.9 6.4 1.9 6.4 2.6-2.4 7.4 0c3.4 1.7 3.9 4.9 3.9 4.9s3.3-6.9 10.4-7.9 11.5 2.6 11.5 2.6.8 0 1.2.2c.4.2.9.9.9.9s4.4-3.1 8.3.2c1.9 1.7 1.5 5 1.5 5s.3-1.1 1.6-1.4c1.3-.3 2.3.2 2.3.2s-.1-1.2.5-1.9 1.9-.9 1.9-.9-4.7-9.3 4.4-13.4c5.6-2.5 9.2.9 9.2.9s5-6.2 15.9-6.2 16.1 8.1 16.1 8.1.7-.2 1.6-.4V0H0z"
              fill="#ffddee"
            />
          </svg>
        </div>

        {/* CONTENT (NO WHITE BACKGROUND) */}
        <div className={styles.cloudContent}>
          <h2 className={styles.cloudTitle}>Somos parte de tí...</h2>
          <div className={styles.cloudImageWrapper}>
            <Image
              src="/img/img5.png"
              alt="Muñeco con media luna"
              width={300}
              height={300}
              className={styles.cloudImage}
            />
          </div>
        </div>

        {/* BOTTOM CLOUD SHAPE (FLIPPED VERTICALLY) */}
        <div className={styles.cloudShapeBottom}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 283.5 27.8"
            preserveAspectRatio="xMidYMax slice"
          >
            <path
              d="M0 0v6.7c1.9-.8 4.7-1.4 8.5-1 9.5 1.1 11.1 6 11.1 6s2.1-.7 4.3-.2c2.1.5 2.8 2.6 2.8 2.6s.2-.5 1.4-.7c1.2-.2 1.7.2 1.7.2s0-2.1 1.9-2.8c1.9-.7 3.6.7 3.6.7s.7-2.9 3.1-4.1 4.7 0 4.7 0 1.2-.5 2.4 0 1.7 1.4 1.7 1.4h1.4c.7 0 1.2.7 1.2.7s.8-1.8 4-2.2c3.5-.4 5.3 2.4 6.2 4.4.4-.4 1-.7 1.8-.9 2.8-.7 4 .7 4 .7s1.7-5 11.1-6c9.5-1.1 12.3 3.9 12.3 3.9s1.2-4.8 5.7-5.7c4.5-.9 6.8 1.8 6.8 1.8s.6-.6 1.5-.9c.9-.2 1.9-.2 1.9-.2s5.2-6.4 12.6-3.3c7.3 3.1 4.7 9 4.7 9s1.9-.9 4 0 2.8 2.4 2.8 2.4 1.9-1.2 4.5-1.2 4.3 1.2 4.3 1.2.2-1 1.4-1.7 2.1-.7 2.1-.7-.5-3.1 2.1-5.5 5.7-1.4 5.7-1.4 1.5-2.3 4.2-1.1c2.7 1.2 1.7 5.2 1.7 5.2s.3-.1 1.3.5c.5.4.8.8.9 1.1.5-1.4 2.4-5.8 8.4-4 7.1 2.1 3.5 8.9 3.5 8.9s.8-.4 2 0 1.1 1.1 1.1 1.1 1.1-1.1 2.3-1.1 2.1.5 2.1.5 1.9-3.6 6.2-1.2 1.9 6.4 1.9 6.4 2.6-2.4 7.4 0c3.4 1.7 3.9 4.9 3.9 4.9s3.3-6.9 10.4-7.9 11.5 2.6 11.5 2.6.8 0 1.2.2c.4.2.9.9.9.9s4.4-3.1 8.3.2c1.9 1.7 1.5 5 1.5 5s.3-1.1 1.6-1.4c1.3-.3 2.3.2 2.3.2s-.1-1.2.5-1.9 1.9-.9 1.9-.9-4.7-9.3 4.4-13.4c5.6-2.5 9.2.9 9.2.9s5-6.2 15.9-6.2 16.1 8.1 16.1 8.1.7-.2 1.6-.4V0H0z"
              fill="#ffddee"
              transform="scale(1, -1) translate(0, -27.8)"
              /* 
        This flips it vertically ("scale(1, -1)") 
        and shifts it up by the shape's height 
        ("translate(0, -27.8)") to align correctly.
      */
            />
          </svg>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className={styles.mapSection}>
        <h2>Ubicación</h2>
        <div className={styles.mapContainer}>
          <iframe
            title="Mapa de Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.010123456!2d-74.0650000000000!3d4.654000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8b1234567%3A0xabcdef1234567890!2sCra.%2081b%20%2365a-42%20Of.%20201%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1684351964675!5m2!1ses-419!2sco"
            frameBorder="0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      {/*
        FOOTER SECTION:
        Displays contact information along with a small image icon,
        and includes a placeholder for GIFs.
      */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          {/* Left side: Icon */}
          <div className={styles.footerIconWrapper}>
            <Image
              src="/img/img6.png"
              alt="Contact Icon"
              width={200}
              height={70}
              className={styles.footerIcon}
            />
          </div>

          {/* Right side: Contact Info */}
          <div className={styles.contactInfo}>
            <p>Cel: +57 3000000000</p>
            <p>Correo: ventaspfc@fucsiateen.com.co</p>
            <p>
              Dirección: Cra. 81b #65a-42 of 201 San Marcos, Bogotá - Colombia
            </p>
          </div>
        </div>

        {/* GIFs Section (Butterflies) */}
        <div className={styles.gifsSection}>
          {/* Add as many butterflies as you like */}
          <Image
            src="/img/butterfly.gif"
            alt="Butterfly GIF"
            width={60}
            height={60}
            className={styles.butterflyGif}
          />
          <Image
            src="/img/butterfly.gif"
            alt="Butterfly GIF"
            width={60}
            height={60}
            className={styles.butterflyGif}
          />
          <Image
            src="/img/butterfly.gif"
            alt="Butterfly GIF"
            width={60}
            height={60}
            className={styles.butterflyGif}
          />
        </div>
      </footer>
    </main>
  );
}
