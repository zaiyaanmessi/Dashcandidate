import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const percentage = 67;
export default function candSidebar() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);
    const router = useRouter();
    return (
        <>
            <div className={`nav ${isToggled ? "close-nav" : ""}`}><a className={`btn btn-expanded ${isToggled ? "btn-collapsed" : ""}`} onClick={toggleTrueFalse} />
                <nav className="nav-main-menu">
                    <ul className="main-menu">
                        <li> <Link className={router.pathname == "/EmpDashboar" ? "dashboard2 active" : "dashboard2"} href="/EmpDashboar"><img src="assets/imgs/page/dashboard/dashboard.svg" alt="jobBox" /><span className="name">Dashboard</span></Link>
                        </li>
                        {/* <li> <Link className={router.pathname == "/candidates" ? "dashboard2 active" : "dashboard2"} href="/candidates"><img src="assets/imgs/page/dashboard/candidates.svg" alt="jobBox" /><span className="name">Candidates</span></Link>
                        </li> */}
                         <li> <Link className={router.pathname == "/Empprofile" ? "dashboard2 active" : "dashboard2"} href="/Empprofile"><img src="assets/imgs/page/dashboard/profiles.svg" alt="jobBox" /><span className="name">Profile</span></Link>
                         </li>
                         <li> <Link className={router.pathname == "/Empmy-resume" ? "dashboard2 active" : "dashboard2"} href="/Empmy-resume"><img src="assets/imgs/page/dashboard/cv-manage.svg" alt="jobBox" /><span className="name">My Resume</span></Link>
                        </li>
                        <li> <Link className={router.pathname == "/Empmy-job-grid" ? "dashboard2 active" : "dashboard2"} href="/Empmy-job-grid"><img src="assets/imgs/page/dashboard/jobs.svg" alt="jobBox" /><span className="name">My Applied</span></Link>
                        </li>
                        <li> <Link className={router.pathname == "/Emprecruiters" ? "dashboard2 active" : "dashboard2"} href="/Emprecruiters"><img src="assets/imgs/page/dashboard/recruiters.svg" alt="jobBox" /><span className="name">Jobs Shortlist</span></Link>
                        </li>
                        <li> <Link className={router.pathname == "/Empfol-emp" ? "dashboard2 active" : "dashboard2"} href="/Empfol-emp"><img src="assets/imgs/page/dashboard/recruiters.svg" alt="jobBox" /><span className="name">Following Employers</span></Link>
                        </li>
                        
                        <li> <Link className={router.pathname == "/Empmy-tasks-list" ? "dashboard2 active" : "dashboard2"} href="/Empmy-tasks-list"><img src="assets/imgs/page/dashboard/tasks.svg" alt="jobBox" /><span className="name">Job Alerts</span></Link>
                        </li>
                          <li> <Link className={router.pathname == "/Empcandidates" ? "dashboard2 active" : "dashboard2"} href="/Empcandidates"><img src="assets/imgs/page/dashboard/candidates.svg" alt="jobBox" /><span className="name">Recruiters</span></Link>
                        </li>

                        <li> <Link className={router.pathname == "/Empmeetings" ? "dashboard2 active" : "dashboard2"} href="/Empmeetings"><img src="assets/imgs/page/dashboard/candidates.svg" alt="jobBox" /><span className="name">Meetings</span></Link>
                        </li>
                       
                        <li> <Link className={router.pathname == "/Empsettings" ? "dashboard2 active" : "dashboard2"} href="/Empsettings"><img src="assets/imgs/page/dashboard/settings.svg" alt="jobBox" /><span className="name">Setting</span></Link>
                        </li>
                        <li> <Link className={router.pathname == "/Empauthentication" ? "dashboard2 active" : "dashboard2"} href="/Empauthentication"><img src="assets/imgs/page/dashboard/authentication.svg" alt="jobBox" /><span className="name">Authentication</span></Link>
                        </li>
                        <li> <Link className={router.pathname == "/Emplogin" ? "dashboard2 active" : "dashboard2"} href="/Emplogin"><img src="assets/imgs/page/dashboard/logout.svg" alt="jobBox" /><span className="name">Logout</span></Link>
                        </li>
                    </ul>
                </nav>
                <div className="border-bottom mb-20 mt-20" />
                <div className="box-profile-completed text-center mb-30">
                    <div style={{ width: "50%", margin: "0 auto" }} className="mt-30 mb-30">
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            background
                            backgroundPadding={0}
                            styles={buildStyles({
                                backgroundColor: "#D8E0FD",
                                textColor: "#05264E",
                                pathColor: "#3498DB",
                                trailColor: "transparent",
                                strokeLinecap: "butt"
                            })}
                        />
                    </div>
                    <h6 className="mb-10">Profile Completed</h6>
                    <p className="font-xs color-text-mutted">Please add detailed information to your profile. This will help you
                        develop your career more quickly.</p>
                </div>
                {/* <div className="sidebar-border-bg mt-50">
                    <span className="text-grey">WE ARE</span><span className="text-hiring">HIRING</span>
                    <p className="font-xxs color-text-paragraph mt-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Recusandae architecto
                    </p>
                    <div className="mt-15">
                        <Link className="btn btn-paragraph-2" href="#">Know More</Link>
                    </div>
                </div> */}
            </div>
        </>
    )
}
