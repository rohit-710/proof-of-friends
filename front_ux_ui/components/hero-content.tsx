import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./hero-content.module.css";

export type HeroContentType = {
  className?: string;
};

const HeroContent: NextPage<HeroContentType> = ({ className = "" }) => {
  const router = useRouter();

  const onLinkContainerClick = useCallback(() => {
    router.push("/confirm-e-n-s-input-location-an");
  }, [router]);

  return (
    <div className={[styles.heroContent, className].join(" ")}>
      <div className={styles.irlExperiencesForContainer}>
        <p className={styles.irlExperiencesFor}>irl experiences for the</p>
        <p className={styles.chronicallyOnline}>chronically online.</p>
      </div>
      <div className={styles.heroHeading}>
        <div className={styles.heading1}>
          <div className={styles.readyForYour}>
            Ready for your next adventure?
          </div>
          <div className={styles.heroButton}>
            <div className={styles.link} onClick={onLinkContainerClick}>
              <div className={styles.takeAChance}>Take a chance on us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
