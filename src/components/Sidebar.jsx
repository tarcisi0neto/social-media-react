import styles from './Sidebar.module.css';
import editIcon from '../assets/edit-icon.svg';
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.coverImg} src="https://images.unsplash.com/photo-1668776157628-e26cbeed6eb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=508&q=80" alt="image background's profile" />
            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/66277856?s=96&v=4"/>
                <strong>Tarcísio Neto</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#"> 
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}