'use client'
import Marquee from 'react-fast-marquee'

export default function LogoTicker() {
    return (
        <>
                <Marquee
                    // style={{ width: "auto" }}
                    pauseOnHover={true}
                    direction="left" className="carouselTicker__list list-logos">
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/logo1.png" alt="Nivia" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/logo2.png" alt="Nivia" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/logo3.png" alt="Nivia" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/logo4.png" alt="Nivia" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/logo5.png" alt="Nivia" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/logo6.png" alt="Nivia" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/logo7.png" alt="Nivia" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/logo8.png" alt="Nivia" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/logo9.png" alt="Nivia" /></div>
                    </li>
                    <li className="carouselTicker__item">
                        <div className="item-logo"><img src="/assets/imgs/page/homepage3/logo1.png" alt="Nivia" /></div>
                    </li>
                </Marquee>
        </>
    )
}
