import React from 'react';
import "../pages/HowItWorks.css";


const SecondSection = () => {

    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    return (
        <section className='SecondSection'>
            <div className='second-container'>
                <h2 className='second-subtitle'>Delivering good designs <span className='second-pink'> since 1954</span><span className='second-avto'>🚚💨</span></h2>
                <p className='second-text'>We’re the first multi-purpose design kit solutions for businesses. We help you bridge
                    gaps between your layouts, templates and developers to empower all involved.</p>
                <div className='second-list'>
                    <div className='second-item'>
                        <img src="./icons/icon-phone-call.png" className='item-icon1 item-icon' alt="phone" />
                        <h3 className='item-title'>Support</h3>
                        <p className='item-desc'>Delivering faster and more personalized support with shared screens and cool design systems for Figma all involved.</p>
                        <button className='item-button' type="submit" onClick={handleSubmit}>Learn More</button>
                    </div>
                    <div className='second-item'>
                        <img src="./icons/icon-pie-chart.png" className='item-icon2 item-icon' alt="pie" />
                        <h3 className='item-title'>Sales growth</h3>
                        <p className='item-desc'>Identify qualified customers with easy-to-use live chat messaging and AI-based Sales Bot developers to empower all involved.</p>
                        <button className='item-button' type="submit" onClick={handleSubmit}>Learn More</button>
                    </div>
                    <div className='second-item'>
                        <img src="./icons/icon-zap.png" className='item-icon3 item-icon' alt="zap" />
                        <h3 className='item-title'>Coponents-driven</h3>
                        <p className='item-desc'>Delivering faster and more personalized support with shared screens and cool design systems for Figma</p>
                        <button className='item-button' type="submit" onClick={handleSubmit}>Learn More</button>
                    </div>
                    <div className='second-item'>
                        <img src="./icons/icon-thumbs-up.png" className='item-icon4 item-icon' alt="thumbs" />
                        <h3 className='item-title'>Swap the icon</h3>
                        <p className='item-desc'>You can toggle to any icon within Instances and customize outlined stroke to more bolder or lighter developers to empower all involved.</p>
                        <button className='item-button' type="submit" onClick={handleSubmit}>Learn More</button>
                    </div>
                </div>
                {/*MEDIA BLOCK */}
                <div className='second-list-block'>
                    <div className='second-list-display'>
                        <div className='second-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='item-svg1' width="43" height="43" viewBox="0 0 43 43" fill="none">
                                <path d="M16 31.75H12.85C12.293 31.75 11.7589 31.5287 11.3651 31.1349C10.9712 30.7411 10.75 30.207 10.75 29.65V22.3C10.75 21.743 10.9712 21.2089 11.3651 20.8151C11.7589 20.4212 12.293 20.2 12.85 20.2H16M23.35 18.1V13.9C23.35 13.0646 23.0181 12.2634 22.4274 11.6726C21.8366 11.0819 21.0354 10.75 20.2 10.75L16 20.2V31.75H27.844C28.3504 31.7557 28.8419 31.5782 29.2278 31.2502C29.6137 30.9222 29.8681 30.4657 29.944 29.965L31.393 20.515C31.4387 20.214 31.4184 19.9067 31.3335 19.6144C31.2486 19.322 31.1012 19.0516 30.9015 18.8219C30.7017 18.5922 30.4544 18.4086 30.1766 18.284C29.8989 18.1593 29.5974 18.0966 29.293 18.1H23.35Z" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h3 className='item-title'>Swap the icon</h3>
                            <p className='item-desc'>You can toggle to any icon within Instances and customize outlined stroke to more bolder or lighter</p>
                            <button className='item-button' type="submit" onClick={handleSubmit}>Learn More</button>
                        </div>
                        <div className='second-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='item-svg2' width="43" height="43" viewBox="0 0 43 43" fill="none">
                                <path d="M21.6805 15.7375L22.3 10.75L19.7485 13.816" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M28.1485 22.2054L30.7 19.1499H25.093" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.05 17.05L11.8 23.35H21.25L20.2 31.75L25.45 25.45" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.69995 9.69995L32.8 32.8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h3 className='item-title'>Detach if need</h3>
                            <p className='item-desc'>Detaching the block instance will help you to control the indents and font styles more precisely</p>
                            <button className='item-button' type="submit" onClick={handleSubmit}>Learn More</button>
                        </div>
                    </div>
                    <div className='second-list-display'>
                        <div className='second-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='item-svg3' width="43" height="43" viewBox="0 0 43 43" fill="none">
                                <path d="M25.4499 17.05C27.1208 17.05 28.7232 17.7138 29.9047 18.8953C31.0862 20.0768 31.7499 21.6792 31.7499 23.35V30.7H27.5499V23.35C27.5499 22.7931 27.3287 22.259 26.9348 21.8651C26.541 21.4713 26.0069 21.25 25.4499 21.25C24.8929 21.25 24.3588 21.4713 23.965 21.8651C23.5712 22.259 23.3499 22.7931 23.3499 23.35V30.7H19.1499V23.35C19.1499 21.6792 19.8137 20.0768 20.9951 18.8953C22.1766 17.7138 23.779 17.05 25.4499 17.05V17.05Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.95 18.1001H10.75V30.7001H14.95V18.1001Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.85 14.95C14.0098 14.95 14.95 14.0098 14.95 12.85C14.95 11.6902 14.0098 10.75 12.85 10.75C11.6902 10.75 10.75 11.6902 10.75 12.85C10.75 14.0098 11.6902 14.95 12.85 14.95Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h3 className='item-title'>Toggle icons</h3>
                            <p className='item-desc'>You can toggle to any icon within Instances and customize outlined stroke to more bolder or lighter</p>
                            <button className='item-button' type="submit" onClick={handleSubmit}>Learn More</button>
                        </div>
                        <div className='second-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='item-svg4' width="43" height="43" viewBox="0 0 43 43" fill="none">
                                <path d="M29.65 16H12.85C11.6902 16 10.75 16.9402 10.75 18.1V28.6C10.75 29.7598 11.6902 30.7 12.85 30.7H29.65C30.8098 30.7 31.75 29.7598 31.75 28.6V18.1C31.75 16.9402 30.8098 16 29.65 16Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M25.4501 30.7001V13.9C25.4501 13.3431 25.2288 12.809 24.835 12.4151C24.4411 12.0213 23.907 11.8 23.35 11.8H19.15C18.5931 11.8 18.059 12.0213 17.6651 12.4151C17.2713 12.809 17.05 13.3431 17.05 13.9V30.7001" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h3 className='item-title'>Replace a title</h3>
                            <p className='item-desc'>Detaching the block instance will help you to control the indents and font styles more precisely</p>
                            <button className='item-button' type="submit" onClick={handleSubmit}>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default SecondSection;