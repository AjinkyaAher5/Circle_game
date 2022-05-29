import { Data } from "./Data"
import { useState } from "react";
import "./Circle.css"


export const Circle=()=>{
    const [state, setstate] = useState("");
    const [circle, setcircle] = useState(Data);
  
    const handleAdd = () => {
      const seectedcircle = circle.map((e) =>
        e.id === Number(state) ? { ...e, status: false } : e
      );
      setcircle(seectedcircle);
      setstate("")
    };
    const handleRemove = (id) => {
        const undo = circle.map((e) => e.id === Number(id) ? { ...e, status: true } : e)
        setcircle(undo);
      }

      return (
        <div className="main">
          
          <div className="both">
            <div className="empty">
              <p>Empty Div</p>
              {circle
                .filter((e) => e.status === false)
                .map((e) => {
                  return (
                    <div
                      key={e.id}
                      className="circle"
                      style={{ background: `${e.bgcolor}` }}
                      onClick={()=>handleRemove(e.id)}
                    ></div>
                  );
                })}
                
            </div>
            
            <div className="allcircles">
            {circle.filter((e) => e.status===true)
            .map((e)=> {
                return <div 
                key={e.id} 
                className="circle" 
                style={{ background: `${e.bgcolor}`}}></div>
            })}
        </div>
        
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Number 1 to 5"
              value={state}
              onChange={(e) => setstate(e.currentTarget.value)}
            />
            <button onClick={handleAdd}>SHOOT</button>
          </div>
        </div>
      );
    
}