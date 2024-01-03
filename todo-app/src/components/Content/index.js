import React from 'react'
import Footer from '../ContentFooter'
import List from './List'
function Content() {
  return (
    <>
        <section className='main'>
        <input type="checkbox" name="" className='toggle-all' id="" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        
        <List/>
        

    </section>
    <Footer/>
    </>
  )
}

export default Content