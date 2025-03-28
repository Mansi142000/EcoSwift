import React from 'react';
import './intro.css';
import LogoImg from'../images/eco swift.png';

const Intro = () => {
  return (
    <header>
            <div className="container">
                <div className="leftContent">
                    <p className="para"><b>I participated in an all-day Innovation Challenge!</b>
                    <br></br> <br></br>
                    Worked in a team to create a rival business to the MBTA (Massachusetts Bay 
                    Transportation Authority), a public transit agency known for its complex operations 
                    and aging infrastructure. We conducted user persona analysis to understand 
                    commuter pain points, designed a modern, eco-friendly alternative with electric 
                    buses and e-scooter integration, developed a clear value proposition, and pitched 
                    the final concept to a panel of judges at the end of the day.</p>
                </div>
                <div className="rightContent">
                    <img className='image' src={LogoImg} alt='Eco Swift Logo' />
                </div>
            </div>
        </header>
  );
};

export default Intro;
