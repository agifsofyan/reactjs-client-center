import React , { useEffect , useState } from 'react'

// MODULE
import axios from 'axios'

// API
import { SWAGGER_URL } from '../../Support/API_URL'

// STYLE
import './style.css'

function Privacy () {

    // LOCAL STATE
    const [data,setData] = useState(null)

    useEffect(()=>{
        axios({
            method : "GET",
            url : `${SWAGGER_URL}/general-settings/privacy-police`
        })
        .then(({data})=>{
            setData(data.data)
            console.log(data.data , ' policy')
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    let renderData = () => {
        return data.map((e,index) => {
            return (
                <>
                    <div className="c1">
                        <div className="t1">

                        </div>
                        <div className="t2">
                            {e.title}
                        </div>
                    </div>
                    {
                       e.option && e.option.map((e,index)=>{
                           return (
                                <div className="c2">
                                   {e.value}
                                </div>
                           )
                        })
                    }
                </>
            )
        })
    }
    
    return (
        <div className="privacy-policy-14">
            <h1>
                Privacy Policy
            </h1>
            {data && renderData()}
        </div>
    )

}

export default Privacy