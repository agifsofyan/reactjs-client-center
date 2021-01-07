import React , { useState } from 'react'

// ICONS
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

function Input (props) {

    const [isVisible,setIsVisible] = useState(false)

    const {
        text,
        setter,
        value,
        isPassword,
        style,
        eyeStyle
    } = props

    if (!isPassword) {
        return (
            <div style={{...styles.root, ...style}}>
                <div style={{width : "80%"}}>{text}</div>
                <input 
                    className="auth-input-style"
                    onChange={e=>setter(e.target.value)}
                    value={value}
                    type={text}
                />
            </div>
        )
    }else {
        return (
            <div style={{...styles.root, ...style}}>
                <div style={{width : "80%"}}>{text}</div>
                <div className="auth-input-style-2">
                    <input 
                        onChange={e=>setter(e.target.value)}
                        value={value}
                        type={ isVisible ? "text" : "password"}
                    />
                    <div 
                        style={{cursor : "pointer"}}
                        onClick={e=>setIsVisible(!isVisible)}
                    >
                        {
                            isVisible ? 
                            <VisibilityIcon 
                                style={{cursor : "pointer",...eyeStyle}} 
                                onClick={e=>setIsVisible(!isVisible)}  
                            /> :
                            <VisibilityOffIcon 
                                style={{cursor : "pointer",...eyeStyle}} 
                                onClick={e=>setIsVisible(!isVisible)}
                            />
                        }
                    </div>
                </div>
            </div>
        )
    }


}

const styles = {
    root : {
        display : "flex" , 
        flexDirection : "column",
        width : "100%",
        alignItems : "center" , 
        marginTop : 10
    }
}

export default Input