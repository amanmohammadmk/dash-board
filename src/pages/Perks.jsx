import React from 'react'
import './perks.css';

function Perks() {
  return (
    <div className='page'>

       <header>
       <img src="https://t3.ftcdn.net/jpg/04/37/56/48/360_F_437564804_9i2iMQl65goueDniemeb7ae6iiq1yFmy.jpg" width={80} height={80} alt="" />
      </header>

      <section className="perk">
      <h2>Exclusive Access</h2>
        <img src="https://media.gettyimages.com/id/1188601865/vector/leadership.jpg?s=612x612&w=0&k=20&c=asjG3ljEOxr0hpri72-ZSLMTV4dRSDUOyA4xz7k5EmI=" alt="Exclusive Access" />
        
        <p>ain exclusive access to our premium features and services that are reserved for our valued storage plan subscribers. Enjoy priority customer support, where our dedicated team is ready to assist you with any inquiries or issues. As a subscriber, you'll receive early access to new features, staying at the forefront of the latest advancements in storage technology. Take advantage of special promotions tailored exclusively for you, providing additional value and savings on top of your storage plan benefits.</p>
      </section>

      <section className="perk">
        <img src="https://www.sourcesecurity.com/img/news/920/matrix-explores-advanced-features-for-enhanced-security-920x533.jpg" alt="Enhanced Security Features" />
        <h2>Enhanced Security Features</h2>
        <p>Your peace of mind is our priority. Our storage plans come with enhanced security features, including advanced encryption, multi-factor authentication, and regular security audits, ensuring that your data is always safe and protected.</p>
      </section>

     

      <footer>
        <p>Choose [Site Name] for storage that goes beyond expectations. Experience the perks of being part of our storage community today!</p>
      </footer>
    </div>
  )
}

export default Perks