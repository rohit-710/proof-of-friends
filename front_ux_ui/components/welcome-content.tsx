import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./welcome-content.module.css";

export type WelcomeContentType = {
  className?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
};

const WelcomeContent: NextPage<WelcomeContentType> = ({
  className = "",
  propAlignSelf,
}) => {
  const welcomeContentStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div
      className={[styles.welcomeContent, className].join(" ")}
      style={welcomeContentStyle}
    >
      <h3 className={styles.welcomeHomeDanyagomezcantuContainer}>
        <p className={styles.welcomeHome}>
          <span>welcome home</span>
          <span className={styles.span}>,</span>
        </p>
        <p className={styles.danyagomezcantueth}>
          <b>danyagomezcantu.eth</b>
        </p>
      </h3>
      <div className={styles.userLink}>
        <div className={styles.link}>
          <div className={styles.burbank}>Burbank</div>
        </div>
        <div className={styles.link1}>
          <div className={styles.wantsToExpand}>
            Wants to expand their social circle
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeContent;
