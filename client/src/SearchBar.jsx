import { useState, useEffect } from 'react'
import './App.css'
import './SearchBar.css';
//import axios from "axios"
import React from 'react'


import {FaSearch} from "react-icons/fa";
 
  export const SearchBar = () => {
      const [input, setInput] = useState("");

      const fetchData = (value) =>  {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          const results = json.filter ((user) => {
            return (
            value && 
            user && 
            user.name && 
            user.name.toLowerCase().includes(value)
            );
          });
          console.log(results);
          
        });
      };

      const handleChange = (value) => {
        setInput(value)
        fetchData(value)
      };
      return (
      <div className = "searchbar" >
          <FaSearch id = "search-icon" />
          <input 
            placeholder = "Find: " 
            value = {input} 
            onChange = {(e) => handleChange(e.target.value)}
          />


      </div>
    );
  };

  export default SearchBar;