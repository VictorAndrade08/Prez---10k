import Layout from "@/components/layout/Layout";
import PromoForm from "@/components/promo/PromoForm";

export default function Home() {
  return (
    <Layout headerStyle={1} footerStyle={1} logoWhite>
      <PromoForm />
    </Layout>
  );
}
