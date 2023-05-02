import  style from  './Header.module.css'

import iginiteLogo from '../assets/logo.svg'

console.log(iginiteLogo )

export function Header(){
    return(

        <header className={style.header}>
            <img src={iginiteLogo} alt="" />
        </header>
    )

}