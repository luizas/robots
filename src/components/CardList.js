import React from 'react';
import Card from './Card';


const CardList = ({robots}) =>{
const cardComponent =  robots.map((robot,i) =>
    {
        return <Card name={robots[i].name} email={robot.email} id={i}/>
    });

 return(
     <div>
     {cardComponent}
     </div>
 )
}



export default CardList;