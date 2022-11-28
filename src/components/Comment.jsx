import { ThumbsUp, Trash, TrashSimple } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}) {

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar noBorder src="https://media-exp1.licdn.com/dms/image/C4D03AQEpBrVGuZ7cxw/profile-displayphoto-shrink_100_100/0/1668005025851?e=1674691200&v=beta&t=XPhabMGF2WrZAzmKBvVnvSILmJX7ne1Ex0AQ_5N_z20"/>
            <div className={styles.commentBox} >
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Débora Anjos</strong>
                            <time title='21 de Novembro de 2022 às 10:20:01' dateTime='2022-11-21 10:20:01'>
                                 Publicado há 1h
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'> 
                            <Trash size={24}/> 
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/> Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}