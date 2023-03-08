import React, { Dispatch } from "react";
import { useHistoryDateReducerSelector } from "../state/Hooks/historyDateReducerSelector";
import { ToDoStateType, periodActivationCreators } from "../state/reducers/historyDateReducer/historyDateReducer";
import { useDispatch } from "react-redux";
import { IHistoryDates } from '../types/historyDateTypes'
import EventYears from "./EventYears";
const TimePeriod = () => {

    const {historyDates, isActive} = useHistoryDateReducerSelector(e=> e.ToDoReducer as IHistoryDates)
    const dispatch:Dispatch<ToDoStateType> = useDispatch()

    return (
       <div className="home-block__time-period-circle">
            <EventYears></EventYears>
            <div className="home-block__time-period-circle__correct-block">
                {
                    historyDates.map((item, index, arr)=>{
                        return <div key={index} className="home-block__time-period-circle__correct-block__event-radius-circle"
                            style={{
                            transform: `rotate(${(360/arr.length)*(index)}deg)`}}>
                                {index==isActive 
                                ? 
                                <button onClick={()=>{
                                    dispatch(periodActivationCreators(index));

                                }} className="home-block__time-period-circle__correct-block__event-radius-circle__event-circle"
                                style={{
                                    transform: ` translate(50%,-50%) rotate(-${(360/arr.length)*index}deg)`,}}>{index+1}
                                    <h1 className="home-block__time-period-circle__correct-block__event-radius-circle__event-content"
                                    style={{
                                        transform:(360/arr.length)*index<=60 || (360/arr.length)*index>=260?`translate(130%,-10%)`:`translate(-130%,-10%)`,}}>
                                    {item.title}</h1></button>
                                    :
                                    <button className="home-block__time-period-circle__correct-block__event-radius-circle__event-circle-noActive" onClick={()=>{
                                        dispatch(periodActivationCreators(index));
                                    }}>
                                </button>}
                        </div>
                    })}
            </div>
       </div>
    )
}

export default TimePeriod