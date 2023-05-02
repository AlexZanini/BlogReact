import styles from "./AvatarDois.module.css"

export function AvatarDois (props){

    return (
        <img className={styles.avatar} src={props.src} />
    )
}