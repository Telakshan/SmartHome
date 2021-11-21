import './Contact.scss';
import image from './microservices.png';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
        <img className='spring-boot' alt='Spring Boot' src='https://www.endivesoftware.com/blog/wp-content/uploads/2020/01/Spring-Boot-Application-Development.png' />
        <img alt='Microservices' src={image} className='micro'/>
      <h1>
        This website was made as a portfolio project mainly to demonstrate
        fluency in <span>Microservices architecture, Spring boot and Reactjs. </span>
        Check out my <a href='https://github.com/Telakshan/SmartHome' target='blank'>github</a> for more info 
      </h1>
    </div>
  );
};

export default Contact;
