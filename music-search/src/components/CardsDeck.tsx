import { RouteComponentProps } from "react-router-dom"
import Track from "../types/Track"
import { Row, Col, Card, } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface CardsDeckProps {
    tracks: Track[]
    isLoading: boolean
}

const CardsDeck = ({ history, location, tracks, isLoading }: RouteComponentProps & CardsDeckProps) => {

    return (
        < div id="cardsDeck" >
            {/* <Row id="deckHeader" >
                <h3>#THROWBACKTHURSDAY</h3>
            </Row> */}
            <Row>
                    {isLoading 
                    ? <h1>Loading...</h1>
                    : tracks.map(track => 
                        <>
                            <Col className='px-2 mb-4'>
                                <Card style={{ width: '18rem' }}>
                                    <Link to={'/Album/' + track.album.id}>
                                        <Card.Img variant="top" src={track.album.cover_medium} />
                                    </Link>
                                    <div className="card-play"></div>
                                    {/* <i class="fab fa-spotify"></i> */}
                                    <Card.Body className='card-body text-center p-3'>
                                        <Link to={'/TrackDetails/' + track.id}>
                                            <Card.Title><h5>{track.title}</h5></Card.Title>
                                        </Link> 
                                        <Card.Text className='card-text'>
                                            <Link to={'/Artist/' + track.artist.id}>
                                                <p>{track.artist.name}</p>
                                            </Link>
                                        </Card.Text>
                                        {/* <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                        </>
                        )}
            </Row>
        </div>
    )
}

export default CardsDeck