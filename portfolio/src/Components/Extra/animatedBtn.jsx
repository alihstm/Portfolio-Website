import styles from "../Extra/animatedBtn.module.css";

const AnimatedBtn = ({ name, onClick, className }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      <span className={styles.span}>{name}</span>
    </button>
  );
};

export default AnimatedBtn;
