import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Details from './component/Details';
import Navlink from './component/Navlink';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       myData:[]
    }
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        this.setState({
            myData:res.data
        })
    })
}
  
  render() {
    const {myData} = this.state;
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Navlink />
            </Route>
            <Route path="/details/:title">
              <Details pets={myData} />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
