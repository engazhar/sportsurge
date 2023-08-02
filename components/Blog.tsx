import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Head from 'next/head'
import { useEffect, useState } from "react";

export default function Blog() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://strapp.store/sportsurge/blog");
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);
  console.log(data)
  return (
    <div>
      {/* Display the fetched data */}
      {data && <p>{data}</p>}
    </div>
  );
}