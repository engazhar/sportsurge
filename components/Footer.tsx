"use client"
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Head from 'next/head'

const Footer = () => {
    return (
        <footer style={{paddingTop : '5px', backgroundColor : '#101010'}}>
            <Container>
            <Row className="justify-content-center">
                <Col xs={12} className="text-center">
                <p className="notice" style={{paddingTop : '10px', paddingBottom : '10px'}}>Copyright © 2018 - 2023 Sportsruge. All Rights Reserved</p>
                </Col>
            </Row>
            </Container>
        </footer>
    )
}

export default Footer





