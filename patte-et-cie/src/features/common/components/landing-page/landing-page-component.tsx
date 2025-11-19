import LoaderComponent from "../ui/loader/loader-component";
import styles from "./landing-page-component.module.css";

export default function LandingPageComponent() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1 className="text-4xl secondary-text font-bold mx-auto w-fit pt-10">Patte&Cie</h1>
          <p className="mx-auto secondary-text w-fit text-lg tracking-wide">Clinique vétérinaire</p>
        </div>

        <h2 className="secondary-text font-light text-3xl text-center max-w-xl mt-10">
          Helping you to keep <span className="font-bold">your bestie</span> stay healthy!
        </h2>

        <div className="mt-14">
          <LoaderComponent />
        </div>
      </div>
    </div>
  );
}
