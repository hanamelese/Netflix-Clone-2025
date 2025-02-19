import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import RowList from '../../components/Rows/RowList/RowList'
import { HashRouter as Router, Switch } from 'react-router-dom';

// import { BrowserRouter as Router,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Row from '../../components/Rows/Row/Row'
import NewList from '../../components/newList/newList'

const Home = () => {
  
  return (
    <Router>
    <div className="App">
<Header />
<div className='content'>
<Switch>
      <Router exact path="/">
         <Banner />
      </Router>
      
        
  
      <Router path="/Row">
       <Row/>
      </Router>
      <Router path="/newList">
       <NewList/>
      </Router>
  
  </Switch>
  
</div>
</div>
<RowList />
<Footer />
</Router>

  )
  
}

export default Home
