import React, { Fragment } from 'react';
import Navbar from '../components/navbar/Navbar.js';

const NavbarTest = () => {
    return (
        <Fragment>
            <div class="container">
                <h1>
                    Wellcome to Navbar Test
                </h1>
                <div className='row'>
                   <Navbar></Navbar>
                </div>
            </div>
        </Fragment>
    )
}

export default NavbarTest;