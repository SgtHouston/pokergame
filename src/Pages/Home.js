import React from 'react'
import '../componentcss/Home.css'

function Home(){

    return(
        <div className='Home'>
            
            <h1 className='home-header'> TEXAS HOLD'EM POKER</h1>
            <h3 className='home-header'> CMH: SPECIAL EDITION</h3>
            <div className='home-options'>
                <a className='home-option' href="/bank">Bank</a>
                <a className='home-option' href="/table">Table</a>
            </div>
        </div>
    )
}

export default Home