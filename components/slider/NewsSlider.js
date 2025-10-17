'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next-3",
        prevEl: ".swiper-button-prev-3"
    },
    autoplay: {
        delay: 10000
    },
    breakpoints: {
        1199: {
            slidesPerView: 3
        },
        800: {
            slidesPerView: 2
        },
        400: {
            slidesPerView: 1
        },
        250: {
            slidesPerView: 1
        }
    }
}

export default function NewsSlider() {
    return (
        <>
            <div className="swiper-container swiper-group-3">
                <Swiper {...swiperOptions}>
                    <SwiperSlide>
                        <div className="card-news">
                            <div className="card-image"><Link href="#beneficios-correr"><img src="/assets/imgs/page/homepage1/img-news.png" alt="Beneficios" /></Link></div>
                            <div className="card-info"><Link className="heading-4" href="#beneficios-correr">¿Por qué correr en la Ruta de las Mandarinas?</Link>
                                <p className="text-md neutral-700 mt-15 mb-35">Descubre los beneficios físicos, mentales y sociales de participar en una carrera diferente, rodeado de naturaleza y aromas cítricos.</p>
                                <Link className="btn btn-learmore-2" href="#beneficios-correr"><span>
                                    <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_24_999)">
                                            <path d="M10.6557 3.81393L1.71996 12.7497L0.251953 11.2817L9.18664 2.34592H1.31195V0.269531H12.7321V11.6897H10.6557V3.81393Z" fill="#191919" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_24_999">
                                                <rect width={13} height={13} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>Conoce más
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-news">
                            <div className="card-image"><Link href="#guia-preparacion"><img src="/assets/imgs/page/homepage1/img-news2.png" alt="Guía" /></Link></div>
                            <div className="card-info"><Link className="heading-4" href="#guia-preparacion">Guía práctica para prepararte para la 8K</Link>
                                <p className="text-md neutral-700 mt-15 mb-35">¿Es tu primera carrera? Aquí tienes recomendaciones para entrenar, alimentarte y disfrutar el recorrido sin preocupaciones.</p>
                                <Link className="btn btn-learmore-2" href="#guia-preparacion"><span>
                                    <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_24_999)">
                                            <path d="M10.6557 3.81393L1.71996 12.7497L0.251953 11.2817L9.18664 2.34592H1.31195V0.269531H12.7321V11.6897H10.6557V3.81393Z" fill="#191919" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_24_999">
                                                <rect width={13} height={13} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>Ver guía
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-news">
                            <div className="card-image"><Link href="#info-general"><img src="/assets/imgs/page/homepage1/img-news3.png" alt="Información" /></Link></div>
                            <div className="card-info"><Link className="heading-4" href="#info-general">Todo lo que debes saber antes del gran día</Link>
                                <p className="text-md neutral-700 mt-15 mb-35">Desde el punto de partida hasta los puntos de hidratación, te contamos los detalles clave del evento.</p>
                                <Link className="btn btn-learmore-2" href="#info-general"><span>
                                    <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_24_999)">
                                            <path d="M10.6557 3.81393L1.71996 12.7497L0.251953 11.2817L9.18664 2.34592H1.31195V0.269531H12.7321V11.6897H10.6557V3.81393Z" fill="#191919" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_24_999">
                                                <rect width={13} height={13} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>Infórmate aquí
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
