import React, { useState } from "react";
import { useHistoryDateReducerSelector } from "../state/Hooks/historyDateReducerSelector";
import { IHistoryDate, IHistoryDates } from "../types/historyDateTypes";

const EventYears = () => {

    const {historyDates} = useHistoryDateReducerSelector(e=> e.ToDoReducer as IHistoryDates)

    const [historyDateMinState] = useState(()=>{
        return historyDates.reduce((a,b):IHistoryDate=>{
            return a.year < b.year ? a : b 
        })
    })

    const [historyDateMaxState] = useState(()=>{
        return historyDates.reduce((a,b):IHistoryDate=>{
            return a.year > b.year? a : b
        })
    })

    return (
       <div className="home-block__event-years">
           <p className="home-block__event-years__first">{historyDateMinState.year}</p>
           <p className="home-block__event-years__last">{historyDateMaxState.year}</p>
       </div>
    )
}

export default EventYears