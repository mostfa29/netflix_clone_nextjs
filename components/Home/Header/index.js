import Link from 'next/link'
import React from 'react'
import Header from '../../../shared/Header'
import styles from './Home.Header.module.css'

const lngs = [
  {
    id: 1,
    abbriviation: 'en',
    language:'English'
  },

    {
    id: 2,
    abbriviation: 'Fr',
    language:'French'
  },
    

]

function HomeHeader() {
  return (
      <div >
      <Header >
        <div className='flex justify-around' style={{margin:'auto'}}>
        <select className={`${styles.languageBox} h-10 flex justify-center flex-col `} name="languages" id="langs">
          {lngs.map((item) =>
  <option key={item.id} value={item.abbriviation}>{item.language}</option>
            )}
       
            </select>
          </div>
          <div className='flex justify-center' style={{margin:'auto'}}>
          
          <Link href="/Login">
            <button className='btn '>Sign In</button>
          </Link>
          </div>
      </Header>
    </div>
    
  )
}

export default HomeHeader