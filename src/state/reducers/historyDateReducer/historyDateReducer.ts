import { AtionType, IHistoryDates, IShiftToToAction } from "../../../types/historyDateTypes"

export const HistoryDates:IHistoryDates = {
    historyDates: [
        {
            year:'2015',
            content:"13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
            title:"наука"
        },
        {
            year:'2016',
            content:"Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
            title:"наука"
        },
        {
            year:'2017',
            content:"Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
            title:"наука"
        },
        {
            year:'2015',
            content:"13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
            title:"наука"
        },
        {
            year:'2016',
            content:"Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
            title:"наук"
        },
        {
            year:'2017',
            content:"Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
            title:"наука"
        },
    ],
    isActive:0
}

export type ToDoStateType = IShiftToToAction

export const ToDoReducer = ((state:IHistoryDates = HistoryDates, action:IShiftToToAction) : IHistoryDates =>{
    switch(action.type){
        case AtionType.SWITCH: 
            return {...state, isActive:action.payload}
        default :
            return state
    }
})

export const periodActivationCreators = (item:number):IShiftToToAction => {
    return {type: AtionType.SWITCH, payload:item}
}