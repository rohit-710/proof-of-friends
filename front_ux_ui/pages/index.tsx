import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import HeroContent from "../components/hero-content";
import BenefitItems from "../components/benefit-items";
import styles from "./index.module.css";

const LandingPage: NextPage = () => {
  return (
    <div className={styles.landingPage}>
      <main className={styles.background}>
        <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        <FrameComponent />
        <section className={styles.heroContentWrapper}>
          <HeroContent />
        </section>
        <section className={styles.asFeaturedBannerParent}>
          <footer className={styles.asFeaturedBanner}>
            <div className={styles.bannerTitle}>
              <div className={styles.asFeaturedIn}>As featured in</div>
            </div>
            <img className={styles.linkIcon} alt="" src="/link@2x.png" />
          </footer>
          <div className={styles.eventBannerWrapper}>
            <div className={styles.eventBanner}>
              <div className={styles.heading1Container}>
                <span className={styles.whyChoose}>{`Why choose `}</span>
                <span className={styles.proofOfFriend}>Proof of Friend</span>
                <span className={styles.span}>?</span>
              </div>
              <img
                className={styles.ff162ac344989d2c5aZigZag24Icon}
                alt=""
                src="/659711ff162ac344989d2c5a-zigzag24png@2x.png"
              />
              <img
                className={styles.dbc30b418394d6d23cZigZag23Icon}
                alt=""
                src="/659711dbc30b418394d6d23c-zigzag23png@2x.png"
              />
            </div>
          </div>
        </section>
        <div className={styles.wrapperPictures}>
          <img className={styles.picturesIcon} alt="" src="/pictures@2x.png" />
        </div>
        <section className={styles.benefitItemsWrapper}>
          <BenefitItems />
        </section>
        <section className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.takeAChanceContainer}>
              <span>{`Take a chance on `}</span>
              <span className={styles.proofOfFriend1}>Proof of Friend</span>
            </div>
            <div className={styles.copyright}>
              <div className={styles.proofOfFriend2}>
                Proof of Friend © 2024
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
