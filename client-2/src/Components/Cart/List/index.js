import React , { useState } from 'react'

// MATERIAL ICONS
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

// STYLE
import './style.css'

function List  () {

    const [data] = useState([0,1,2,3,4,5])
    const [lastLength] = useState(data.length-1)
    const [num,setNum] = useState(1)

    let handleChangeNum = (res) => {
        if (num > 0) {
            setNum(res)
        }
    }

    let renderData = () => {
        return data.map((el,index)=>{
            return (
                <div 
                    className="cart-06-list1"
                    style={{
                        borderTopRightRadius : index === 0 && 12,
                        borderTopLeftRadius : index === 0 && 12,
                        borderBottom : index === lastLength && "0.5px solid #A4A4A4",
                        borderBottomRightRadius : index === lastLength && 12,
                        borderBottomLeftRadius : index === lastLength && 12,
                    }}
                >

                    <div className="cart-06-list1-fc">

                        <input
                            type="checkbox"
                        />

                        <span>
                            Product Title Here
                        </span>

                    </div>

                    <div className="cart-06-list1-sc">
                        <div className="cart-06-list1-sc-c1">
                            <span>Rp 1.900.000</span>
                            <div>Rp. 210.000</div>
                        </div>
                        <div className="cart-06-list1-sc-c2">
                            <div className="cart-06-list1-sc-c2-button">Hemat 80%</div>
                        </div>
                        <div className="cart-06-list1-sc-c3">
                            <div className="cart-06-list1-sc-c3-box">
                                <RemoveIcon
                                    onClick={e=>handleChangeNum(num - 1)}
                                    className="cart-06-list1-sc-c3-icon"
                                />
                            </div>
                            <div className="cart-06-list1-sc-c3-num" style={{marginLeft : 9}}>
                                {
                                    num
                                }
                            </div>
                            <div className="cart-06-list1-sc-c3-box" style={{marginLeft : 9}}>
                                <AddIcon
                                    onClick={e=>handleChangeNum(num + 1)}
                                    className="cart-06-list1-sc-c3-icon"
                                />
                            </div>
                            <DeleteIcon
                                className="cart-06-list1-sc-c3-icon-2"
                            />
                        </div>
                    </div>

                </div>
            )
        })
    }

    return (
        <div 
            className="cart-06-1 cart-06-list1-root"
        >
            {renderData()}
        </div>
    )

}

export default List