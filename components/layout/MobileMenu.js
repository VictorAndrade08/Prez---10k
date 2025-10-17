'use client'
import Link from 'next/link'
import { useState } from "react"

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${isMobileMenu ? "sidebar-visible" : ""}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className={`burger-icon burger-icon-white ${isMobileMenu ? "burger-close" : ""}`} onClick={handleMobileMenu}>
                        <span className="burger-icon-top" />
                        <span className="burger-icon-mid" />
                        <span className="burger-icon-bottom" />
                    </div>
                    <div className="mobile-header-top">
                        <div className="user-account"><img src="/assets/imgs/page/homepage6/author.png" alt="Nivia" />
                            <div className="content">
                                <h6 className="user-name">John Smith</h6>
                                <p className="font-xs text-muted">You have 4 new messages</p>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-search mobile-header-border mb-30">
                                <form action="#">
                                    <input type="text" placeholder="Search for items…" /><i className="fi-rr-search" />
                                </form>
                            </div>
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    <ul className="mobile-menu font-heading">
                                        <li className={isActive.key == 1 ? "has-children active" : "has-children"}>
                                            <span className="menu-expand" onClick={() => handleToggle(1)}><i className="fi-rr-angle-small-down" /></span>
                                            <Link className="active" href="/">Home Pages</Link>
                                            <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                                <li><Link href="/">Business Solutions</Link></li>
                                                <li><Link href="/index-2">Marketing App</Link></li>
                                                <li><Link href="/index-3">Web Agency</Link></li>
                                                <li><Link href="/index-4">Digital Agency</Link></li>
                                                <li><Link href="/index-5">3D Products</Link></li>
                                                <li><Link href="/index-6">AI Platform</Link></li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 2 ? "has-children active" : "has-children"}>
                                            <span className="menu-expand" onClick={() => handleToggle(2)}><i className="fi-rr-angle-small-down" /></span>

                                            <Link href="#">Inner Pages</Link>
                                            <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                                <li><Link href="/about">About Us</Link></li>
                                                <li><Link href="/service">Our Services</Link></li>
                                                <li><Link href="/pricing">Pricing Plan</Link></li>
                                                <li><Link href="/help">Help Center</Link></li>
                                                <li><Link href="/integration">Integrations</Link></li>
                                                <li><Link href="/careers">Careers</Link></li>
                                                <li><Link href="/job-detail">Job details</Link></li>
                                                <li><Link href="/feature">Features V1</Link></li>
                                                <li><Link href="/feature-2">Features V2</Link></li>
                                                <li><Link href="/feature-3">Features V3</Link></li>
                                                <li><Link href="/contact">Contact us</Link></li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 3 ? "has-children active" : "has-children"}>
                                            <span className="menu-expand" onClick={() => handleToggle(3)}><i className="fi-rr-angle-small-down" /></span>

                                            <Link href="#">Blog</Link>
                                            <ul className="sub-menu" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                                <li><Link href="/blog">Blog V1</Link></li>
                                                <li><Link href="/blog-2">Blog V2</Link></li>
                                                <li><Link href="/blog-post">Blog post</Link></li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 4 ? "has-children active" : "has-children"}>
                                            <span className="menu-expand" onClick={() => handleToggle(4)}><i className="fi-rr-angle-small-down" /></span>

                                            <Link href="#">Utility pages</Link>
                                            <ul className="sub-menu" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                                <li><Link href="/register">Register</Link></li>
                                                <li><Link href="/login">Sign In</Link></li>
                                                <li><Link href="/forget-password">Forgot password</Link></li>
                                                <li><Link href="/term-conditions">Terms  conditions</Link></li>
                                                <li><Link href="/404">404 Not found</Link></li>
                                                <li><Link href="/change-log">Change log</Link></li>
                                                <li><Link href="/comming-soon">Comming soon</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="mobile-account">
                                <h6 className="mb-10">Your Account</h6>
                                <ul className="mobile-menu font-heading">
                                    <li><Link href="#">Profile</Link></li>
                                    <li><Link href="#">Work Preferences</Link></li>
                                    <li><Link href="#">My Boosted Shots</Link></li>
                                    <li><Link href="#">My Collections</Link></li>
                                    <li><Link href="#">Account Settings</Link></li>
                                    <li><Link href="#">Go Pro</Link></li>
                                    <li><Link href="/login">Sign Out</Link></li>
                                </ul>
                            </div>
                            <div className="mobile-social-icon mb-50">
                                <h6 className="mb-25">Follow Us</h6><Link className="icon-socials icon-facebook" href="#"><img alt="Nivia" src="/assets/imgs/template/icons/fb.svg" /></Link><Link className="icon-socials icon-instagram" href="#"><img alt="Nivia" src="/assets/imgs/template/icons/in.svg" /></Link><Link className="icon-socials icon-twitter" href="#"><img alt="Nivia" src="/assets/imgs/template/icons/tw.svg" /></Link><Link className="icon-socials icon-be" href="#"><img alt="Nivia" src="/assets/imgs/template/icons/be.svg" /></Link>
                            </div>
                            <div className="site-copyright">Copyright 2023 © Nivia.<br />Designed by AliThemes.</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
