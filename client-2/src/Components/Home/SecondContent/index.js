import React , { useEffect } from 'react'

// MODULE
import { useSelector } from 'react-redux'

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
    
                            <div className="slides-content-c1">
                                
                            </div>
                            
                            <div className="slides-content-c2">
                                {e.name}
                            </div>
    
                            <div className="slides-content-c3">
                                USD 350
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