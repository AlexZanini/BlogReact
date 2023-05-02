import { ThumbsUp, Trash } from 'phosphor-react'
import style from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({content, onDeleteComment }){

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(){
        //console.log("Deletar agora... NOw!!!!!!!!!!")
        onDeleteComment(content)
    }

    function handleLikeCommet(){
        // setLikeCount(likeCount + 1 )
        setLikeCount((state) =>{
            return state + 1
        })
    }


    return(
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/97163043?v=4" alt="" />

            <div className={style.commentBox}>

                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                        <strong>Alex Zanini</strong>
                       <time title='17 de Abril às 17h17 ' dateTime='2023-04-17-'>Publiacado há 1h</time>
                       </div>

                       <button onClick={handleDeleteComment} title='Deletar comentário'>
                        < Trash  size={24}/>
                       </button>
                    </header>
                    <p> {content}</p>

                </div>

                <footer>
                    <button onClick={handleLikeCommet}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>

            

        </div>
    )
}