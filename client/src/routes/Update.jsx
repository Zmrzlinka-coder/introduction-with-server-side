import React, { Component } from 'react'
import UpdateForm from '../components/UpdateForm'

export default class Update extends Component {
    constructor(){
        super()

    }
    render() {
        return (
            <div className='update-main'>
                <h1>Restaurant Update</h1>
                <UpdateForm>
                <form onSubmit={this.handleSubmit} className="form" id='data' >
            <div className="update-name-location-price">
              <input type="text" name="name" id="name-input" placeholder='enter name' onChange={(e)=>this.setState({name:e.target.value})}/>
            </div>
            <div className="update-name-location-price">
              <input type="text" name="location" id="location-input" placeholder='enter location' onChange={(e)=>this.setState({location:e.target.value})}/>
            </div>
            <div className="update-name-location-price">
            <select name='price' form="data" onChange={(e)=>this.setState({price:e.target.value})}>
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
            </div>
            <button type="submit">add</button>
          </form>
                </UpdateForm>
            </div>
        )
    }
}


