export interface IHistoryDate {
    year:string,
    content:string,
    title:string
}

export interface IHistoryDates {
    historyDates: Array<IHistoryDate>,
    isActive:number
}

export enum AtionType {
    SWITCH = "SWITCH",
}

export interface IShiftToToAction{
    type: AtionType.SWITCH,
    payload: number
}