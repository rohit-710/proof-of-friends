import type { NextPage } from "next";
import styles from "./benefit-items.module.css";

export type BenefitItemsType = {
  className?: string;
};

const BenefitItems: NextPage<BenefitItemsType> = ({ className = "" }) => {
  return (
    <div className={[styles.benefitItems, className].join(" ")}>
      <div className={styles.benefitDescriptions}>
        <div className={styles.link}>
          <div className={styles.curatedExperiencesFor}>
            Curated experiences for every interest
          </div>
        </div>
      </div>
      <div className={styles.benefitDescriptions1}>
        <div className={styles.link1}>
          <div className={styles.meetNewPeople}>
            Meet new people and expand your social circle
          </div>
        </div>
      </div>
      <div className={styles.link2}>
        <div className={styles.earnRewardsAnd}>
          Earn rewards and collect NFTs
        </div>
      </div>
    </div>
  );
};

export default BenefitItems;
