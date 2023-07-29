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

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Head>
        <title>Sportsurge</title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
      <Topnav/>
      <Container className="content">
        <HeroHome/>
        <br/>
        <SportList/>
        <br/>
        <Col xs={12} lg={12} xl={{ span: 10, offset: 1 } }>
        <h3>Today Popular Events</h3>
        <PopularEvents/>
        <br/>
        <Blog/>
        <br/>
        <About/>
        </Col>
      </Container>
      <Footer/>
    </main>
  )
}
