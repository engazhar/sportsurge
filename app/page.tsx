"use client"
import { Topnav } from '@/components'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

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

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Topnav/>

      <Container className="content">
        <Row>
          <Col xs={12} md={12} className='text-center'>
            <h1>Sportsurge</h1>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12} className='text-center'>
            <h3>What do you want to watch today?</h3>
            <p>Sportsurge helps fans from around the world watch their favorite games, events and more.</p>
          </Col>
        </Row>

        <Row>
          <Col xs={6} md={3} className='text-center pb-4'>
            <div className="item">
              <Link href="/basketball-streams">
                <Image src="basketball.png" alt="basketball" className="responsive-img" />
                <p className="button-sub-text flow-text">Basketball</p>
              </Link>
            </div>
          </Col>
          <Col xs={6} md={3} className='text-center pb-4'>
            <div className="item">
              <Link href="/baseball-streams">
                <Image src="baseball.png" alt="baseball" className="responsive-img" />
                <p className="button-sub-text flow-text">Baseball</p>
              </Link>
            </div>
          </Col>
          <Col xs={6} md={3} className='text-center pb-4'>
            <div className="item">
              <Link href="/hockey-streams">
                <Image src="hockey.png" alt="hockey" className="responsive-img" />
                <p className="button-sub-text flow-text">Hockey</p>
              </Link>
            </div>
          </Col>
          <Col xs={6} md={3} className='text-center pb-4'>
            <div className="item">
              <Link href="/soccer-streams">
                <Image src="soccer.png" alt="soccer" className="responsive-img" />
                <p className="button-sub-text flow-text">Soccer</p>
              </Link>
            </div>
          </Col>
          <Col xs={6} md={3} className='text-center pb-4'>
            <div className="item">
              <Link href="/nfl-streams">
                <Image src="football.png" alt="football" className="responsive-img" />
                <p className="button-sub-text flow-text">NFL</p>
              </Link>
            </div>
          </Col>
          <Col xs={6} md={3} className='text-center pb-4'>
            <div className="item">
              <Link href="/boxing-streams">
                <Image src="boxing.png" alt="boxing" className="responsive-img" />
                <p className="button-sub-text flow-text">Boxing</p>
              </Link>
            </div>
          </Col>
          <Col xs={6} md={3} className='text-center pb-4'>
            <div className="item">
              <Link href="/mma-streams">
                <Image src="mma.png" alt="MMA" className="responsive-img" />
                <p className="button-sub-text flow-text">MMA</p>
              </Link>
            </div>
          </Col>
          <Col xs={6} md={3} className='text-center pb-4'>
            <div className="item">
              <Link href="/formula-1-streams">
                <Image src="motorsports.png" alt="MMA" className="responsive-img" />
                <p className="button-sub-text flow-text">Motor Sports</p>
              </Link>
            </div>
          </Col>
        </Row>

        <Col xs={12} lg={12} xl={{ span: 10, offset: 1 } }>
          <h3>Today Popular Events</h3>
          <div className="popular-container">
            <div className="MobildeGizle">
              <Row className="Basliklar m-auto">
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

              {
                pop_events.map(event=>(
                  <div>
                      {
                          event.type == 'formula-1'
                          ? <a href="#" title={event.title} className="row MaclariListele align-items-center align-content-center">
                            <Col xs={4} className='d-flex align-items-center'>
                            <Image src="icon-f1.png" alt="formula-1-icon" className="responsive-img"/>
                            <div style={{color : '#fff', fontWeight : 'bold', marginLeft : '5px'}}>{event.title}</div>
                            </Col>
                            <Col xs={3} className='league-logo'>
                              <Image src="icon-f1.png" alt="formula-1-icon" className="responsive-img"/>
                            </Col>
                            <Col xs={3}>
                            {event.time}
                            </Col>
                            <Col xs={1}>
                            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAB/ElEQVRIie2VsWsUQRjF37d3np3FIQiCR25nj7vS4mIhiIgWaUxxSWUEsRELFQRrBUX/ApsUgkKCkQSLNFqoIIKg3n9wO7tgERDCgYiI7N08m1sYbG5ml02VV833mO/9+GaGXeBQByRx2aS1/gDgwqz8mmXZpV6v96sMOHDcd8xan6nX6xskXXuLg4MgWAWwn9cisqy1flgG7HTUAJAkyTmS7wA0ZhYBrCmlXhYBOx9XGIafSN6zLAHwTGu9WATsPHGuJEnWSd7Ia5J7jUZjsdVq7fnkeD+Q8Xh8i+THvBaRk1mWbY9Go6OVgvv9fjadTlcBpJZ9tlarrVcKBoBut7sfBMEAwO/cI3ktjuPbrhned2xLaz0AsGPlTElejqLozbzeUh8BpdRrkk8sqyYiG3EcR5WCZ/D7JHctqykim5WDi6o0WGv9SESWLWtMcm1eX9nHtQJg28qZAFhSSr2f11t44jRNTwN4YUEhInddoEDBiZMkOUHyG4BTlv1cKXXdNcN74uFweMQY8+o/6GdjzE2fHG9ws9l8KiLnLeu7iAw6nc7fysBxHN+x/0wA/gBYCcPwh08O4HHHWuuLAN4CqM8skrwSRdGWLxRwnDhN0wUAWxYUIvK4KNQZbIzZAXA8r0nuttvtB0WhzmAAP631l8lkclVETBnwoQ5M/wBTeLAZ7QRNBwAAAABJRU5ErkJggg==" alt="watch" className="responsive-img"/>
                            </Col>
                          </a>
                          :  <a href="#" title={event.title} className="row MaclariListele align-items-center align-content-center">
                              <Col xs={4}>
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
                            <Col xs={3} className='league-logo'>
                              <Image src="league_placeholder.png" alt="league cup" className="responsive-img"/>
                            </Col>
                            <Col xs={3}>
                            <span className="live-btn">LIVE</span>
                            </Col>
                            <Col xs={1}>
                            <div className="btn btn-success btn-sm MobildeGizle">Watch</div>
                            </Col>
                          </a>
                      }
                  </div>
                ))
              }
            </div>
          </div>
        </Col>
      </Container>

    </main>
  )
}
