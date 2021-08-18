import React, {useState, useEffect}from 'react';
import './App.css';
import  CardList from '../components/CardList';
import  SearchInput from '../components/SearchInput';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll';


const App =()=>{

  const[robots,setRobots] = useState([]);
  const[searchField,setSearchField] = useState('');

 useEffect (()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => 
      response.json())
     .then(users =>{setRobots(users)});
  })

  const onChange1 =(event) =>{
    setSearchField(event.target.value)
  }

   const filteredRobots= robots.filter(robot =>{
     return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
   })
   return !robots.length? 
    <div>Loading</div>
   :
    <div className="App">
      <SearchInput change={onChange1}/>
      <Scroll>
        <ErrorBoundry>
            <CardList robots={filteredRobots}/>
         </ErrorBoundry>
      </Scroll>
    </div>
}

export default App;
