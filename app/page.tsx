"use client"
import { Topnav } from '@/components'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

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
            </div>
          </div>
        </Col>
      </Container>

    </main>
  )
}
