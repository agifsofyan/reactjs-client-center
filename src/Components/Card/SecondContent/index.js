import React from 'react'

// STYLE
import './style.css'

function SecondContent (props) {

    const { bump , index , bumpArr, setBump , sale,setSale ,price,setPrice , saleBef , setSaleBef } = props

    let handleChanBox = (e) => {
        let arr = [...bumpArr]
        let res = !bump.isSelected
        // let sel = 
        arr.forEach((e,i)=>{
            if (i === index) {
                if (bump.isSelected) {
                    setPrice(price - e.bump_price)
                    setSale(sale - e.bump_price)
                    setSaleBef(saleBef - e.bump_price)
                }else {
                    setPrice(price + e.bump_price)
                    setSale(sale + e.bump_price)
                    setSaleBef(saleBef + e.bump_price)
                }
                e.isSelected = res
            }
        })
        setBump(arr)
    }

    return (
        <div style={{marginTop : index !== 0 && 0 }} className="card-06-sc-container">
            
            <div className="card-06-sc-c1" style={{borderTop : index !== 0 && "none"}}>
                <div className="card-06-sc-c1-fc">
                    <input
                        checked={bump.isSelected} 
                        type="checkbox"
                        onClick={e=>handleChanBox(e)}
                    />
                    <span>{bump.bump_heading}</span>
                </div>
            </div>
            <div className="card-06-sc-c2">
                <img
                    className="card-06-sc-c2"
                    src={bump.bump_image}
                    alt="dummy-card"
                />
            </div>
            <div className="card-06-sc-c3">
                <div className="card-06-sc-c3-fc">
                    <h4>{bump.bump_name}</h4>
                    <div>
                        {bump.bump_desc}
                    </div>
                </div>
            </div>
            
        </div>
    )

}

export default SecondContent