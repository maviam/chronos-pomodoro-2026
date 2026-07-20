import styles from './Heading.module.css'

export function Heading() {
  const classes = `${styles.heading} ${styles.cyan}`
  return (
        <h1 className={classes}>Olá, Mundo (do Heading)!</h1>
    )
 
}