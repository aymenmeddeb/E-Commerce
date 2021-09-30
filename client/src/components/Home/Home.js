import React from 'react'
import './home.css'
import { Container, Row, Col, Card } from 'react-bootstrap'





function Home() {

  return (
    <div>
<div className="margimg">
        <div className="grid-wrapper">
	<div>
		<img src="https://d2yac1vwzyjed0.cloudfront.net/photos/23522/52403/front_big_zoom_W1315G2.jpg" alt="" />
	</div>
	<div className="wide">
		<img src="https://previews.123rf.com/images/norgal/norgal2004/norgal200400047/145501784-.jpg" alt="" />
	</div>
	
	<div className="tall">
		<img src="https://d2yac1vwzyjed0.cloudfront.net/photos/15881/29037/front_big_zoom_W0668G3.png" alt="" />
	</div>
	<div>
		<img src="https://vaubecour.com/wp-content/uploads/2021/01/chemises.jpg.webp" alt="" />
	</div>
	<div>
		<img src="https://www.lamaisondelhomme.fr/wp-content/uploads/2014/07/chemise_dm_simple.jpg" alt="" />
	</div>
	<div>
		<img src="https://is-moda.com/2273-large_default/pret-a-porterchaussures-business-brun-finition-main.jpg" alt="" />
	</div>
	<div>
		<img src="https://www.lecoqsportif.com/media/images/products/2121042/2121042_1.jpg" alt="" />
	</div>
	<div className="wide">
		<img src="https://photos6.spartoo.com/photos/176/17682807/17682807_500_A.jpg" alt="" />
	</div>	
	<div>
		<img src="https://menubesttop.com/wp-content/uploads/2020/03/MacBook-Pro-13-pouces-1160x653.jpg" alt="" />
	</div>
	<div className="wide">
		<img src="https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/2/d/8/2d81f43362_50163924_camera.jpg" alt="" />
	</div>
	<div className="big">
		<img src="https://ae01.alicdn.com/kf/Ue3ffe5b3c7f04c729acd0e8d2094cb3dx/T-l-phone-portable-i13-Pro-android-10-Version-globale-4-cam-ras-8-go-256.jpg_q50.jpg" alt="" />
	</div>
	<div>
		<img src="https://cdn.mos.cms.futurecdn.net/mVEhQU5grHExywfQsDoAYj-1024-80.jpg.webp" alt="" />
	</div>
	<div className="big">
		<img src="https://pic.clubic.com/v1/images/1836653/raw?fit=smartCrop&width=550&height=450&hash=b683db2851589498a4d4c50c80b900b4ddf4c1d7" alt="" />
	</div>
	<div>
		<img src="https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/063/1.jpg?6664" alt="" />
	</div>
	<div className="wide">
		<img src="https://file1.pleinevie.fr/var/pleinevie/storage/images/article/electromenager-apprenez-a-le-faire-durer-14875/93407-3-fre-FR/Electromenager-apprenez-a-le-faire-durer.jpg?alias=width400&size=x100&format=jpeg" alt="" />
	</div>
</div>
        <Container>
          <Row>
            <Col><Card>
              <Card.Body style={{textAlign:"center"}}>
              <img  src="https://shoes.makerfy.tn/wp-content/uploads/sites/217/2020/08/freeshipping.png" className="attachment-full size-full" alt="" loading="lazy" style={{width:"75px"}}/>
           <br/>
		        <Card.Title>LIVRAISON RAPIDE </Card.Title>
                <Card.Text>

Nous livrons votre commande dans un delai qui ne depasse pas les 48h.
                </Card.Text>
              </Card.Body>
            </Card></Col>
            <Col><Card>
              <Card.Body style={{textAlign:"center"}}>
              <img  src="https://shoes.makerfy.tn/wp-content/uploads/sites/217/2020/08/loyalty-customer.png" class="attachment-full size-full" alt="" loading="lazy" style={{width:"75px"}}/>
			  <br/>    <Card.Title>Des conseils personnalisés  </Card.Title>
                <Card.Text>
                Et comme chaque client est unique, vous recevrez les conseils de nos experts  adaptés à votre morphologie, mode de vie et style vestimentaire.

                </Card.Text>
              </Card.Body>
            </Card></Col>
            <Col><Card>
              <Card.Body style={{textAlign:"center"}}>
			  <img  src="https://shoes.makerfy.tn/wp-content/uploads/sites/217/2020/08/money-back.png" className="featured-img"  alt="" loading="lazy" style={{width:"65px"}}/>
              <br/>
			    <Card.Title>30 jours satisfait ou remboursé  </Card.Title>
                <Card.Text>
				100% satisfaction guaranteed, or get your money back within 30 days!.
                </Card.Text>
              </Card.Body>
            </Card></Col>
          </Row>
        </Container>
      </div>

    </div>


  )
}

export default Home
