import React from "react";
import classNames from "classnames"


const Button = ({className, outline, onClick, children}) => {
    return <button className={classNames('button', className, {
        'button--outline': outline
    })} onClick={onClick}>
        {children}
    </button>
}


export default Button;