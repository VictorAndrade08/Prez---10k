import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/informacion/Hero";
import SectionCards from "@/components/sections/informacion/SectionCards";
import RegistrationPreventa from "@/components/sections/informacion/RegistrationPreventa";
import CategoriasPreventa from "@/components/sections/informacion/CategoriasPreventa";
import KitOficial from "@/components/sections/informacion/KitOficial";
import Ruta from "@/components/sections/informacion/Ruta";
import Beneficios from "@/components/sections/informacion/Beneficios";
import Faq from "@/components/sections/informacion/Faq";
import PremiosTabs from "@/components/sections/informacion/PremiosTabs";

export const dynamic = "force-static";

export const metadata = {
  title: "Información | 8K Ruta de las Mandarinas",
  description: "Detalles de inscripción, categorías, kit oficial, ruta y beneficios de la 8K Ruta de las Mandarinas.",
  alternates: { canonical: "https://8krutadelasmandarinas.com/informacion" },
};

export default function InformacionPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} logoWhite>
      <Hero />
      <SectionCards />
      <RegistrationPreventa />
      <CategoriasPreventa />
      <PremiosTabs />
      <KitOficial />
      <Ruta />
      <Beneficios />
      <Faq />
    </Layout>
  );
}
