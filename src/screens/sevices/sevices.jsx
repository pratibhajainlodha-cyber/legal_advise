import React from 'react'
import Hammer from '../../assets/hammer.png'
import ServiceBanner from './banner/servBanner';
import PracticeAreas from './parctices/practices';
import FAQ from './Frequently/Frequently';
const Services = () => {
  return (
    <>
    {/* <ServiceBanner/>
    <section className='main-sev'>
      <div className="container">
        <div className="service-sec">
          <div className="top-section">
            <div className="header">
              <h1>Tailored Legal Solutions,<br />Exceptional Results</h1>
            </div>
          </div>
          <div className="steps-grid">
            <Step
              number="1"
              title="Schedule a time"
              description="Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volut"
              icon="calendar"
            />
            <Step
              number="2"
              title="Meet a consultant"
              description="Sit at consectetur nam velit sollicitudin id aliquam fusce. In urna vestibulum ac eleifend quis"
              icon="consultant"
            />
            <Step
              number="3"
              title="Successful planning"
              description="In urna vestibulum ac eleifend quis turpis quisque arcu arcu. Ultrices varius sed quam lectus interdum"
              icon="planning"
            />
            <Step
              number="4"
              title="Successful case"
              description="Ultrices varius sed quam lectus interdum. Viverra enim massa commodo in sed"
              icon="case"
            />
          </div>
        </div>
        
      </div>
    </section>
    <FAQ/>
     <PracticeAreas/> */}
    </>
  );
}

function Step({ number, title, description, icon }) {
  return (
    <div className="step">
      <div className="step-content">
        <h2>{number}.{title}</h2>
        <p>{description}</p>
      </div>
      <div className="step-icon">
        {/* Use SVG or icon font here. Placeholders below */}
        {icon === "calendar" && <span role="img" aria-label="calendar">📅</span>}
        {icon === "consultant" && <span role="img" aria-label="consultant">🧑‍💼</span>}
        {icon === "planning" && <span role="img" aria-label="planning">🤝</span>}
        {icon === "case" && <span ><img src={Hammer} alt="" /> </span>}

      </div>
    </div>
  );
}

export default Services