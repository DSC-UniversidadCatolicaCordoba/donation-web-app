import React, { useState } from 'react';
import '../NavBar/Navbar.css';
import searchLogo from '../../resources/images/search.png';
import userLogo from '../../resources/images/user.png'
import Menu from '../Menu/Menu'
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
            <div className="col-1 menuIcon">
            <Menu></Menu>
            </div>
            <div className='search-container'>
                <div className='row align-items-center'>
                    <div className='col-1 icon'>
                        <img src={searchLogo} className="searchLogo"></img>
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
            <div className="col-1 userIcon">
                <img src={userLogo} className="userLogo"></img>
            </div>
        </div>
    );

}

export default Navbar;