// app/verificar/page.js  (o pages/verificar.js)
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import VerificarInscripcion from "@/components/verificar/VerificarInscripcion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Verificar Inscripción – 10K Independencia de Ambato 2025</title>
        <meta
          name="description"
          content="Consulta tu registro oficial en la 10K Independencia de Ambato 2025. Ingresa tu número de cédula para verificar tu inscripción."
        />
        <meta
          name="keywords"
          content="10K Ambato, verificar inscripción, carrera Ambato, running Ecuador, independencia de Ambato"
        />
        <meta
          property="og:title"
          content="Verificar Inscripción – 10K Independencia de Ambato 2025"
        />
        <meta
          property="og:description"
          content="Verifica tu inscripción oficial para la 10K Independencia de Ambato. Consulta tu estado, categoría y datos del corredor."
        />
        <meta property="og:image" content="/assets/imgs/verificar.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_EC" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Verificar Inscripción – 10K Independencia de Ambato 2025"
        />
        <meta
          name="twitter:description"
          content="Verifica tu inscripción y consulta tus datos oficiales de la 10K Ambato."
        />
        <meta name="twitter:image" content="/assets/imgs/verificar.webp" />
      </Head>

      <Layout headerStyle={1} footerStyle={1} logoWhite>
        <main role="main" aria-label="Verificación de inscripción">
          <VerificarInscripcion />
        </main>
      </Layout>
    </>
  );
}
