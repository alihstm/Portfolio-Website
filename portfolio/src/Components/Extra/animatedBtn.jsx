import styles from "../Extra/animatedBtn.module.css"

const AnimatedBtn = (props) => {
  return (
    <button className={styles.button}>
      <span className={styles.span}>{props.name}</span>
    </button>
  );
};
export default AnimatedBtn;
