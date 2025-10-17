import Layout from "@/components/layout/Layout";
import HeroRuta from "@/components/ruta/HeroRuta";
import RutaDetalle from "@/components/ruta/RutaDetalle";

export default function RutaPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} logoWhite>
      <HeroRuta />
      <RutaDetalle />
    </Layout>
  );
}
