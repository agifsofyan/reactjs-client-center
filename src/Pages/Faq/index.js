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
            url : `${SWAGGER_URL}/general-settings/faq`
        })
        .then(({data})=>{
            console.log( data.data, 'FAQ')
            setData(data.data)
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
                            {e.question}
                        </div>
                    </div>
                    <div className="c2">
                        {e.answer}
                    </div>
                    
                </>
            )
        })
    }
    
    return (
        <div className="privacy-policy-14">
            <h1>
                FAQ
            </h1>
            {data && renderData()}
        </div>
    )

}

export default Privacy