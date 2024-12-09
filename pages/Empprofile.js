import Layout from "@/components/layout/Layout"

export default function eeeHome() {
    return (
        <>
            <Layout breadcrumbTitle="Edit Profile" breadcrumbActive="Edit Profile">
                <div className="row">
                    <div className="col-xxl-9 col-xl-8 col-lg-8">
                        <div className="section-box">
                        <div className="container">
                            <div className="panel-white mb-30">
                            <div className="box-padding">
                                <h6 className="color-text-paragraph-2">General</h6>
                                <div className="box-profile-image">
                                <div className="img-profile">

                                    <img
                                    src="assets/imgs/page/profile/img-profile.png"
                                    alt="jobBox"
                                    />
                                </div>
                                <div className="info-profile">

                                    <a className="btn btn-default">Browse</a>
                                    <a className="btn btn-link">Delete</a>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group mb-30">
                                    <label className="font-sm  mb-10">
                                        Full Name 
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Steven Job"
                                    />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group mb-30">
                                    <label className="font-sm  mb-10">
                                        Email 
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="stevenjob@gmail.com"
                                    />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group mb-30">
                                    <label className="font-sm text-black mb-10">
                                        Contact number
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="01 - 234 567 89"
                                    />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group mb-30">
                                    <label className="font-sm  mb-10">
                                        Personal website
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="https://alithemes.com"
                                    />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group mb-30">
                                    <label className="font-sm  mb-10">
                                        Gender
                                    </label>
                                    <select className="form-control">
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group mb-30">
                                    <label className="font-sm  mb-10">
                                        Age
                                    </label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        placeholder="Enter your age"
                                        min="18"
                                        max="100"
                                    />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group mb-30">
                                    <label className="font-sm  mb-10">
                                        Salary Type
                                    </label>
                                    <select className="form-control">
                                        <option value="">Select Salary Type</option>
                                        <option value="hourly">Hourly</option>
                                        <option value="monthly">Monthly</option>
                                        <option value="yearly">Yearly</option>
                                        <option value="contract">Contract</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group mb-30">
                                    <label className="font-sm  mb-10">
                                        Salary Range
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter salary range"
                                    />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group mb-30">
                                    <label className="font-sm  mb-10">
                                        Qualification
                                    </label>
                                    <select className="form-control">
                                        <option value="">Select Qualification</option>
                                        <option value="highschool">High School</option>
                                        <option value="associate">Associate Degree</option>
                                        <option value="bachelors">Bachelor's Degree</option>
                                        <option value="masters">Master's Degree</option>
                                        <option value="phd">PhD</option>
                                        <option value="professional">Professional Certification</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group mb-30">
                                    <label className="font-sm  mb-10">
                                        Total Experience
                                    </label>
                                    <select className="form-control">
                                        <option value="">Select Experience</option>
                                        <option value="0-1">0-1 Years</option>
                                        <option value="1-2">1-2 Years</option>
                                        <option value="2-3">2-3 Years</option>
                                        <option value="3-5">3-5 Years</option>
                                        <option value="5-10">5-10 Years</option>
                                        <option value="10+">10+ Years</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group mb-30">
                                    <label className="font-sm  mb-10">
                                        Categories
                                    </label>
                                    <select className="form-control">
                                        <option value="">Select Categories</option>
                                        <option value="uiux">UI/UX Designer</option>
                                        <option value="frontend">Frontend Developer</option>
                                        <option value="backend">Backend Developer</option>
                                        <option value="fullstack">Full Stack Developer</option>
                                        <option value="datascience">Data Scientist</option>
                                        <option value="productmanager">Product Manager</option>
                                        <option value="marketing">Marketing Specialist</option>
                                        <option value="sales">Sales Representative</option>
                                        <option value="hr">Human Resources</option>
                                        <option value="other">Other</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group mb-30">
                                    <label className="font-sm  mb-10">
                                        Languages
                                    </label>
                                    <select className="form-control">
                                        <option value="">Select Languages</option>
                                        <option value="english">English</option>
                                        <option value="spanish">Spanish</option>
                                        <option value="french">French</option>
                                        <option value="german">German</option>
                                        <option value="mandarin">Mandarin</option>
                                        <option value="arabic">Arabic</option>
                                        <option value="hindi">Hindi</option>
                                        <option value="portuguese">Portuguese</option>
                                        <option value="russian">Russian</option>
                                        <option value="japanese">Japanese</option>
                                        <option value="other">Other</option>
                                    </select>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group mb-30">
                                    <label className="font-sm  mb-10">About Me</label>
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        rows={5}
                                        defaultValue={
                                        "We are AliThemes , a creative and dedicated group of individuals who love web development almost as much as we love our customers. We are passionate team with the mission for achieving the perfection in web design."
                                        }
                                    />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group mb-30">
                                    <label className="font-sm  mb-10">
                                        Social Network 1
                                    </label>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <input
                                                className="form-control mb-10"
                                                type="text"
                                                placeholder="Network Name"
                                            />
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Profile URL"
                                            />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group mb-30">
                                    <label className="font-sm  mb-10">
                                        Social Network 2
                                    </label>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <input
                                                className="form-control mb-10"
                                                type="text"
                                                placeholder="Network Name"
                                            />
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Profile URL"
                                            />
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group mb-30">
                                    <label className="font-sm  mb-10">
                                        Social Network 3
                                    </label>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <input
                                                className="form-control mb-10"
                                                type="text"
                                                placeholder="Network Name"
                                            />
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Profile URL"
                                            />
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group mb-30">
                                    <label className="font-sm  mb-10">
                                        Social Network 4
                                    </label>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <input
                                                className="form-control mb-10"
                                                type="text"
                                                placeholder="Network Name"
                                            />
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Profile URL"
                                            />
                                        </div>
                                    </div>
                                    </div>
                                </div>



                                {/* <div className="col-lg-6 col-md-6">
                                    <div className="form-group mb-30">
                                    <label className="font-sm color-text-mutted mb-10">
                                        Experience
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="1 - 5 Years"
                                    />
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-6 col-md-6">
                                    <div className="form-group mb-30">
                                    <label className="font-sm color-text-mutted mb-10">
                                        Education Levels
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Certificate"
                                    />
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-6 col-md-6">
                                    <div className="form-group mb-30">
                                    <label className="font-sm color-text-mutted mb-10">
                                        Languages
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="English, French"
                                    />
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-6 col-md-6">
                                    <div className="form-group mb-30">
                                    <label className="font-sm color-text-mutted mb-10">
                                        Categories
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="UI/UX designer"
                                    />
                                    </div> */}
                                {/* </div> */}
                                {/* <div className="col-lg-6 col-md-6">
                                    <div className="form-group mb-30">
                                    <label className="font-sm color-text-mutted mb-10">
                                        Current Salary($)
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="$2500"
                                    />
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-6 col-md-6">
                                    <div className="form-group mb-30">
                                    <label className="font-sm color-text-mutted mb-10">
                                        Expected Salary($)
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="$3500"
                                    />
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-12">
                                    <div className="form-group mt-10">
                                    <button className="btn btn-default btn-brand icon-tick">
                                        Save Change
                                    </button>
                                    </div>
                                </div> */}
                                </div>
                            </div>
                            </div>
                            <div className="panel-white mb-30">
                            <div className="box-padding">
                                <h6 className="color-text-paragraph-2">Contact Information</h6>
                                <div className="row mt-30">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group mb-30">
                                    <label className="font-sm  mb-10">
                                        Country
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="United States of America"
                                    />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group mb-30">
                                    <label className="font-sm  mb-10">
                                        City
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Chicago"
                                    />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group mb-30">
                                    <label className="font-sm  mb-10">
                                        Complete Address
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="205 North Michigan Avenue, Suite 810, Chicago, 60601, USA"
                                    />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group mb-30">
                                    <label className="font-sm  mb-10">
                                        Find On Map
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="205 North Michigan Avenue, Suite 810, Chicago, 60601, USA"
                                    />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group mb-30">
                                    <label className="font-sm  mb-10">
                                        Latitude
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="41.881832"
                                    />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group mb-30">
                                    <label className="font-sm  mb-10">
                                        Longitude
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder=" -87.623177"
                                    />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group mb-30">
                                    <label className="font-sm mb-10">
                                        Google Map
                                    </label>
                                    <div className="box-map">
                                        <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.4860084541583!2d-87.62575418429162!3d41.88608087922149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca8b34afe61%3A0x6caeb5f721ca846!2s205%20N%20Michigan%20Ave%20Suit%20810%2C%20Chicago%2C%20IL%2060601%2C%20Hoa%20K%E1%BB%B3!5e1!3m2!1svi!2s!4v1663165156864!5m2!1svi!2s"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        width="100%"
                                        height={400}
                                        />
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group mt-0">
                                    <button className="btn btn-default btn-brand icon-tick">
                                        Save Change
                                    </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-4">
                        <div className="section-box">
                        <div className="container">
                            <div className="panel-white">
                            <div className="panel-head">
                                <h5>Social Network</h5>
                                <a
                                className="menudrop"
                                id="dropdownMenu3"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                data-bs-display="static"
                                />
                                <ul
                                className="dropdown-menu dropdown-menu-light dropdown-menu-end"
                                aria-labelledby="dropdownMenu3"
                                >
                                <li>
                                    <a className="dropdown-item active" href="#">
                                    Add new
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                    Settings
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                    Actions
                                    </a>
                                </li>
                                </ul>
                            </div>
                            <div className="panel-body pt-20">
                                <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group mb-30">
                                    <label className="font-sm color-text-mutted mb-10">
                                        Facebook
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="https://www.facebook.com"
                                    />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group mb-30">
                                    <label className="font-sm color-text-mutted mb-10">
                                        Twitter
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="https://twitter.com"
                                    />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group mb-30">
                                    <label className="font-sm color-text-mutted mb-10">
                                        Instagram
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="https://www.instagram.com"
                                    />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group mt-0">
                                    <button className="btn btn-default btn-brand icon-tick">
                                        Save Change
                                    </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="section-box">
                        <div className="container">
                            <div className="panel-white">
                            <div className="panel-head">
                                <h5>My Skill</h5>
                                <a
                                className="menudrop"
                                id="dropdownMenu3"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                data-bs-display="static"
                                />
                                <ul
                                className="dropdown-menu dropdown-menu-light dropdown-menu-end"
                                aria-labelledby="dropdownMenu3"
                                >
                                <li>
                                    <a className="dropdown-item active" href="#">
                                    Add new
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                    Settings
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                    Actions
                                    </a>
                                </li>
                                </ul>
                            </div>
                            <div className="panel-body pt-20">
                                <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group mb-30">
                                    <input
                                        className="form-control icon-search-right"
                                        type="text"
                                        placeholder="E.g. Angular, Laravel..."
                                    />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="mb-20">
                                    <a className="btn btn-tag tags-link">
                                        Figma
                                        <span />
                                    </a>
                                    <a className="btn btn-tag tags-link">
                                        Adobe XD
                                        <span />
                                    </a>
                                    <a className="btn btn-tag tags-link">
                                        NextJS
                                        <span />
                                    </a>
                                    <a className="btn btn-tag tags-link">
                                        React
                                        <span />
                                    </a>
                                    <a className="btn btn-tag tags-link">
                                        App
                                        <span />
                                    </a>
                                    <a className="btn btn-tag tags-link">
                                        Digital
                                        <span />
                                    </a>
                                    <a className="btn btn-tag tags-link">
                                        NodeJS
                                        <span />
                                    </a>
                                    </div>
                                    <div className="mt-30 mb-40">

                                    <span className="info-icon font-sm color-text-paragraph-2">
                                        You can add up to 15 skills
                                    </span>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group mt-0">
                                    <button className="btn btn-default btn-brand icon-tick">
                                        Save Change
                                    </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

