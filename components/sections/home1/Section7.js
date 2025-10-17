import Link from 'next/link'

export default function Section7() {
    return (
        <section className="section-box wow animate__animated animate__fadeIn box-how-it-work">
            <div className="container">
                <Link className="btn btn-brand-4-sm" href="#">Cómo Funciona</Link>
                <h2 className="mt-15 mb-20">
                    3 pasos simples y rápidos para vivir una<br className="d-none d-lg-block" />
                    experiencia inolvidable en la carrera
                </h2>
                <p className="text-lg neutral-500 mb-55">
                    Corre por las calles de Patate y siente la emoción de ser parte de<br className="d-none d-lg-block" />
                    una competencia única entre aroma a cítricos y aplausos
                </p>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="box-border-rounded">
                            <div className="card-casestudy">
                                <div className="card-title">
                                    <h6><span className="number">1</span>Inscríbete al evento</h6>
                                </div>
                                <div className="card-desc">
                                    <p>
                                        El proceso es simple y rápido, priorizando tu comodidad y experiencia. Recibe tu
                                        kit oficial y asegúrate un lugar en la línea de salida para comenzar tu aventura.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box-border-rounded">
                            <div className="card-casestudy">
                                <div className="card-title">
                                    <h6><span className="number">2</span>Prepárate con ganas</h6>
                                </div>
                                <div className="card-desc">
                                    <p>
                                        Te damos consejos y apoyo para tu preparación. Diseñamos una estrategia que se adapte
                                        a tus metas y te motive a entrenar con disciplina hasta el día de la carrera.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box-border-rounded">
                            <div className="card-casestudy">
                                <div className="card-title">
                                    <h6><span className="number">3</span>Corre y disfruta</h6>
                                </div>
                                <div className="card-desc">
                                    <p>
                                        Disfruta del recorrido, con puntos de hidratación y animación. Cruza la meta con
                                        orgullo, celebra tu logro y llévate el recuerdo de una jornada inolvidable.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
