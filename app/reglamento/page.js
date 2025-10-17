import Layout from '@/components/layout/Layout';
import ReglamentoContent from '@/components/reglamento/ReglamentoContent';


// opcional para build estático
export const dynamic = 'force-static';

export const metadata = {
  title: 'Reglamento Oficial | 8K Ruta de las Mandarinas',
  description: 'Consulta el reglamento oficial de la carrera 8K Ruta de las Mandarinas en Patate, Tungurahua.',
  alternates: { canonical: 'https://8krutadelasmandarinas.com/reglamento' },
};

export default function ReglamentoPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} logoWhite>
      <div style={{ paddingTop: '40px', paddingBottom: '40px', maxWidth: '900px', margin: '0 auto' }}>
        <ReglamentoContent />
      </div>
    </Layout>
  );
}
