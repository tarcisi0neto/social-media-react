import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './Post.module.css'
import { useState } from 'react';


export function Post({author, publishedAt ,content}) {
    const [comments, setComments] = useState(['Post muito bom! Top 🎉!!', 'Top, parabéns'])
    const [newComment, setNewComment] = useState('')

    const publishedAtFormated = format(publishedAt,"dd 'de' LLLL 'às' HH:mm'h'",{locale: ptBR});
    const publishedRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true})

    function handleCreateNewComment() {
        event.preventDefault();
        setComments([...comments, newComment]);
        setNewComment('');
    }

    function handleNewCommentChange() {
         setNewComment(event.target.value);
    }

    function deleteComment(commentToDelete) {
        const commentsWitoutDeleteOne = comments.filter(com => {
            return com !== commentToDelete;
        })
        setComments(commentsWitoutDeleteOne);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatar_url}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title='21 de Novembro de 2022 às 10:20:01' dateTime={publishedAt.toISOString()}>
                    {publishedRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(paragraph => {
                    if(paragraph.type =='paragraph'){
                        return  <p key={paragraph.content}>{paragraph.content}</p>
                    }
                    else {
                        return  <p  key={paragraph.content} ><a href="">{paragraph.content}</a></p>
                    }
                })}
            </div>

            <form  onSubmit={handleCreateNewComment}  className={styles.commentForm}>
                <textarea 
                    onChange={handleNewCommentChange}
                    name='textearea' 
                    placeholder='Deixe um comentário'
                    value={newComment}
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment}
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    );
}