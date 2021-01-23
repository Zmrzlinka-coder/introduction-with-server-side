import React, { Component } from "react";
import AddRestaurant from "../components/AddRestaurant";
import Header from "../components/Header";
import "../style/home.css";
import RestaurantList from "../components/RestaurantList";
import { useHistory } from "react-router-dom";

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
    get:{data: []}
  };
  this.clickHandler=this.clickHandler.bind(this)
  }
  async componentDidMount() {
    let response = await fetch('http://localhost:3001/api/v1/restaurants')
    let data = await response.json()
    this.setState({
      get:{data:data.restaurants}
    })
  }
  async clickHandler(id){
    let result= this.state.get.data.filter(el=>{
      return el.id!==id})
      this.setState({
        get:{data:result}
      })
    await fetch(`http://localhost:3001/api/v1/restaurants/${id}`,{
     method:"DELETE"
    })
    }
  render() {
    return (
      <div className="home-page">
        <Header>
          <h1>Restaurant Finder</h1>
        </Header>
        <AddRestaurant />
        <RestaurantList>
        <table className="table" cellPadding="30" cellSpacing="0">
          <thead className="table-header">
            <tr className="tr-head">
              <th className="one-table-header">Name</th>
              <th className="one-table-header">Location</th>
              <th className="one-table-header">Price Range</th>
              <th className="one-table-header">Ratings</th>
              <th className="one-table-header">Update</th>
              <th className="one-table-header">Delete</th>
            </tr>
          </thead>
          <tbody className="table-body">
            { this.state.get.data.map(restaurant=>(
            <tr className="tr-body" key={restaurant.id}>
              <td className="one-table-section">{restaurant.name}</td>
              <td className="one-table-section">{restaurant.location}</td>
              <td className="one-table-section">{'$'.repeat(restaurant.price_range)}</td>
              <td className="one-table-section"></td>
              <td className="one-table-section">
                <button  type="submit" className="update-btn">
                  Update
                </button>
              </td>
              <td className="one-table-section">
                <button onClick={()=>this.clickHandler(restaurant.id)} type="submit" className="delete-btn">
                  Delete
                </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
        </RestaurantList>
      </div>
    );
  }
}

export default Home;
