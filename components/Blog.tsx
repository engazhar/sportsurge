"use client"
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Head from 'next/head'
const sport_blogs =[
    {
      id: 1,
      url: "#",
      title: '10 Top Female MMA Fighters in 2023',
      excerpt: "Mixed Martial Arts (MMA) has gone a long way since its start, and female competitors have made their mark in the sport in recent years. The female MMA scene is more dynamic and fascinating than ever as we enter 2023. We will talk about the fin",
      image: "https://sportsurge.club/_next/image?url=https%3A%2F%2Fscdn.dev%2Fimages%2Fblog%2F10-top-female-mma-fighters-in-2023.webp&w=640&q=75"
    },
    {
      id: 2,
      url: "#",
      title: '10 Top Female MMA Fighters in 2023',
      excerpt: "Mixed Martial Arts (MMA) has gone a long way since its start, and female competitors have made their mark in the sport in recent years. The female MMA scene is more dynamic and fascinating than ever as we enter 2023. We will talk about the fin",
      image: "https://sportsurge.club/_next/image?url=https%3A%2F%2Fscdn.dev%2Fimages%2Fblog%2F10-top-female-mma-fighters-in-2023.webp&w=640&q=75"
    },
    {
      id: 3,
      url: "#",
      title: '10 Top Female MMA Fighters in 2023',
      excerpt: "Mixed Martial Arts (MMA) has gone a long way since its start, and female competitors have made their mark in the sport in recent years. The female MMA scene is more dynamic and fascinating than ever as we enter 2023. We will talk about the fin",
      image: "https://sportsurge.club/_next/image?url=https%3A%2F%2Fscdn.dev%2Fimages%2Fblog%2F10-top-female-mma-fighters-in-2023.webp&w=640&q=75"
    }
  
  ]
const Blog = () => {
    return (
        <Row>
        {
          sport_blogs.map(blog=>(
              <Col key={blog.id} md={4} xs={12}>
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
    )
}

export default Blog