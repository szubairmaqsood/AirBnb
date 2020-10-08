import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner'

export default function Home() {
    return (
        //BEM Naming Convention for class Name
        <div className="home">
            
            <Banner></Banner>
        </div>
    )
}
