import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Head from 'next/head'

const HeroHome = () => {
    return (
        <div>
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
        </div>
    )
}

export default HeroHome