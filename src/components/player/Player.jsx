import { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import './player.css'

function Player() {

    const [clientes, setClientes] = useState([]);

    function cargaDatos() {
        let url = "https://randomuser.me/api?results=100";
        let opciones = { method: "GET" };

        fetch(url, opciones)
            .then(r => r.json())
            //.then(respuesta => console.log(respuesta.results))
            .then(respuesta => setClientes(respuesta.results))
            .catch(m => console.log(m))

    }

    useEffect(() => {
        cargaDatos();
    }, [])

    let cards = clientes.map(cliente => {

        return (
            
            <Col className='col-custom'>
                <Card className='card-custom'>
                    <Card.Img variant="top" src={cliente.picture.medium} />
                    <Card.Body>
                        <Card.Title>{cliente.name.title + " " + cliente.name.first + " " + cliente.name.last}</Card.Title>
                        <Card.Text>
                            {cliente.location.city + " (" + cliente.location.country + ")"}
                        </Card.Text>
                        <Button variant="dark">+ info</Button>
                    </Card.Body>
                </Card>
            </Col>
           
        )


    })


    return (
        <>
            <Row>
                {cards}
            </Row>

        </>
    )
}


export default Player;