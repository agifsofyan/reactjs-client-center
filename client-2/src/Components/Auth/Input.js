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
        eyeStyle,
        isError,
        message,
        isHasIcon,
        IconComponent
    } = props

    if (!isPassword && !isHasIcon) {
        return (
            <div 
                style={{...styles.root, ...style}}
            >
                <div style={{width : "100%"}}>{text}</div>
                <input 
                    className="auth-input-style"
                    onChange={e=>setter(e.target.value)}
                    value={value}
                    type={text}
                    style={{ border : isError && "1px solid #ff3333" }}
                />
                {
                    isError &&
                    <span className="auth-input-error-m">
                        {message}
                    </span>
                }
            </div>
        )
    }else if (isHasIcon) {
        return (
            <div style={{...styles.root, ...style}}>
                <div style={{width : "100%"}}>{text}</div>
                <div className="auth-input-style-2">
                    <input 
                        onChange={e=>setter(e.target.value)}
                        value={value}
                        // type={ isVisible ? "text" : "password"}
                        type="text"
                        style={{
                            borderTop : isError && "1px solid #ff3333" ,
                            borderLeft : isError && "1px solid #ff3333" ,
                            borderBottom : isError && "1px solid #ff3333" 
                        }}
                    />
                    <div 
                        style={{
                            cursor : "pointer",
                            borderTop : isError && "1px solid #ff3333" ,
                            borderRight : isError && "1px solid #ff3333" ,
                            borderBottom : isError && "1px solid #ff3333" 
                        }}
                        onClick={e=>setIsVisible(!isVisible)}
                    >
                        <IconComponent
                            style={{...eyeStyle}} 
                        /> 
                    </div>
                </div>
                {
                    isError &&
                    <span className="auth-input-error-m">
                        {message}
                    </span>
                }
            </div>
        )
    }
    else {
        return (
            <div style={{...styles.root, ...style}}>
                <div style={{width : "100%"}}>{text}</div>
                <div className="auth-input-style-2">
                    <input 
                        onChange={e=>setter(e.target.value)}
                        value={value}
                        type={ isVisible ? "text" : "password"}
                        style={{
                            borderTop : isError && "1px solid #ff3333" ,
                            borderLeft : isError && "1px solid #ff3333" ,
                            borderBottom : isError && "1px solid #ff3333" 
                        }}
                    />
                    <div 
                        style={{
                            cursor : "pointer",
                            borderTop : isError && "1px solid #ff3333" ,
                            borderRight : isError && "1px solid #ff3333" ,
                            borderBottom : isError && "1px solid #ff3333" 
                        }}
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
                {
                    isError &&
                    <span className="auth-input-error-m">
                        {message}
                    </span>
                }
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