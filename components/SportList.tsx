"use client"
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Head from 'next/head'

const SportList = () => {
    return (
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
        )
}

export default SportList