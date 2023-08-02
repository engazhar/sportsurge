import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Head from 'next/head'
const pop_events= [
    {
      id: 1,
      url: "link",
      title: "Formula 1 2023 - Belgium GP Live Stream",
      type: "formula-1",
      time: "07:30 AM ET"
    },
    {
      id: 2,
      url: "link",
      title: "Guadalajara vs Cincinnati Live Streams",
      type: "soccer",
      time: "07:30 AM ET",
      team_a: "Guadalajara",
      team_b: "Cincinnati"
    },
  
  ]
const PopularEvents = () => {
    return (
          <div className="popular-container">
            <div className="MobildeGizle">
              <Row className="Basliklar">
                <Col className="text-center">
                Event
                </Col>
                <Col className="MobildeGizle text-center">
                  League
                </Col>
                <Col className="text-center">
                TIME
                </Col>
                <Col className="text-center">
                WATCH
                </Col>
              </Row>
            </div>
              {
                pop_events.map(event=>(
                  <div key={event.id}>
                      {
                          event.type == 'formula-1'
                          ? <a href="#" title={event.title} className="row MaclariListele align-items-center align-content-center">
                            <Col lg={4} xs={6} className='d-flex align-items-center'>
                            <Image src="icon-f1.png" alt="formula-1-icon" className="responsive-img"/>
                            <div style={{color : '#fff', fontWeight : 'bold', marginLeft : '5px'}}>{event.title}</div>
                            </Col>
                            <Col lg={3} xs={2}  className='league-logo'>
                              <Image src="icon-f1.png" alt="formula-1-icon" className="responsive-img"/>
                            </Col>
                            <Col lg={3} xs={2}>
                            {event.time}
                            </Col>
                            <Col lg={2} xs={2} className='d-flex align-items-center'>
                            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAB/ElEQVRIie2VsWsUQRjF37d3np3FIQiCR25nj7vS4mIhiIgWaUxxSWUEsRELFQRrBUX/ApsUgkKCkQSLNFqoIIKg3n9wO7tgERDCgYiI7N08m1sYbG5ml02VV833mO/9+GaGXeBQByRx2aS1/gDgwqz8mmXZpV6v96sMOHDcd8xan6nX6xskXXuLg4MgWAWwn9cisqy1flgG7HTUAJAkyTmS7wA0ZhYBrCmlXhYBOx9XGIafSN6zLAHwTGu9WATsPHGuJEnWSd7Ia5J7jUZjsdVq7fnkeD+Q8Xh8i+THvBaRk1mWbY9Go6OVgvv9fjadTlcBpJZ9tlarrVcKBoBut7sfBMEAwO/cI3ktjuPbrhned2xLaz0AsGPlTElejqLozbzeUh8BpdRrkk8sqyYiG3EcR5WCZ/D7JHctqykim5WDi6o0WGv9SESWLWtMcm1eX9nHtQJg28qZAFhSSr2f11t44jRNTwN4YUEhInddoEDBiZMkOUHyG4BTlv1cKXXdNcN74uFweMQY8+o/6GdjzE2fHG9ws9l8KiLnLeu7iAw6nc7fysBxHN+x/0wA/gBYCcPwh08O4HHHWuuLAN4CqM8skrwSRdGWLxRwnDhN0wUAWxYUIvK4KNQZbIzZAXA8r0nuttvtB0WhzmAAP631l8lkclVETBnwoQ5M/wBTeLAZ7QRNBwAAAABJRU5ErkJggg==" alt="watch" className="responsive-img"/>
                            </Col>
                          </a>
                          :  <a key={event.id} href="#" title={event.title} className="row MaclariListele align-items-center align-content-center">
                              <Col lg={4} xs={6}>
                                <div className='d-flex align-items-center'>
                                  <Image src="427.png" alt="Guadalajara" className="responsive-img"/>
                                  <div style={{color : '#fff', fontWeight : 'bold', marginLeft : '5px'}}>{event.team_a}</div>
                                </div>
                                <br/>
                                <div className='d-flex align-items-center'>
                                  <Image src="3636.png" alt="formula-1-icon" className="responsive-img"/>
                                  <div style={{color : '#fff', fontWeight : 'bold', marginLeft : '5px'}}>{event.team_b}</div>
                                </div>
                            </Col>
                            <Col lg={3} xs={2} className='league-logo'>
                              <Image src="league_placeholder.png" alt="league cup" className="responsive-img"/>
                            </Col>
                            <Col lg={3} xs={2}>
                            <span className="live-btn">LIVE</span>
                            </Col>
                            <Col lg={2} xs={2} className='d-flex align-items-center ListelemeDuzen'>
                            <div className="btn btn-success btn-sm MobildeGizle">Watch</div>
                            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAB/ElEQVRIie2VsWsUQRjF37d3np3FIQiCR25nj7vS4mIhiIgWaUxxSWUEsRELFQRrBUX/ApsUgkKCkQSLNFqoIIKg3n9wO7tgERDCgYiI7N08m1sYbG5ml02VV833mO/9+GaGXeBQByRx2aS1/gDgwqz8mmXZpV6v96sMOHDcd8xan6nX6xskXXuLg4MgWAWwn9cisqy1flgG7HTUAJAkyTmS7wA0ZhYBrCmlXhYBOx9XGIafSN6zLAHwTGu9WATsPHGuJEnWSd7Ia5J7jUZjsdVq7fnkeD+Q8Xh8i+THvBaRk1mWbY9Go6OVgvv9fjadTlcBpJZ9tlarrVcKBoBut7sfBMEAwO/cI3ktjuPbrhned2xLaz0AsGPlTElejqLozbzeUh8BpdRrkk8sqyYiG3EcR5WCZ/D7JHctqykim5WDi6o0WGv9SESWLWtMcm1eX9nHtQJg28qZAFhSSr2f11t44jRNTwN4YUEhInddoEDBiZMkOUHyG4BTlv1cKXXdNcN74uFweMQY8+o/6GdjzE2fHG9ws9l8KiLnLeu7iAw6nc7fysBxHN+x/0wA/gBYCcPwh08O4HHHWuuLAN4CqM8skrwSRdGWLxRwnDhN0wUAWxYUIvK4KNQZbIzZAXA8r0nuttvtB0WhzmAAP631l8lkclVETBnwoQ5M/wBTeLAZ7QRNBwAAAABJRU5ErkJggg==" alt="watch" className="responsive-img deskdeGizle"/>
                            </Col>
                          </a>
                      }
                  </div>
                ))
              }
          </div>
    )
}

export default PopularEvents