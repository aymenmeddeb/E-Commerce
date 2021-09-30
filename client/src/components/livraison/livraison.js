import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import './livraison.css'


const Livraison = () => {
    return (
        <div>      
        <div className="live-div">
        <h1 className="live-div-titre">Livraison</h1>
        
        <div>
       <ListGroup variant="flush" className="livr">
  <ListGroup.Item><h1 className="livraison">OÙ LIVRE-T-ON ?</h1>
  <p>Votre commande vous sera livrée à l’adresse renseignée sur votre compte client “votre domicile  ou votre lieu de travail”. Notre livreur ARAMEX assure la livraison sur tout le territoire tunisien, et même dans les zones difficilement accessibles.</p></ListGroup.Item>
  <ListGroup.Item><h1 className="livraison">QUELS SONT LES DÉLAIS DE LIVRAISON ?</h1>
  <p>Les délais de livraison peuvent aller de 7 à 10 jours à partir de la date de validation de la commande. Ces délais peuvent être prolongés dans le cas d’un colis volumineux . </p></ListGroup.Item>
  <ListGroup.Item><h1 className="livraison">QUELS JOURS DE LA SEMAINE PEUT-ON ÊTRE LIVRÉS ?</h1>
  <p>Les livraisons se feront tous les jours de la semaine (sauf les Dimanches et les jours fériés)</p></ListGroup.Item>
  <ListGroup.Item><h1 className="livraison">QUELS SONT LES MOYENS DE PAIEMENT ? </h1>
  <p>Le règlement de la commande se fait uniquement en espèce à la livraison, ou par avance en ligne par carte bancaire.</p>
  </ListGroup.Item>
</ListGroup>
</div>
         </div>
         </div>
    )
}

export default Livraison
