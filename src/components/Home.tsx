import React, { useState } from "react";
import { Outlet} from "react-router-dom";
import HistoricalEvents from "../pages/HistoricalEvents";

const Home = () => {

    const [titleState] = useState('Исторические даты')

    return (
       <div className="home-block">
            <div className="home-block__vertical-line"></div>
            <h1 className="home-block__titile">{titleState}</h1>
            <Outlet></Outlet>
       </div>
    )
}

export default Home