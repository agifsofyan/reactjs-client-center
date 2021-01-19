import React , { useEffect } from 'react'

// MODULE
import { useSelector } from 'react-redux'

// IMAGE
import Dummy from '../../../Assets/Images/dummy.jpg'

// MATERIAL ICONS
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

// STYLES
import './style.css'

function SecondContent () {

    const list = useSelector(state=>state.product.productFilter)

    useEffect(()=>{
        console.log(list , '  <<< VALUE LIST')
    },[list])

    let renderList = () => {
        if (list.length > 0) {
            return list.map(e=>{
                console.log(e.image_url[0] , ' <<<< IMAGE URL')
                return (
                    <div key={e._id} >
                        <div className="slides-content">
    
                            {/* <div className="slides-content-c1">
                                
                            </div> */}
                            <img
                                src={Dummy}
                                className="slides-content-c1"
                                alt={`dummy-${e._id}`}
                            />
                            
                            <div className="slides-content-c2">
                                {e.name.length > 21 ? e.name.slice(0,21) + '..' : e.name}
                            </div>
    
                            <div className="slides-content-c3">
                                USD 350
                            </div>

                            <div className="slides-content-c4">
                                <span className="fa fa-star checked" style={{fontSize : 18}}>

                                </span>
                                <div>
                                    4.6
                                </div>
                                <div style={{marginLeft : 14}}>
                                    86 Reviews
                                </div>
                                <MoreHorizIcon
                                    style={{fontSize : 22,color : '#BABABA',marginLeft : 32,cursor : "pointer",paddingTop : 4}}
                                />
                            </div>
    
                        </div>
                    </div>
                )
            })
        }else {
            return (
                <main className="slides-not-found-data">
                    <h2>
                        Data Tidak ditemukan!
                    </h2>
                </main>
            )
        }
    }

    return (
        <div className="slides" id="main-slides-01" style={{display : "flex" ,  alignItems : "center"}}>
            {
                list && renderList()
            }
        </div>
    )

}

export default SecondContent;