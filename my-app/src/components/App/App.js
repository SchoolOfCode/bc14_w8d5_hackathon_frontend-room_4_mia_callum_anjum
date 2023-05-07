import "./App.css";
import React from "react";
import SearchInput from "./SearchInput";
import { useEffect, useState } from "react";
import getStoreData from "./storeData";
import CardCollection from "./CardCollection";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function App() {
  const [myStoreData, setMyStoreData] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [filteredStoreData, setFilteredStoreData] = useState(null);



  useEffect(() => {
    const fetchMyStoreData = async () => {
      const data = await getStoreData();
      setMyStoreData(data);
    };
    fetchMyStoreData();
  }, []);

  function handleResetClick() {
    setInputValue("");
  }


  return (
    <div className="App">
      <header>
        <div className="App_heading">
        <h1>GorillE-Store</h1>

        <img src="https://t4.ftcdn.net/jpg/05/65/55/03/360_F_565550367_1dT0Pc6mghKERU7utRfm7IbwaTilDgOB.jpg" alt="Gorilla"/>
        </div>
          <div className = "App__header-shopping">
            <IconButton>
              <ShoppingCartIcon className="App__header-shopping-cart" />
            </IconButton>
          </div>
      </header>
      <main>
        <div className="main__search">
          <SearchInput inputValue={inputValue} setInputValue = {setInputValue} handleResetClick={handleResetClick}/>
        </div>
        <CardCollection myStoreData={myStoreData} setFilteredStoreData={setFilteredStoreData} inputValue={inputValue} />
      </main>
    </div>
  );
}

export default App;
