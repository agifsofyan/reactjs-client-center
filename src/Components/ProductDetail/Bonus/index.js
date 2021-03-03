import React , { useState, useEffect } from 'react'

// STYLE
import './style.css'

function Bonus (props) {

    const { detail } = props

    const [bonus] = useState(detail.bonus)
    const [seconds,setSeconds] = useState(8223)

    useEffect(()=>{
        // return setInterval(()=>{
        //     setSecond(second - 1)
        // },1000)
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
          }, 1000);
          return () => clearInterval(interval);
    },[])

    let convertNum = (d) => {
        d = Number(d)
        let h = Math.floor(d / 3600);
        let m = Math.floor(d % 3600 / 60);
        let s = Math.floor(d % 3600 % 60);

        h = h <= 9 ? "0" + h : h
        m = m <= 9 ? "0" + m : m
        s = s <= 9 ? "0" + s : s

        return `${h} : ${m} : ${s}`
    }

    return (
        <div className="product-detail-c13-bonus">
            {/* <div className="pdc13-bonus-fc">
                <div className="pdc13-bonus-fc-c1">

                </div>
                <div className="pdc13-bonus-fc-c2">

                </div>
            </div> */}
            <img
                className="pdc13-bonus-fc"
                src={bonus.image}
                alt="bonus-image"
            />
            <div className="pdc13-bonus-sc">

                <div className="pdc13-bonus-sc-c2">
                    {convertNum(seconds)}
                </div>
                
                <div className="pdc13-bonus-sc-c3">
                    {bonus.description}
                </div>

            </div>
        </div>
    )
}

export default Bonus