import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Projets() {
    return ( <div style = {{ display: 'flex' } } >
        <Card style = {
            { width: '18rem' } }
        className = 'ms-5 mt-5' >
        <Card.Body >
        <Card.Title > site web(e - commerce) </Card.Title> <Card.Text >
        <b > Technologies: </b> 
        <ul>
        <li > Html </li> <li > Css </li> <li > wordpress </li> <li > Mysql </li> </ul> <p > < b > Date: </b> 2022</p >
        </Card.Text> <Button className = 'mt-3'disabled variant = "primary" > Voir projet </Button> </Card.Body> </Card>
        <Card style = {{ width: '18rem' } } className = 'ms-5 mt-5' >
        <Card.Body >
        <Card.Title > Application desktop(Gestion cabinet dentaire) </Card.Title> <Card.Text >
        <b> Technologies: </b> <ul >
        <li > c# </li> <li > window form </li> <li > Mysql </li> </ul> <p > < b > Date: </b> 2023</p >
        </Card.Text> <Button className = 'mt-4' disabled variant = "primary" > Voir projet </Button> 
        </Card.Body> </Card> <Card style = {{ width: '18rem' } } className = 'ms-5 mt-5' >
        <Card.Body >
        <Card.Title > Application desktop(Gestion Salle de sport) </Card.Title> <Card.Text >
        <b> Technologies: </b> <ul >
        <li > Java </li> 
        <li > Mysql </li> </ul> <p > < b > Date: </b> 2023</p >
        </Card.Text> <Button className = 'mt-3' disabled variant = "primary" > Voir projet </Button> </Card.Body>
         </Card>
          {/* <Card style = {{ width: '18rem' } } className = 'ms-5 mt-5' >
        <Card.Body >
        <Card.Title > Application web(Recette Cuisine) </Card.Title>
         <Card.Text >
        <b > Technologies: </b> 
        <ul >
        <li > Django <li> <li > Mysql < li> 
        </ul> <p > < b > Date: </b> 2023</p >
        </Card.Text> 
         <Button className = 'mt-5' disabled variant = "primary" > Voir projet(en cours...) </Button> 
        </Card.Body>
         </Card>
         <Card style = {{ width: '18rem' } }className = 'ms-5 me-5 mt-5' >
        <Card.Body >
        <Card.Title > Application web(Reservation des terrains) </Card.Title> 
        <Card.Text >
        <b > Technologies: < b> <ul >
        <li > spring boot </li> <li > React js </li> <li > Mysql </li> </ul> <p > <b> Date: </b> 2023</p >
        </Card.Text> < Button href = 'https://front-web-field-reservation.vercel.app/owner'target = '_blank'variant = "primary" > Voir projet(en cours...) </Button> </Card.Body> 
        </Card> </div>*/}
        </div>
        

    );
}

export default Projets;