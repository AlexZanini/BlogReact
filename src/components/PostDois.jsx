import { AvatarDois } from './AvatarDois'
import styles from './Post.module.css'

export function PostDois() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <AvatarDois src="https://images.pexels.com/photos/5653485/pexels-photo-5653485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                    <div className={styles.authorInfo}>
                        <strong>Gabriel Santana</strong>
                        <span>Java Developer</span>

                    </div>

                </div>

                <time title='17 de Abril às 14h14 ' dateTime='2023-04-17-'>Publiacado há 3h</time>
            </header>

            <div className={styles.content}>
                <p>Fala Galera!</p>
                <p> Acadei de subir mais um projeto em meu portifólio. </p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo ullam quae perspiciatis consequatur deserunt repudiandae placeat, quod alias asperiores iure omnis. Earum, aliquam blanditiis. Delectus eum quisquam atque inventore </p>
                <p><a href="">GabrielSantana/projeto10</a></p>

                <p><a href="">#Java</a>{' '}
                    <a href="">#newProject</a> {' '}
                    <a href="">#C++</a> {' '}
                    <a href="">#python </a> {' '}
                </p>


            </div>


            <form className={styles.commentForm}>

                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário'> </textarea>

                <footer><button type='submit'>Publicar</button></footer>

            </form>

        </article>
    )
}