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
        <ul className="middle-nav">
          
          {
              middle_nav_links.map(link=>(
              <li className={currentRoute === link.url 
                ? "selected-sport" 
                : ""}>
                <a href={link.url} className='img-link' title={link.title}>
                <Image src={link.image} className="img-fuild" alt={link.title} width="76" height="76" />
              </a>
            </li>
          )
          )}
        </ul>
        <br/>
        <PopularEvents/>
        <br/>
      </Container>
      <Footer/>
    </main>
  )}

