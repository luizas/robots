import React from 'react';

const SearchInput = ({change}) =>{
    return(
        <div className='pa2'>
            <input placeholder='search' type='search' onChange={change}/>
        </div>
    )

}
export default SearchInput;