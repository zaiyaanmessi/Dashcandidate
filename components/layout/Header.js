import { Menu } from '@headlessui/react'
import Link from "next/link"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Header() {
    const [scroll, setScroll] = useState(0)
    const router = useRouter()

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })

    return (
        <>
            <header className={`header sticky-bar ${scroll ? "stick" : ""}`}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-logo" style={{ display: 'flex', alignItems: 'center' }}>
                            <Link legacyBehavior href="/">
                                <a className="d-flex">
                                    <img
                                        alt="Onhiree"
                                        src="comp.png"
                                        style={{ width: '680px', height: '50px', margin: '0', padding: '0' }}
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="header-search">
                            {/* Search functionality placeholder */}
                        </div>

                        <div className="header-menu d-none d-md-flex" style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
                            <Menu as="div" className="dropdown">
                                <Menu.Button as="a" className="font-xs icon-down" style={{ display: 'flex', flexDirection: 'row' }}>
                                    <span style={{ marginLeft: '5px', fontWeight: 'bold', fontSize: '16px'  }}>Homes</span>
                                </Menu.Button>
                                <Menu.Items as="ul" className="dropdown-menu dropdown-menu-light dropdown-menu-end show" style={{ right: "0", left: "auto" }}>
                                    <li><Link className="dropdown-item" href="/profile">Profiles</Link></li>
                                    <li><Link className="dropdown-item" href="/my-resume">CV Manager</Link></li>
                                    <li><Link className="dropdown-item" href="/login">Logout</Link></li>
                                </Menu.Items>
                            </Menu>

                            <Menu as="div" className="dropdown">
                                <Menu.Button as="a" className="font-xs icon-down" style={{ display: 'flex', flexDirection: 'row' }}>
                                    <span style={{ marginLeft: '5px', fontWeight: 'bold', fontSize: '16px' }}>Find Job</span>
                                </Menu.Button>
                                <Menu.Items as="ul" className="dropdown-menu dropdown-menu-light dropdown-menu-end show" style={{ right: "0", left: "auto" }}>
                                    <li><Link className="dropdown-item" href="/profile">Profiles</Link></li>
                                    <li><Link className="dropdown-item" href="/my-resume">CV Manager</Link></li>
                                    <li><Link className="dropdown-item" href="/login">Logout</Link></li>
                                </Menu.Items>
                            </Menu>

                            <Menu as="div" className="dropdown">
                                <Menu.Button as="a" className="font-xs icon-down" style={{ display: 'flex', flexDirection: 'row', fontWeight: 'bold' }}>
                                    <span style={{ marginLeft: '5px', fontWeight: 'bold', fontSize: '16px'  }}>Candidates</span>
                                </Menu.Button>
                                <Menu.Items as="ul" className="dropdown-menu dropdown-menu-light dropdown-menu-end show" style={{ right: "0", left: "auto" }}>
                                    <li><Link className="dropdown-item" href="/profile">Profiles</Link></li>
                                    <li><Link className="dropdown-item" href="/my-resume">CV Manager</Link></li>
                                    <li><Link className="dropdown-item" href="/login">Logout</Link></li>
                                </Menu.Items>
                            </Menu>

                            <Menu as="div" className="dropdown">
                                <Menu.Button as="a" className="font-xs icon-down" style={{ display: 'flex', flexDirection: 'row' }}>
                                    <span style={{ marginLeft: '5px', fontWeight: 'bold', fontSize: '16px'  }}>Pages</span>
                                </Menu.Button>
                                <Menu.Items as="ul" className="dropdown-menu dropdown-menu-light dropdown-menu-end show" style={{ right: "0", left: "auto" }}>
                                    <li><Link className="dropdown-item" href="/profile">Blog</Link></li>
                                    <li><Link className="dropdown-item" href="/my-resume">Shop</Link></li>
                                    <li><Link className="dropdown-item" href="/login">About Us</Link></li>
                                    <li><Link className="dropdown-item" href="/login">Contacts</Link></li>
                                </Menu.Items>
                            </Menu>
                        </div>

                        <div className="header-right">
                            <div className="block-signin">
                                <Link className="btn btn-default icon-edit hover-up" href="/post-job">Post Job</Link>
                                <Menu as="div" className="dropdown d-inline-block">
                                    <Menu.Button as="a" className="btn btn-notify" />
                                    <Menu.Items as="ul" className="dropdown-menu dropdown-menu-light dropdown-menu-end show" style={{ right: "0", left: "auto" }}>
                                        <li><Link className="dropdown-item active" href="#">10 notifications</Link></li>
                                        <li><Link className="dropdown-item" href="#">12 messages</Link></li>
                                        <li><Link className="dropdown-item" href="#">20 replies</Link></li>
                                    </Menu.Items>
                                </Menu>

                                <div className="member-login">
                                    <img alt="" src="assets/imgs/page/dashboard/profile.png" />
                                    <div className="info-member">
                                        <strong className="color-brand-1">Steven Jobs</strong>
                                        <Menu as="div" className="dropdown">
                                            <Menu.Button as="a" className="font-xl icon-down">Candidate</Menu.Button>
                                            <Menu.Items as="ul" className="dropdown-menu dropdown-menu-light dropdown-menu-end show" style={{ right: "0", left: "auto" }}>
                                                <li><Link className="dropdown-item" href="/dashboar">Dashboard</Link></li>
                                                <li><Link className="dropdown-item" href="/profile">Profile</Link></li>
                                                <li><Link className="dropdown-item" href="/my-resume">My Resume</Link></li>
                                                <li><Link className="dropdown-item" href="/my-job-grid">My Applied</Link></li>
                                                <li><Link className="dropdown-item" href="/recruiters">Jobs Shortlist</Link></li>
                                                <li><Link className="dropdown-item" href="/my-tasks-list">Job alerts</Link></li>
                                                <li><Link className="dropdown-item" href="/candidates">Recruiters</Link></li>
                                                <li><Link className="dropdown-item" href="/settings">Setting</Link></li>
                                                <li><Link className="dropdown-item" href="/authentication">Authentication</Link></li>
                                                <li><Link className="dropdown-item" href="/login">Logout</Link></li>
                                            </Menu.Items>
                                        </Menu>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}