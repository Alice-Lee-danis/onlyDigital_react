import React from "react";

interface IPageProgress {
    isActive:boolean
}

const PageProgress:React.FC<IPageProgress> = ({isActive}) => {

    return (
       <div className="page-progress" style={{
            backgroundColor: isActive ? 'rgb(66, 86, 122)' :'rgb(66, 86, 122, 0.4)', 
       }}>
       </div>
    )
}

export default PageProgress