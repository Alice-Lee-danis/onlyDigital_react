import React, { Dispatch, useState } from "react";
import { Navigation, Pagination } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import '../../node_modules/swiper/swiper.css';
import '../../node_modules/swiper/modules/navigation/navigation.scss'
import { useHistoryDateReducerSelector } from "../state/Hooks/historyDateReducerSelector";
import { ToDoStateType, periodActivationCreators } from "../state/reducers/historyDateReducer/historyDateReducer";
import { useDispatch } from "react-redux";
import { IHistoryDates } from '../types/historyDateTypes'
import PageProgress from "./pageProgress";

function SliderPeriod(): JSX.Element {

    const {historyDates} = useHistoryDateReducerSelector(e=> e.ToDoReducer as IHistoryDates)
    const dispatch:Dispatch<ToDoStateType> = useDispatch()
    const [pageState, setPageState] = useState<number>(0);

    return (
     <div className="home-block__slider-footer">
        <Swiper
            slidesPerView={document.documentElement.clientWidth> 385? 3 : 2}
            pagination={{
            type: "fraction"
        }}

        onSlideChange={(item) => {
            setPageState(item.activeIndex)
        }}

        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }}
     
        modules={[Pagination, Navigation, Navigation]}
        className="mySwiper"
        >
        <div className="home-block__slider-footer__pagination">
            <button className="swiper-button-next swiper-button-next-first"></button>
            <button className="swiper-button-prev"></button>
        </div>

        <button className="swiper-button-next swiper-button-next-second"></button>
        {
            historyDates.map((item, index, arr)=>{
                return <SwiperSlide key={index}
                onClick={()=>{
                    dispatch(periodActivationCreators(index));
                }}>
                    <h1>{item.year}</h1>
                    <p>{item.content}</p>
                </SwiperSlide>
            })
        }

        <div className="PageProgressBlock">
            {
                historyDates.map((item, index)=>{
                    return <PageProgress key={index} isActive={(pageState) == index ? true : false}></PageProgress>
                })
            }
        </div>
      </Swiper>
      </div>   
    );
    
}
export default SliderPeriod