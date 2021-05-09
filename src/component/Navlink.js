import axios from 'axios'
import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Navlink extends Component {
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
                {myData.map((data)=>{
                    return(
                        <div key={data.id}>
                           <Link  to={`/details/${data.title}`}>{data.title}</Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Navlink
