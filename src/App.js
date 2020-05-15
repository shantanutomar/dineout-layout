import React from 'react';
import './App.css';
import foodItemsData from "./data.json";
import DineoutItem from "./Components/DineoutItem";

const App = () => {
  
  const renderFoodItems = () => {
    console.log('foodItemsData.data', foodItemsData.data);
    return foodItemsData.data.map(item => {
      return (
        <DineoutItem key={item.id} imagePath={item.imagePath} name={item.name} 
        location={item.location} discount={item.discount}/>
      )
    });
  }

  return (
    <div className="App">
      <div className="all-food-items">
        {renderFoodItems()}
      </div>
    </div>
  );
}

export default App;
