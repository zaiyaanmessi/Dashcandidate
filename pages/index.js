/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Layout from "/components/layout/Layout";
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Check for candidate credentials
        if (email === 'candidate' && password === '1234') {
            // Successful login
            router.push('/dashboar');
        } else {
            // Failed login
            setMessage('Invalid credentials. Try candidate/1234');
        }
    };

    return (
        <Layout hideSidebar={true}>
            <section className="pt-100 login-register">
                <div className="container">
                    <div className="row login-register-cover" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {/* Left Image Column */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img 
                                src="/signinpagephoto.webp"
                                alt="Your Image" 
                                className="img-fluid"
                                style={{ maxWidth: '100%', height: 'auto' }} 
                            />
                        </div>
                        {/* Right Form Column */}
                        <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginTop: '-20px' }}>
                            <div className="text-muted text-end mb-20" style={{ textAlign: 'right', borderBottom: '1px solid #dcdcdc', paddingBottom: '20px' }}>
                                Don't have an Account? 
                                <Link legacyBehavior href="/page-register">
                                    <a>Register</a>
                                </Link>
                            </div>
                            <div className="text-center">
                                <h4 className="mt-20 mb-20 text-brand-1" style={{ textAlign: 'left' }}>Login</h4>
                                <button className="btn social-login hover-up mb-20">
                                    <img src="assets/imgs/template/icons/icon-google.svg" alt="jobbox" />
                                    <strong>Sign in with Google</strong>
                                </button>
                                <div className="divider-text-center">
                                    <span>Or continue with</span>
                                </div>
                            </div>
                            <form className="login-register text-start mt-20" onSubmit={handleLogin}>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="input-email">
                                        Email address *
                                    </label>
                                    <input 
                                        className="form-control" 
                                        id="input-email" 
                                        type="text" 
                                        required 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email" 
                                    />
                                    <label className="form-label" htmlFor="input-password">
                                        Password *
                                    </label>
                                    <input 
                                        className="form-control" 
                                        id="input-password" 
                                        type="password" 
                                        required 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your Password" 
                                    />
                                </div>
                                <div className="login_footer form-group d-flex justify-content-between">
                                    <Link legacyBehavior href="/page-contact">
                                        <a className="text-muted">Forgot Password</a>
                                    </Link>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-brand-1 hover-up w-100" type="submit">
                                        Login
                                    </button>
                                </div>
                                {message && (
                                    <div className="alert alert-danger mt-3" role="alert">
                                        {message}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}