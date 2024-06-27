import '@styles/globals.css'
import { Children } from 'react'
export const metadata={
  title:"promptopia",
  description:"Discover and share ai prompt"
}

const Rootlayout = ({Children}) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient'/>
          <main className='app'>{Children}</main>
        </div>
      </body>
    </html>
  )
}

export default Rootlayout