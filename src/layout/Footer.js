import React, { useState } from 'react';
import "../../src/App.css";
import "../assets/global.css";
import { Link } from "react-router-dom";




const Footer = () => {
    // const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        textarea: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        validateInput(name, value);
    };

    const validateInput = (name, value) => {
        let error = '';

        if (name === 'name') {
            error = value.trim() === '' ? 'Name is required' : '';
        }

        if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            error = value.match(emailRegex) ? '' : 'Invalid email address';
        }


        setErrors({
            ...errors,
            [name]: error,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };



    return (
        <>
            <section className='footer-container '>
                <div className='footer-content container'>
                    <div className='footer-list'>
                        <div className='footer-cont'>

                            <div className='footer-socials'>
                                <span className='footer-follow'>FOLLOW US</span>
                                <ul className="social">
                                    <li className="socials-item">
                                        <Link to="https://www.youtube.com/results?search_query=react+projects">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                <rect width="40" height="40" rx="20" fill="#FFEAA7" />
                                                <path d="M25 10H22C20.6739 10 19.4021 10.5268 18.4645 11.4645C17.5268 12.4021 17 13.6739 17 15V18H14V22H17V30H21V22H24L25 18H21V15C21 14.7348 21.1054 14.4804 21.2929 14.2929C21.4804 14.1054 21.7348 14 22 14H25V10Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li className="socials-item">
                                        <Link to="https://www.youtube.com/results?search_query=react+projects">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                <path d="M24 16C25.5913 16 27.1174 16.6321 28.2426 17.7574C29.3679 18.8826 30 20.4087 30 22V29H26V22C26 21.4696 25.7893 20.9609 25.4142 20.5858C25.0391 20.2107 24.5304 20 24 20C23.4696 20 22.9609 20.2107 22.5858 20.5858C22.2107 20.9609 22 21.4696 22 22V29H18V22C18 20.4087 18.6321 18.8826 19.7574 17.7574C20.8826 16.6321 22.4087 16 24 16V16Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M14 17H10V29H14V17Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li className="socials-item">
                                        <Link to="https://www.youtube.com/results?search_query=react+projects">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                <path d="M30.0744 17.0021C27.8044 9.41214 24.5344 7.65214 16.9944 9.92214C9.4544 12.1921 7.6444 15.4621 9.9144 23.0021C12.1844 30.5421 15.4544 32.3521 22.9944 30.0821C30.5344 27.8121 32.3444 24.5421 30.0744 17.0021Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M20.5644 13.9922L24.1444 24.3922" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M15.8444 15.6121L19.4244 26.0121" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M24.3844 15.8521L13.9844 19.4321" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M26.0044 20.572L15.6044 24.152" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li className="socials-item">
                                        <Link to="https://www.youtube.com/results?search_query=react+projects">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                <path d="M31 11.0101C30.0424 11.6855 28.9821 12.2022 27.86 12.5401C27.2577 11.8476 26.4573 11.3567 25.567 11.134C24.6767 10.9112 23.7395 10.9673 22.8821 11.2945C22.0247 11.6218 21.2884 12.2045 20.773 12.9638C20.2575 13.7231 19.9877 14.6224 20 15.5401V16.5401C18.2426 16.5856 16.5013 16.1959 14.931 15.4055C13.3607 14.6151 12.0103 13.4487 11 12.0101C11 12.0101 7 21.0101 16 25.0101C13.9405 26.408 11.4872 27.109 9 27.0101C18 32.0101 29 27.0101 29 15.5101C28.9991 15.2315 28.9723 14.9537 28.92 14.6801C29.9406 13.6735 30.6608 12.4028 31 11.0101V11.0101Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='footer-info'>
                                <span className='footer-follow'>FOLLOW US</span><br></br>
                                <Link to="mailito:hello@fapsterapp.com" className='footer-mail'>hello@fapsterapp.com</Link>
                            </div>
                        </div>
                        <div className='footer-context'>
                            <div className='footer-item'>
                                <div className='footer-title'>information</div>
                                <ul className="info">
                                    <li className="info-item">
                                        <Link to="#">About Fapster app</Link>
                                        <Link to="#">Get in Touch</Link>
                                        <Link to="#">Things We Like</Link>
                                    </li>

                                    <li className="info-item">
                                        <Link to="#">Onhovered / Active</Link>
                                        <Link to="#">Privacy Policy</Link>
                                        <Link to="#">Terms of Service</Link>
                                    </li>
                                    <li className="info-item">
                                        <Link to="#">We are hiring!</Link>
                                        <Link to="#">Resources</Link>
                                    </li>

                                </ul>
                            </div>
                            <div className='footer-item'>
                                <div className='footer-title'>keep in touch</div>
                                <form onSubmit={handleSubmit} className='footer-form'>
                                    <div className="mb-3">
                                        <div className='form-block'>
                                            <div>
                                                <label htmlFor="name" className="label" >
                                                    <input className='nameLabel'
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        placeholder='Your Name'
                                                        value={formData.name}
                                                        onChange={handleChange}

                                                    /><svg xmlns="http://www.w3.org/2000/svg" className='inputIcon' width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                        <path d="M28 29V27C28 25.9391 27.5786 24.9217 26.8284 24.1716C26.0783 23.4214 25.0609 23 24 23H16C14.9391 23 13.9217 23.4214 13.1716 24.1716C12.4214 24.9217 12 25.9391 12 27V29" stroke="#ADADAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M20 19C22.2091 19 24 17.2091 24 15C24 12.7909 22.2091 11 20 11C17.7909 11 16 12.7909 16 15C16 17.2091 17.7909 19 20 19Z" stroke="#ADADAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <span style={{ color: 'red' }}>{errors.name}</span>
                                                </label>
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="label" >
                                                    <input className='emailLabel'
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        placeholder='E-mail:'
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                    /><svg xmlns="http://www.w3.org/2000/svg" className='inputIcon2' width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                        <path d="M12 12H28C29.1 12 30 12.9 30 14V26C30 27.1 29.1 28 28 28H12C10.9 28 10 27.1 10 26V14C10 12.9 10.9 12 12 12Z" stroke="#ADADAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M30 14L20 21L10 14" stroke="#ADADAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <span style={{ color: 'red' }}>{errors.email}</span><br></br>
                                                </label>
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className='form-block'>
                                            <div>
                                                <label htmlFor="textarea" id='TextareaLabel'>
                                                    <textarea className='TextareaLabel'
                                                        id="textarea"
                                                        name="textarea"
                                                        placeholder='Leave your message|'
                                                        value={formData.textarea}
                                                        onChange={handleChange}
                                                    /><svg xmlns="http://www.w3.org/2000/svg" className='inputIcon3' width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                        <path d="M28 22.66V28C28 28.5304 27.7893 29.0391 27.4142 29.4142C27.0391 29.7893 26.5304 30 26 30H12C11.4696 30 10.9609 29.7893 10.5858 29.4142C10.2107 29.0391 10 28.5304 10 28V14C10 13.4696 10.2107 12.9609 10.5858 12.5858C10.9609 12.2107 11.4696 12 12 12H17.34" stroke="#6C5CE7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M26 10L30 14L20 24H16V20L26 10Z" stroke="#6C5CE7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </label>
                                            </div>
                                            <div>
                                                <button type="submit" className='mySubmit' onClick={handleSubmit}>
                                                    Send
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* MEDIA FOOTER */}
                    <div className='footer-media-block'>
                        <p class="footer__copyright">
                            Copyright © 2018@ • Your Company
                            All rights reserved
                        </p>
                        <span className='footer-made'>Made in Setproduct.com</span><br></br>
                        <span className='footer-made'>One man digital agency</span><br></br>
                        <Link to="mailito:hello@fapsterapp.com" className='footer-mail'>hello@fapsterapp.com</Link>
                        <ul className="social-media">
                            <li className="socials-item">
                                <Link to="https://www.youtube.com/results?search_query=react+projects">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <rect width="40" height="40" rx="20" fill="#FFEAA7" />
                                        <path d="M25 10H22C20.6739 10 19.4021 10.5268 18.4645 11.4645C17.5268 12.4021 17 13.6739 17 15V18H14V22H17V30H21V22H24L25 18H21V15C21 14.7348 21.1054 14.4804 21.2929 14.2929C21.4804 14.1054 21.7348 14 22 14H25V10Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </li>
                            <li className="socials-item">
                                <Link to="https://www.youtube.com/results?search_query=react+projects">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path d="M24 16C25.5913 16 27.1174 16.6321 28.2426 17.7574C29.3679 18.8826 30 20.4087 30 22V29H26V22C26 21.4696 25.7893 20.9609 25.4142 20.5858C25.0391 20.2107 24.5304 20 24 20C23.4696 20 22.9609 20.2107 22.5858 20.5858C22.2107 20.9609 22 21.4696 22 22V29H18V22C18 20.4087 18.6321 18.8826 19.7574 17.7574C20.8826 16.6321 22.4087 16 24 16V16Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14 17H10V29H14V17Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </li>
                            <li className="socials-item">
                                <Link to="https://www.youtube.com/results?search_query=react+projects">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path d="M30.0744 17.0021C27.8044 9.41214 24.5344 7.65214 16.9944 9.92214C9.4544 12.1921 7.6444 15.4621 9.9144 23.0021C12.1844 30.5421 15.4544 32.3521 22.9944 30.0821C30.5344 27.8121 32.3444 24.5421 30.0744 17.0021Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M20.5644 13.9922L24.1444 24.3922" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.8444 15.6121L19.4244 26.0121" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M24.3844 15.8521L13.9844 19.4321" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M26.0044 20.572L15.6044 24.152" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </li>
                            <li className="socials-item">
                                <Link to="https://www.youtube.com/results?search_query=react+projects">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path d="M31 11.0101C30.0424 11.6855 28.9821 12.2022 27.86 12.5401C27.2577 11.8476 26.4573 11.3567 25.567 11.134C24.6767 10.9112 23.7395 10.9673 22.8821 11.2945C22.0247 11.6218 21.2884 12.2045 20.773 12.9638C20.2575 13.7231 19.9877 14.6224 20 15.5401V16.5401C18.2426 16.5856 16.5013 16.1959 14.931 15.4055C13.3607 14.6151 12.0103 13.4487 11 12.0101C11 12.0101 7 21.0101 16 25.0101C13.9405 26.408 11.4872 27.109 9 27.0101C18 32.0101 29 27.0101 29 15.5101C28.9991 15.2315 28.9723 14.9537 28.92 14.6801C29.9406 13.6735 30.6608 12.4028 31 11.0101V11.0101Z" stroke="#6C5CE7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-bg'>
                        <svg xmlns="http://www.w3.org/2000/svg" max-width="1650" height="102" viewBox="0 0 1440 102" fill="none">
                            <path d="M-0.333822 543.58L-0.583526 17.1366C-0.583526 17.1366 102.172 49.726 220.913 17.2075C339.654 -15.311 399.901 2.67057 565.331 59.0554C730.762 115.44 808.875 7.45977 1046 50.0384C1283.12 92.6171 1251.81 -46.9066 1439.77 17.611C1439.81 95.8883 1440.01 483.507 1440.04 544.056C1295.17 544.008 -0.333822 543.58 -0.333822 543.58Z" fill="#FFEAA7" />
                        </svg>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Footer;