import { useEffect, useState } from "react"
import { RouteComponentProps } from "react-router-dom"
import ITrack from "../types/Track"
import { IArtist } from "../types/Track"
import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface TrackDetailsProps extends ITrack {
    available_countries: string[]
    contributors: IArtist[]
}

type TrackParams = {
    trackId: string
}
 
const TrackDetails = ({ match }: RouteComponentProps<TrackParams> & TrackDetailsProps) => {

    const [trkDetail, setTrkDetail] = useState<ITrack | null>(null)
    // const [Id, setId] = useState<{}>()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    // const trackId = match.params

    const fetchDetails = async (id: any) => {
        try {
            // let response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/track/${id}`, {
            //     "method": "GET",
            //     "headers": {
            //         "x-rapidapi-key": "4f2b4fc7famsh93c76e8131cfb62p18069djsnba1591647707",
            //         "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
            //     }})
          let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/track/${id}`)
          console.log(response);
    
          let data = await response.json()
          console.log(data)
          setTrkDetail(data)
          setIsLoading(false)
          
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {
        //   setId(match.params.trackId)
          fetchDetails(match.params.trackId)
    }, []);

    return (
        <>
            {isLoading || !trkDetail
                ? <h1>Loading...</h1>
                : 
                <>
                        <Card.Title><h1>{trkDetail.title}</h1></Card.Title>
                        < div id="cardDetail" >
                <Card >
                    <Row>
                            <Col>
                                <Link to={'/Album/' + trkDetail.album.id}>
                                    <Card.Img variant="top" src={trkDetail.album.cover_big} />
                                </Link>
                            </Col>
                        <Col>
                            <Card.Text>
                                <p>Album: <small>{trkDetail.album.title}</small></p>
                                <p>Release Date: <small>{trkDetail.release_date}</small></p>
                                <p>Track Duration: <small>{trkDetail.duration} sec</small></p>
                                <p>Track Position: <small>{trkDetail.track_position}</small></p>
                                <p>Bpm: <small>{trkDetail.bpm}</small></p>
                                <p>Rank: <small>{trkDetail.rank}</small></p>
                            </Card.Text>
                        </Col>
                    </Row>
                    <div className="card-play"></div>
                    {/* <i class="fab fa-spotify"></i> */}
                    <hr/>
                    <Card.Title><h2>Artist</h2></Card.Title>
                    <Card.Body className='card-body text-center p-3'>
                        <Card.Text className='card-text'>
                                <Row>
                                    <Col>
                                        <Link to={'/Artist/' + trkDetail.artist.id}>
                                            <p>{trkDetail.artist.name}</p>
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Card.Img src={trkDetail.artist.picture_medium} />
                                    </Col>
                                </Row>
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
                </div>
                </>
            }
        </>
    );
}
 
export default TrackDetails;