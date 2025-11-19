import styles from "./loader-component.module.css";

export default function LoaderComponent() {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}></div>
      <p className={styles.text}>Chargement...</p>
    </div>
  );
}
