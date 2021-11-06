import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/header/Header'
import AbouteUse from './pages/abouteUse/AbouteUse'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import PortFolio from './pages/portfolio/PortFolio'
import Service from './pages/sevise/Service'

export default function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route  path="/" exact component={Home} />
        <Route path="/service" exact component={Service} />
        <Route path="/abouteUse" exact component={AbouteUse} />
        <Route path="/portfolio" exact component={PortFolio} />
        <Route path="/contact" exact component={Contact} />
        <Redirect to="/" exact component={Home}/>
      </Switch>
     
      <Footer/>
    </div>
  )
}
