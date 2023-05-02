import { Comment } from './Comment'
import styles from './Post.module.css'
import { AvatarDois } from './AvatarDois'
import { Avatar } from './Avatar'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'


export function Post({author, publishedAT, content}){
    const [comments, setComments ] = useState([
        'Muito bom, parabéns!',
        
    ])

    const [newCommentText, setNewCommentText] = useState('')

    console.log(newCommentText)

    const publishedDateFormatted = format(publishedAT, "d ' de ' LLLL ' às' HH:mm'h'", {locale: ptBR,} )
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAT, {locale: ptBR,
    addSuffix: true
    })

    function handleCreateNewComment(){
        event.preventDefault()     

        setComments([...comments, newCommentText])
        setNewCommentText('')       
    
    }

    function handleNewCommentChange(){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
        // console.log(event.target.value)
    }

    function handleNewCommentInvalid(){
        console.log(event)
        event.target.setCustomValidity('Esse campo é obrigatório! ')
    }

    function deleteComment(commentToDelete){
        const commentsWhithoutDeleteOne = comments.filter(comment =>{
            return comment !== commentToDelete;

        })

        setComments(commentsWhithoutDeleteOne)

    }
    
    const isNewCommentEmpty = newCommentText.length === 0
    
    return (
       <article className={styles.post}>
        <header> 
            <div className={styles.author}>
                <AvatarDois src={author.avatarUrl} alt="" />
               

                <div className={styles.authorInfo}>
                    <strong>{author.name} </strong>
                    <span>{author.role} </span>

                </div>

            </div>

            <time title={publishedDateFormatted} dateTime={publishedAT.toISOString()}>
                 {publishedDateRelativeToNow} </time>
        </header>

        <div className={styles.content}>

            {content.map((line, index)=> {
                if (line.type === 'paragraph'){
                return <p key={index} >{line.content}</p>
                } else if (line.type === 'link'){
                    return <p key={index} > <a> {line.content}</a></p>
                }
            })}

        </div>


        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>

        <strong>Deixe seu feedback</strong>

        <textarea 
        name="comment"
        placeholder='Deixe um comentário'
        value={newCommentText}
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        required

        > 
        </textarea>

        <footer><button type='submit' disabled={isNewCommentEmpty} >Publicar</button></footer>

        </form>

        <div className={styles.commentList} >
            {comments.map(comment =>{
                return <Comment  key={comment} content={comment} onDeleteComment={deleteComment} />
                
            })
            }
        </div>



       </article>
    )
}