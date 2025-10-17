import Layout from '@/components/layout/Layout';
import FromHome from '@/components/sections/home1/FormHome';

// opcional si quieres asegurar build estático
export const dynamic = 'force-static';

export const metadata = {
  title: 'Inscripción | 8K Ruta de las Mandarinas',
  description: 'Formulario oficial de inscripción para la 8K Ruta de las Mandarinas.',
  alternates: { canonical: 'https://8krutadelasmandarinas.com/inscripcion' },
};

export default function InscripcionPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} logoWhite>
      <div style={{ paddingTop: '50px' }}>
        <FromHome />
      </div>
    </Layout>
  );
}
