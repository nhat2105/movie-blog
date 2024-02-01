import React from 'react'

import { BrowserRouter} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

import Routes from '../routes/Routes'

const Layout = () => {
    return (
        <BrowserRouter>
            <Header/>
                <div className='container'>
                    <div className='main'>
                    <Routes/>
                    </div>
                </div>
            <Footer />
        </BrowserRouter>
    )
}

export default Layout