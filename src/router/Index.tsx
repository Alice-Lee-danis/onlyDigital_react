import React from "react";
import { BrowserRouter, Route, Routes } from "../../node_modules/react-router-dom/dist/index";
import Home from "../components/Home";
import HistoricalEvents from "../pages/HistoricalEvents";

const Index = () => {
    return (
    <BrowserRouter>
       <Routes>
            <Route path='/' element={<Home />}>
                <Route index element={<HistoricalEvents/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}

export default Index