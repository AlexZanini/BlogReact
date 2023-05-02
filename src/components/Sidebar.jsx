import {PencilLine} from 'phosphor-react'
import styles from "./Sidebar.modules.css"
import { Avatar } from './Avatar';

export function Sidebar(){
    return (
        <aside className="sidebar" >

            <img  className="cover" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />


            <div className="profile">
                <Avatar src="https://avatars.githubusercontent.com/u/97163043?v=4" />

                                

                <strong>Alex Zanini</strong>
                <span>Web Developer</span>

            </div>

            <footer>
                <a href="#"> 
                <PencilLine  size={20} />
                Editar seu perfil</a>
            </footer>
        
        </aside>

    );
}