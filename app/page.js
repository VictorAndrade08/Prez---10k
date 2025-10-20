// app/inscripcion/page.js (o donde tengas esta ruta)
import Layout from '@/components/layout/Layout';
import FromHome from '@/components/sections/home1/FormHome';

// Opcional: asegurar build estático
export const dynamic = 'force-static';

export const metadata = {
  title: 'Inscripción | 10K Independencia de Ambato',
  description:
    'Formulario oficial de inscripción para la 10K Independencia de Ambato. Completa tus datos y confirma por WhatsApp.',
  alternates: {
    canonical: 'https://10kindependenciadeambato.com/inscripcion',
  },
  openGraph: {
    title: 'Inscripción | 10K Independencia de Ambato',
    description:
      'Inscríbete a la 10K Independencia de Ambato y confirma tu participación en minutos.',
    url: 'https://10kindependenciadeambato.com/inscripcion',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inscripción | 10K Independencia de Ambato',
    description:
      'Inscríbete a la 10K Independencia de Ambato y confirma tu participación en minutos.',
  },
};

export default function InscripcionPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} logoWhite>
      {/* Aplica tu fondo con .page-inscripcion en el CSS */}
      <main className="page-inscripcion">
        <FromHome />
      </main>
    </Layout>
  );
}


/*
==========================================
🏠 Página principal (Home.jsx) — COMENTADA
==========================================

// Importa el layout principal del sitio
import Layout from "@/components/layout/Layout";

// Importa las secciones de la página de inicio
import Section1 from "@/components/sections/home1/Section1";
import Section10 from "@/components/sections/home1/Section10";
import Section11 from "@/components/sections/home1/Section11";
import Section12 from "@/components/sections/home1/Section12";
import Section13 from "@/components/sections/home1/Section13";
import Section2 from "@/components/sections/home1/Section2";
import Section3 from "@/components/sections/home1/Section3";
import Section4 from "@/components/sections/home1/Section4";
import Section5 from "@/components/sections/home1/Section5";
import Section6 from "@/components/sections/home1/Section6";
import Section7 from "@/components/sections/home1/Section7";
import VideoF1 from "@/components/sections/home1/VideoF1";
import Section9 from "@/components/sections/home1/Section9";
import CountdownSection from "@/components/sections/home1/CountdownSection";
import MandarinaOptions from '@/components/sections/home1/MandarinaOptions';
import FromHome from '@/components/sections/home1/FormHome';
import RaceStatsBar from '@/components/sections/home1/RaceStatsBar';
import PremiosTabs from "@/components/sections/informacion/PremiosTabs";

// Componente principal de la página Home
export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} logoWhite>
                <Section1 />   
                <RaceStatsBar />
                <CountdownSection />
                <MandarinaOptions />
                <Section2 />
                <VideoF1 />
                // 🔽 Envolver el formulario con un ID para scroll
                <div id="formulario">
                    <FromHome />
                </div>
                <Section4 />
                <PremiosTabs/>
                <Section5 />
                <Section7 />
                <Section10 />
                <Section9 />
                <Section3 />
                <Section6 />
                <Section11 />
            </Layout>
        </>
    );
}

// Secciones adicionales comentadas
// <Section12 /> // testimonio
// <Section13 /> // blog
*/
