import Layout from "@/components/layout/Layout";
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
                {/* 🔽 Envolver el formulario con un ID para scroll */}
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

/*. <Section12 /> testimonio */
/*. <Section13 />. blog */
