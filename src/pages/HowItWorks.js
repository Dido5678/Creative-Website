import React from 'react';
import "./HowItWorks.css";
import Header from '../layout/Header';
import Combine from '../components/Combine';
import SecondSection from '../components/SecondSection';
import Pricing from '../components/Pricing';
import Footer from '../layout/Footer';

const HowItWorks = () => {
    return (
        <>
            <Header />
            <div className='main'>
                <Combine />
                <SecondSection />
                <Pricing />
                <Footer />
            </div>
        </>
    )
}
export default HowItWorks;