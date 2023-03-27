import React from 'react'
import Header from './components/Header'
import Contact from './components/Contact'
import Blog from './components/Blog'
import About from './components/About'
import Home from './components/Home'
import Services from './components/Services'
import Notfound from './components/Notfound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blogparent from './Blogparent'
import "./routing.css"
import Singleblog from './Singleblog'

function App() {
    return (
        <>
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/Home' element={<Home />}></Route>
                    <Route path='/Contact' element={<Contact />}></Route>
                    <Route path='/About' element={<About />}></Route>
                    <Route path='/Services' element={<Services />}></Route>
                    <Route path='/Blog' element={<Blogparent />}>
                        <Route index element={<Blog />}></Route>
                        <Route path=':id' element={<Singleblog/>}></Route>
                    </Route>
                    <Route path='*' element={<Notfound />}></Route>

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App