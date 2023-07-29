"use client"
import { Footer, HeroHome, PopularEvents, SportList, Topnav } from '@/components'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Head from 'next/head'
import About from '@/components/About';
import Blog from '@/components/Blog';
import { usePathname } from 'next/navigation';

const middle_nav_links = [
  {
    id: "1",
    title: "Soccer",
    url: "/soccer-streams",
    image: "soccer-icon.png"
  },
  {
    id: "2",
    title: "Basket Ball",
    url: "#",
    image: "basketball-icon.png"
  },
  {
    id: "3",
    title: "Hockey",
    url: "#",
    image: "hockey-icon.png"
  },
  {
    id: "4",
    title: "Formula 1",
    url: "#",
    image: "formula-1-icon.png"
  },
  {
    id: "5",
    title: "MMA",
    url: "#",
    image: "mma-icon.png"
  },
  {
    id: "6",
    title: "NFL",
    url: "#",
    image: "football-icon.png"
  },
  {
    id: "7",
    title: "Boxing",
    url: "#",
    image: "boxing-icon.png"
  }
]



export default function SoccerStream() {
  const currentRoute = usePathname();
  return (
    <main>
      <Topnav/>
      <br/>
      <div className='page-poster'>
        <Container className="content">
          <Row>
            <Col xs="10" className="d-flex justify-content-between">
              <h2 className="UstBasliklar">OFFICIAL REDDIT SOCCER STREAMS</h2>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
      <Col xs={12} lg={12} xl={{ span: 10, offset: 1 } }>
        <ul className="middle-nav">
          
          {
            middle_nav_links.map(link=>(
              <li key={link.id} className={currentRoute === link.url 
                ? "selected-sport" 
                : ""}>
                <a href={link.url} className='img-link' title={link.title}>
                  <Image src={link.image} className="img-fuild responsive-img" alt={link.title}/>
                </a>
              </li>
            )
          )}
        </ul>
        <br/>
        <PopularEvents/>
        <br/>
        <Row>
          <h1><strong>Reddit SOCCER Streams</strong></h1>
          <h2><strong>Watch SOCCER on Sportsurge Streams</strong></h2>
          <p>Sportsurge is an aggregator that allows SOCCER fans to watch all the SOCCER games in one place. Each match is available in multiple viewing streams. This gives you the opportunity to enjoy a match in HD, if your internet connection is strong enough, or watch it in a lower quality stream if your connection speeds are slow.</p>
          <p>If you are looking for a more personalized experience, you can set up alerts for upcoming games and get notified when they are broadcasted. You can also choose from different commentators and styles of commentary. These features make it easy to find your perfect viewing experience for every SOCCER match.</p>
          <h2>SOCCER Streams on Sportsurge</h2>
          <p>Sportsurge is a live streaming platform that allow you to watch SOCCER games on your phone.</p>
          <h2>Watch All Your Favorite Sports With Sportsurge</h2>
          <p>Sportsurge is an online platform for watching live games on any device.</p>
          <p>The site provides an incredible viewing experience of the game. With its broadcast quality, it's like you're watching the game at home on TV - but you're not.</p>
          <p>We'll cover every major sport, with the most popular games listed first. So no matter what sport you love, we’ve got it covered for you!</p>
          <p>Sportsurge is an app that lets you view sports games in real time, with no ads at all. You can watch any game from any league, whether its NBA or MLB or NHL or NFL, with just one click of the mouse.</p>
          <p>Sportsurge is the only live game streaming service that broadcasts all major sports in HD quality, with no ads.</p>
          <p>Nowadays, SOCCER live streams are an important part of the fan experience. Fans can now watch their favorite teams on any device, regardless of location.</p>
          <h2>Reddit Live SOCCER Streams</h2>
          <p>SOCCER streams are a great way to watch games. The SOCCER has been experimenting with streaming the games on various platforms and it is showing promising results.</p>
      </Row>
      </Col>
      </Container>
      <Footer/>
    </main>
  )}

