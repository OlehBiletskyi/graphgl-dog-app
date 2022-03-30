import styles from './About.module.css'

export function About({ title, subTitle, description }) {

  return (
    <div className={styles.container}>
      <h3 className={styles.subtitle}>{subTitle}</h3>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
