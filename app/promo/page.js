import Layout from "@/components/layout/Layout";
import PromoCarrera from "@/components/promo/PromoCarrera";

export default function Home() {
  return (
    <Layout headerStyle={1} footerStyle={1} logoWhite>
      <PromoCarrera />
    </Layout>
  );
}
