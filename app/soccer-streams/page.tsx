import { Topnav } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="main">
      <Topnav/>
      <div className="container content">
        <div className="row">
            <div className="col-md-12 text-center">
                <h1>Soccer Streams</h1>
            </div>
        </div>
      </div>
    </div>
  )
}
