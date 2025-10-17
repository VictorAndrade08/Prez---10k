import Layout from "@/components/layout/Layout";
import VerificarInscripcion from "@/components/verificar/VerificarInscripcion";

export default function Home() {
  return (
    <Layout headerStyle={1} footerStyle={1} logoWhite>
      <VerificarInscripcion />
    </Layout>
  );
}
