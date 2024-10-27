import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <h2>About Delay Detective</h2>
      <p>
        Delay Detective is an interactive tool designed to provide predictive insights into NJ Transit train delays.
        By selecting different NJ Transit rail lines and months, users can view the anticipated delay percentage
        and predicted number of delays for that period. Additionally, the tool provides a confidence interval to
        indicate the level of accuracy around these predictions. By leveraging data from the past couple of years and using visualizations 
        like line graphs, Delay Detective allows users to make informed decisions and expectations about potential delays. 
        This application aims to enhance awareness and understanding of common delays on NJ Transit, promoting smoother 
        commuting experiences for travelers.
      </p>
    </div>
  );
}

export default About;
