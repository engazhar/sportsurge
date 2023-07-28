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

const sport_blogs =[
  {
    url: "#",
    title: '10 Top Female MMA Fighters in 2023',
    excerpt: "Mixed Martial Arts (MMA) has gone a long way since its start, and female competitors have made their mark in the sport in recent years. The female MMA scene is more dynamic and fascinating than ever as we enter 2023. We will talk about the fin",
    image: "https://sportsurge.club/_next/image?url=https%3A%2F%2Fscdn.dev%2Fimages%2Fblog%2F10-top-female-mma-fighters-in-2023.webp&w=640&q=75"
  },
  {
    url: "#",
    title: '10 Top Female MMA Fighters in 2023',
    excerpt: "Mixed Martial Arts (MMA) has gone a long way since its start, and female competitors have made their mark in the sport in recent years. The female MMA scene is more dynamic and fascinating than ever as we enter 2023. We will talk about the fin",
    image: "https://sportsurge.club/_next/image?url=https%3A%2F%2Fscdn.dev%2Fimages%2Fblog%2F10-top-female-mma-fighters-in-2023.webp&w=640&q=75"
  },
  {
    url: "#",
    title: '10 Top Female MMA Fighters in 2023',
    excerpt: "Mixed Martial Arts (MMA) has gone a long way since its start, and female competitors have made their mark in the sport in recent years. The female MMA scene is more dynamic and fascinating than ever as we enter 2023. We will talk about the fin",
    image: "https://sportsurge.club/_next/image?url=https%3A%2F%2Fscdn.dev%2Fimages%2Fblog%2F10-top-female-mma-fighters-in-2023.webp&w=640&q=75"
  }

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
                  <div>
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
                          :  <a href="#" title={event.title} className="row MaclariListele align-items-center align-content-center">
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
        </Col>
        <br/>
        <Row>
        {
          sport_blogs.map(blog=>(
              <Col md={4} xs={12}>
                  <a className="card bg-dark blog-item">
                    <div>
                      <Image src="blog1.png" className="card-img-top"/>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">{blog.title}</h4>
                      <p className="card-text">{blog.excerpt}</p>
                    </div>
                  </a>
              </Col>
          ))
        }
        </Row>
        <p>
        In the exhilarating world of sports, every slam dunk, every touchdown, every home run, and every knockout is a moment of sheer thrill. At Sportsurge, we resonate with this electrifying passion and are dedicated to delivering top-notch live sports streams, ensuring you're always part of the action.
        </p>
        <p>
        Welcome to Sportsurge, a leading platform that brings you free, live streaming of NBA, NFL, NHL, MLB, MMA, and Boxing events. As the trusted backup of Reddit's bustling sports streaming communities, we're committed to delivering high-definition, uninterrupted live streams to sports enthusiasts across the globe.
        </p>
        <p>
        Sportsurge is more than just a streaming platform; it's a comprehensive sports hub designed for fans, by fans. Whether you're an NBA fan eager to watch the latest games, an NFL enthusiast tracking your favorite team, a hockey aficionado looking for NHL action, or a baseball devotee searching for MLB streams, we've got you covered. And for those who love the intensity of MMA and Boxing, we bring you live streams of major events from around the world.
        </p>
        <p>
        Our platform stands out for its unparalleled accessibility. We cater not only to fans but also to players, coaches, and sports industry professionals. With Sportsurge, you can enjoy a wide array of live streaming options without any blackouts or restrictions. This means you can catch your favorite games on any device - be it a desktop, mobile phone, tablet, or TV - anytime, anywhere.
        </p>
        <p>
        But we don't stop at live streaming. Sportsurge is your go-to destination for the latest sports news, match schedules, and in-depth analysis of all the sports we cover. We aim to keep you informed, engaged, and connected to the pulse of the sports world.
        </p>
        <p>
        Quality is at the heart of what we do. That's why we ensure all our streams are in HD, allowing you to experience every game in stunning detail. With Sportsurge, you're not just watching the game; you're immersing yourself in the action. Our high-definition streams bring you closer to the action, letting you see every strategy, every move, and every triumph as if you were there in the stadium.
        </p>
        <p>
        We believe that sports should be accessible to all. That's why we offer our services for free. With Sportsurge, you can enjoy live sports online without the need for expensive cable subscriptions. We're committed to making sports more accessible, breaking down barriers, and bringing the action closer to you.
        </p>
        <p>
        In conclusion, if you're a sports fan seeking a reliable, high-quality platform for live sports streams, Sportsurge is your perfect match. With our extensive sports coverage, user-friendly platform, and unwavering commitment to quality, we're confident we can provide you with an unparalleled viewing experience. Join the Sportsurge family today and elevate your sports viewing experience to new heights!
        </p>
      </Container>
        <footer style={{paddingTop : '5px', backgroundColor : '#101010'}}>
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} className="text-center">
                <p className="notice" style={{paddingTop : '10px', paddingBottom : '10px'}}>Copyright © 2018 - 2023 Sportsruge. All Rights Reserved</p>
              </Col>
            </Row>
          </Container>
        </footer>
    </main>
  )
}
