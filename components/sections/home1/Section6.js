
import Link from 'next/link'

export default function Section6() {
    return (
        <>

            <section className="section-box wow animate__animated animate__fadeIn box-preparing-3">
                <div className="container">
                    <div className="text-center">
                        <h2 className="neutral-0 mb-20"> Vive la 8K Ruta de las Mandarinas,<br className="d-none d-lg-block" />
                              una carrera con identidad y sabor local.</h2>
                        <p className="text-lg neutral-700">  La 8K Ruta de las Mandarinas es más que una carrera: es una celebración de nuestra tierra, cultura y energía. 
                            <br className="d-none d-lg-block" />Vive la emoción de correr rodeado de naturaleza, comunidad y el sabor único de las mandarinas de nuestra región.
                        </p>
                    </div>
                    <div className="row mt-90">
                        <div className="col-lg-4 col-md-6">
                            <div className="card-preparing-2"><Link className="card-image" href="#">
                                <img src="/assets/imgs/page/homepage3/i1.webp" alt="Reto personal"/>
                                </Link>
                                <div className="card-info"><Link href="#">
                                    <h5 className="text-22-bold">Experiencia Natural Única</h5>
                                </Link>
                                    <p className="text-md neutral-700">Corre entre los campos de mandarinas más emblemáticos del país.
                                         Una ruta diseñada para conectar con la naturaleza, 
                                        sentir la energía de la comunidad y vivir una experiencia saludable y divertida.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card-preparing-2"><Link className="card-image" href="#">
                                <img src="/assets/imgs/page/homepage3/medal.webp" alt="Reto personal"/></Link>
                                <div className="card-info"><Link href="#">
                                    <h5 className="text-22-bold">Reto Personal y Transformación</h5>
                                </Link>
                                    <p className="text-md neutral-700">Participar en la 8K Ruta de las Mandarinas es más que correr: 
                                        es una oportunidad para desafiar tus propios límites, 
                                        mejorar tu salud física y mental, y descubrir de lo que eres capaz en un entorno 
                                        lleno de naturaleza y energía positiva.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card-preparing-2"><Link className="card-image" href="#">
                                <img src="/assets/imgs/page/homepage3/star.webp" alt="Reto personal"/></Link>
                                <div className="card-info"><Link href="#">
                                    <h5 className="text-22-bold">Organización y Experiencia</h5>
                                </Link>
                                    <p className="text-md neutral-700"> Cada detalle de la 8K Ruta de las Mandarinas está cuidadosamente 
                                        planificado para brindarte una experiencia segura, 
                                        eficiente y emocionante. Desde el recorrido hasta el personal y servicios, 
                                        todo está alineado para que disfrutes al máximo de este gran evento deportivo.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card-preparing-2"><Link className="card-image" href="#">
                                <img src="/assets/imgs/page/homepage3/set1.webp" alt="Reto personal"/></Link>
                                <div className="card-info"><Link href="#">
                                    <h5 className="text-22-bold">Logística del Recorrido</h5>
                                </Link>
                                    <p className="text-md neutral-700">La ruta de la 8K está diseñada y planificada con precisión para garantizar fluidez, 
                                        seguridad y una experiencia inolvidable. Señalización, puntos de hidratación y asistencia médica estarán estratégicamente
                                        distribuidos a lo largo del recorrido para tu bienestar.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card-preparing-2"><Link className="card-image" href="#">
                                 <img src="/assets/imgs/page/homepage3/101.webp" alt="Reto personal"/></Link>
                                <div className="card-info"><Link href="#">
                                    <h5 className="text-22-bold">Seguridad en el Evento</h5>
                                </Link>
                                    <p className="text-md neutral-700">Significa el refuerzo de las medidas de seguridad, 
                                        típicamente mediante la presencia de personal capacitado,
                                         para proteger a los participantes ante cualquier incidente, pérdida o emergencia durante el recorrido.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card-preparing-2"><Link className="card-image" href="#">
                                <img src="/assets/imgs/page/homepage3/102.webp" alt="Reto personal"/></Link>
                                <div className="card-info"><Link href="#">
                                    <h5 className="text-22-bold">Cuidado de tus datos</h5>
                                </Link>
                                    <p className="text-md neutral-700">\Nos comprometemos a proteger tu información personal.
                                         Aplicamos protocolos de inscripción seguros, cifrado de datos y medidas de privacidad 
                                         para garantizar que tu participación sea totalmente confiable y protegida.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
