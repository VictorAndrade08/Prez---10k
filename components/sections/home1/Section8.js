'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: {
        delay: 10000
    }
}

export default function Section8() {
    return (
        <>
            <section className="section-box wow animate__animated animate__fadeIn box-discover">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-30">
                            <div className="box-image-neutral-1000">
                                <img src="/assets/imgs/page/homepage1/img-discover.png" alt="Ruta de las Mandarinas" />
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <h2>Vive la emoción de correr la 8K Ruta de las Mandarinas</h2>
                            <p className="text-lg neutral-500">Una carrera única en Patate, Ecuador, rodeada de paisajes naturales,
                                aroma a cítricos y el calor de su gente. Corre, vibra y haz historia en esta gran experiencia deportiva.</p>
                            <div className="box-buttons-feature-4">
                                <Link className="btn btn-brand-4-medium mr-20" href="#">Inscribirme
                                    <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill="true" />
                                    </svg>
                                </Link>
                                <Link className="btn btn-learmore-2" href="#"><span>
                                    <svg width={39} height={38} viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" width={38} height={38} rx={19} fill="#191919" />
                                        <g clipPath="url(#clip0_1_376)">
                                            <path d="M24.1537 16.8139L15.218 25.7497L13.75 24.2817L22.6847 15.3459H14.81V13.2695H26.2301V24.6897H24.1537V16.8139Z" fill="#C5FF55" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_376">
                                                <rect width={13} height={13} fill="white" transform="translate(13.5 13)" />
                                            </clipPath>
                                        </defs>
                                    </svg></span>Más información
                                </Link>
                            </div>

                            <div className="box-reviews-home5">
                                <div className="box-swiper">
                                    <div className="swiper-container swiper-group-1">
                                        <Swiper {...swiperOptions}>
                                            <SwiperSlide>
                                                <div className="item-review-discover">
                                                    <p className="text-lg">Participar en la 8K Ruta de las Mandarinas fue increíble. La ruta,
                                                        el ambiente, los paisajes de Patate… ¡todo fue perfecto! Recomendada al 100%.</p>
                                                    <div className="box-author-review">
                                                        <div className="box-author"><Link href="#"><img src="/assets/imgs/page/homepage1/author.png" alt="Corredor" /></Link>
                                                            <div className="author-info"><Link href="#"><span className="author-name">Carlos Andrade</span></Link><span className="text-sm color-600 department">Quito Runners</span>
                                                            </div>
                                                        </div>
                                                        <div className="author-brand"><Link href="#"><img src="/assets/imgs/page/homepage1/mint.png" alt="Marca" /></Link></div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="item-review-discover">
                                                    <p className="text-lg">Una carrera espectacular. Me sentí segura en todo momento,
                                                        buena hidratación, organización de 10 y un cierre lleno de alegría.
                                                        ¡Volveré el próximo año sin duda!</p>
                                                    <div className="box-author-review">
                                                        <div className="box-author"><Link href="#"><img src="/assets/imgs/page/homepage1/author2.png" alt="Corredora" /></Link>
                                                            <div className="author-info"><Link href="#"><span className="author-name">María Fernanda</span></Link><span className="text-sm color-600 department">Ambato Corre</span>
                                                            </div>
                                                        </div>
                                                        <div className="author-brand"><Link href="#"><img src="/assets/imgs/page/homepage1/logo6.png" alt="Marca" /></Link></div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
