import React , { useEffect } from 'react'

// AXIOS
import axios from 'axios'

// IMAGES
import laruno from '../../Assets/Images/logo-laruno.png'
import careerImg from '../../Assets/Images/career.png'

// STYLE
import './style.css'

function Career () {

    useEffect(()=>{
        axios({
            method : 'GET',
            url : "https://laruno.id/payments/finish",
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(({data})=>{   
            console.log(data)
        })
        .catch(err=>console.log(err , ' <<< erorrr kamkmkm'))
    },[])

    return (
        <div className="career-15-container">
            <img
                alt={"logo-laruno"}
                src={laruno}
                className="c1"
            />
            <div className="c2">
                Belajar Online Efektif
            </div>
            <img
                src={careerImg}
                alt="career"
                className="c3"
            />
            <div className="line"/>
        </div>
    )

}

export default Career;