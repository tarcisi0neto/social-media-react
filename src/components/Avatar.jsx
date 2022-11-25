import styles from './Avatar.module.css'

export function Avatar({noBorder = false, src}) {
    
    return(
        <img className={noBorder? styles.avatarWithoutBorder : styles.avatar} src={src} alt="" />
    )
}