"use client"
import { Footer, HeroHome, PopularEvents, SportList, Topnav } from '@/components'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Head from 'next/head'
import { usePathname, useSearchParams } from 'next/navigation'
 
export default function DynamicPage() {
  const pathname = usePathname()
  let parts = pathname.split("/");
  return (
    <main>
      <Topnav/>
    </main>
  )
}