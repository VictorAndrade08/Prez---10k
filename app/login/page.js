
import Layout from "@/components/layout/Layout"
import Link from 'next/link'
export default function Login() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} headerCls="header-style-2 header-style-4" >
                <section className="section-box box-content-login">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="box-form-register">
                                    <h3 className="title-register">Welcome Back</h3>
                                    <p className="text-md neutral-700">Today is a new day. It's your day. You shape it. Sign in to start managing your projects.</p>
                                    <form className="form-register" action="#">
                                        <div className="form-group">
                                            <label>Your Email<span className="brand-1">*</span></label>
                                            <input className="form-control" type="text" placeholder="email@website.com" />
                                        </div>
                                        <div className="form-group">
                                            <label>Password *</label>
                                            <input className="form-control" type="password" />
                                        </div>
                                        <div className="form-group-cb">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <label className="text-md">
                                                    <input className="cb-agree" type="checkbox" />Remember me
                                                </label><Link className="text-md neutral-500" href="/forget-password">Forgot password?</Link>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-black btn-rounded">Login
                                                <svg xmlns="http://www.w3.org/2000/svg" width={23} height={8} viewBox="0 0 23 8" fill="none">
                                                    <path d="M22.5 4.00032L18.9791 0.479492V3.3074H0.5V4.69333H18.9791V7.52129L22.5 4.00032Z" fill="true" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="other-login mt-45">
                                            <p className="text-md neutral-500">Don’t have an account?<Link className="brand-1-1" href="/register">Sign Up</Link></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box-image-banner-login"><img src="/assets/imgs/page/login/banner.png" alt="Nivia" />
                                    <ul className="list-logos-login">
                                        <li>
                                            <div className="item-logo"><img src="/assets/imgs/page/homepage3/logo2.png" alt="Nivia" /></div>
                                        </li>
                                        <li>
                                            <div className="item-logo"><img src="/assets/imgs/page/homepage3/logo3.png" alt="Nivia" /></div>
                                        </li>
                                        <li>
                                            <div className="item-logo"><img src="/assets/imgs/page/homepage3/logo4.png" alt="Nivia" /></div>
                                        </li>
                                        <li>
                                            <div className="item-logo"><img src="/assets/imgs/page/homepage3/logo5.png" alt="Nivia" /></div>
                                        </li>
                                        <li>
                                            <div className="item-logo"><img src="/assets/imgs/page/homepage3/logo6.png" alt="Nivia" /></div>
                                        </li>
                                        <li>
                                            <div className="item-logo"><img src="/assets/imgs/page/homepage3/logo7.png" alt="Nivia" /></div>
                                        </li>
                                        <li>
                                            <div className="item-logo"><img src="/assets/imgs/page/homepage3/logo8.png" alt="Nivia" /></div>
                                        </li>
                                        <li>
                                            <div className="item-logo"><img src="/assets/imgs/page/homepage3/logo9.png" alt="Nivia" /></div>
                                        </li>
                                        <li>
                                            <div className="item-logo"><img src="/assets/imgs/page/homepage3/logo1.png" alt="Nivia" /></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}