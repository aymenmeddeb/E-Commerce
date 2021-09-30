import React from 'react'

import './contacts.css'

const Contacts = () => {
    return (
        <div>
        <div className="background"  >
          <div className="containere">
            <div id="carousel">
              <figure><img src="https://image.freepik.com/photos-gratuite/homme-tenant-carte-credit-main-entrant-code-securite-aide-du-clavier-ordinateur-portable_1423-47.jpg" alt='img2'/></figure>
              <figure><img src=" https://image.freepik.com/photos-gratuite/concept-commerce-paiement-achat-ligne_53876-123952.jpg" alt='img2'/></figure>
              <figure><img src="https://image.freepik.com/photos-gratuite/boites-colis-papier-logo-panier-achat-dans-chariot-clavier-ordinateur-portable_9635-3215.jpg" alt='img2' /></figure>
              <figure><img src="https://i.imgur.com/ZCeK0MQ.jpg" alt='img2'/></figure>
              <figure><img src="https://i.imgur.com/YCkeccD.jpg" alt='img2'/></figure>
              <figure><img src="https://i.imgur.com/RcZr6TR.jpg" alt='img2'/></figure>
              <figure><img src="https://i.imgur.com/ZCeK0MQ.jpg" alt='img2'/></figure>
              <figure><img src="https://i.imgur.com/DjwL2R8.jpg" alt='img2'/></figure>
              <figure><img src="https://i.imgur.com/ZCeK0MQ.jpg" alt='img2'/></figure>
            </div>
          </div>
        </div>
      
        <div className='contacts'>
        <div className="container mt-5">
        <div className="text-center mb-3">
            <h3>Contact Us</h3>
        </div>
        <div className="row g-2">
            <div className="col-md-4">
                <div className="card"> <img src="https://i.imgur.com/xuGJbnU.png" width="40" alt="img3"/>
                    <h5>Address</h5>
                    <p>Gabes,Tunisie</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card"> <img src="https://i.imgur.com/TNKflal.png" width="40" alt="img3"/>
                    <h5>Email</h5>
                    <p>contact@bbbootstrap.com</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card"> <img src="https://i.imgur.com/pZLFSO3.png" width="40" alt="img3"/>
                    <h5>Phone</h5>
                    <p>9854959754</p>
                </div>
            </div>
        </div>
    </div>
        </div>
        </div>
    )
}

export default Contacts
