import Loader from "../../ui/loader/Loader";
import Logo from "../logo/Logo";
import styles from "./LandingPageLayout.module.css";

const LandingPageLayout = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <Logo />

        <h2 className="secondary-text font-light text-3xl text-center max-w-xl mt-10">
          Helping you to keep <span className="font-bold">your bestie</span> stay healthy!
        </h2>

        <div className="mt-14">
          <Loader />
        </div>
      </div>
    </div>
  );
};

export default LandingPageLayout;
