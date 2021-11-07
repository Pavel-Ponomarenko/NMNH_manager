import styles from "./Converter.module.css"

export function Converter() {
  return (
      <div className={styles.converter}>
        <div className={styles.converter_box}>
          <p className={styles.box_text}>&#36;</p>
        </div>
        <div className={styles.converter_box}>
          <p className={styles.box_text}>&#8364;</p>
        </div>
        <div className={styles.converter_box}>
          <p className={styles.box_text}>&#165;</p>
        </div>
        <div className={styles.converter_box}>
          <p className={styles.box_text}>&#65509;</p>
        </div>
        <div className={styles.converter_box}>
          <p className={styles.box_text}>The amount of money you earn in ...</p>
        </div>
        <div className={styles.converter_box}>
          <p className={styles.box_text}>The amount of money you spend in ...</p>
        </div>
      </div>
  )
  
}