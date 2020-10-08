import React, {useState} from 'react';
import './Banner.css';
import {Button} from '@material-ui/core';
import DatePickerSearch from '../DatePickerSearch/DatePickerSearch';

function Banner() {
    const [showSearch,setshowSearch]=useState(false);
    return (
        <div className="banner">
            <div className="banner__search">
                
                <Button variant="outlined"  onClick={()=>(setshowSearch(!showSearch))} className="banner__searchButton">
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
                {showSearch && <DatePickerSearch/>}
            </div>
            <div className="banner__info">
                <h1>Get out and Strech your Imagination</h1>
                <h5>Plan the different Kind of gateway to explore gems nearby you</h5>
                <Button variant="outlined">Explore Nearby</Button>
            </div>

        </div>
    )
}

export default Banner
