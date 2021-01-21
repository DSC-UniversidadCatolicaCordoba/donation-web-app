import React, { useState } from 'react';
import './Navbar.css';

export const name = 20;


const Navbar = () => {

    // Hook
    // variable, funcion
    const [search, setSearch] = useState('');


    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    const handleKeyDonw = () => {
        console.log('Buscando');
        //TODO:
    }

    return (
        <div className='navbar align-items-center'>
            <div className='search-container'>
                <div className='row align-items-center'>
                    <div className='col-1 icon'>
                        <i className='fa fa-search'></i>
                    </div>
                    <div className='col-9'>
                        <input
                            className='search'
                            type='text'
                            placeholder='Buscar...'
                            name='search'
                            value={search}
                            onChange={handleSearch}
                            onKeyPress={(event) => {
                                if (event.key === 'Enter')
                                    return handleKeyDonw()
                                else
                                    return null
                            }}
                        />
                        <div className='col-1'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Navbar;