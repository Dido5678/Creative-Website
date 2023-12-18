import React from 'react';
import "../pages/HowItWorks.css";



const Combine = () => {

  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
  const handleScroll = () => {
    const section3 = document.getElementById('section3');

    if (section3) {
      section3.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section className='combine'>
      <img src="./images/fone.png" className='combine-fone' alt="fone" />
      <img src="./images/background.png" className='combine-bg' alt="fone" />
      <div className='combine-container container'>
        <div className='combine-bg'>
          <h1 className='combine-title title'> Combine
            <span className='fine '>  fine <img src="./images/green.png" className='combine-green' alt="fone" /></span>
            <span className='cool '> cool <img src="./images/green.png" className='combine-green' alt="fone" /></span>
            images </h1>
          <h2 className='combine-subtitle'>To represent a product</h2>
          <svg xmlns="http://www.w3.org/2000/svg" className='slac'onClick={handleScroll}  width="46" height="46" viewBox="0 0 46 46" fill="none">
            <path d="M23 15.16L23 30.84" stroke="#6C5CE7" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M30.84 23L23 30.84L15.16 23" stroke="#6C5CE7" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div className='combine-block'>
            <div className='combine-images-container'>
              <p className='combine-text'>Use mixed grid with imagery, replace with your own photos and descriptions</p>
              <p className='combine-subtext'>This is multipurpose grid, it fits for portfolio, services or agency web site</p>
              <img src="./images/card1.png" className='combine-card1 combine-card' alt="card" />
              <img src="./images/card2.png" className='combine-card2 combine-card' alt="card" />
              <img src="./images/card3.png" className='combine-card3 combine-card' alt="card" />
              <img src="./images/card4.png" className='combine-card4 combine-card' alt="card" />
              <img src="./images/card5.png" className='combine-card5 combine-card' alt="card" />
              <img src="./images/card6.png" className='combine-card6 combine-card' alt="card" />
              <img src="./images/card7.png" className='combine-card7 combine-card' alt="card" />
              <button className='combine-button' type="submit" onClick={handleSubmit}>Learn More</button>
            </div>
            {/* MEDIA FOTO BLOCK */}
            <div className='combine-block-container'>
              <img src="./images/mediafoto/bg.jpg" className='combine-card1 combine-card' alt="card" />
              <img src="./images/mediafoto/bg1.jpg" className='combine-card2 combine-card' alt="card" />
              <img src="./images/mediafoto/bg2.jpg" className='combine-card3 combine-card' alt="card" />
              <img src="./images/mediafoto/bg7.jpg" className='combine-card4 combine-card' alt="card" />
              <img src="./images/mediafoto/bg5.jpg" className='combine-card6 combine-card' alt="card" />
              <button className='combine-button' type="submit" onClick={handleSubmit}>Learn More</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
export default Combine;
