import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { usePathname } from 'next/navigation';


const links = [
    {
        id: 1,
        title: 'Soccer Streams',
        url: '/soccer-streams'
    },
    {
        id: 2,
        title: 'NBA Stream',
        url: '/nba-streams'
    },
    {
        id: 3,
        title: 'MLB Streams',
        url: '/mlb-streams'
    },
    {
        id: 4,
        title: 'Soccer Stream',
        url: '/soccer-stream'
    },
    {
        id: 5,
        title: 'NHL Streams',
        url: '/nhl-streams'
    },
    {
        id: 6,
        title: 'MMA Streams',
        url: '/mma-streams'
    },
    {
        id: 7,
        title: 'Boxing Streams',
        url: '/boxing-streams'
    },
    {
        id: 8,
        title: 'Formula 1 Streams',
        url: '/formula-1-streams'
    },
    {
        id: 9,
        title: 'MLS Streams',
        url: '/mls-streams'
    },
    {
        id: 10,
        title: 'Cricket',
        url: '/cricket-streams'
    },
    {
        id: 11,
        title: 'NCAA',
        url: '/ncaa-streams'
    },
    {
        id: 12,
        title: 'CFB',
        url: '/cfb-streams'
    },
    {
        id: 13,
        title: 'WWE',
        url: '/wwe-streams'
    },
    {
        id: 14,
        title: 'Golf',
        url: '/golf-streams'
    }
]

const Topnav = () => {
    const currentRoute = usePathname();
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className='justify-content-between'>
          <Navbar.Brand href="/"><Image src="sportsurge.png" alt="Sportsurge" / ></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            {
                links.map(link=>(
                    <Nav.Link className={currentRoute === link.url 
                        ? "selected" 
                        : ""} key={link.id} href={link.url}>{link.title}</Nav.Link>
                ))
            }
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
}

export default Topnav