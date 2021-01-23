import React from "react";

class AddRestaurant extends React.Component {
  constructor(props){
    super(props)
  this.state={
    name:null,
    location:null,
    price:1,
  };
  this.handleSubmit=this.handleSubmit.bind(this)
  }
  async handleSubmit(){
    let response=await fetch('http://localhost:3001/api/v1/restaurants',{
      method:'POST',
      headers:{
        'Content-Type':'application/json; charset=utf-8'
      },
      body:JSON.stringify(this.state)
    })
    let result =await response.json()
  }
  render(){
  return (
    <div className="AddSection">
      <form onSubmit={this.handleSubmit} className="form" id='data' >
            <div className="add-name-location-price">
              <input type="text" name="name" id="name-input" placeholder='enter name' onChange={(e)=>this.setState({name:e.target.value})}/>
            </div>
            <div className="add-name-location-price">
              <input type="text" name="location" id="location-input" placeholder='enter location' onChange={(e)=>this.setState({location:e.target.value})}/>
            </div>
            <div className="add-name-location-price">
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
    </div>
  );
  }
}

export default AddRestaurant;
