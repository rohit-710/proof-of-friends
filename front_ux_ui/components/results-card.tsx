import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./results-card.module.css";

export type ResultsCardType = {
  className?: string;
  burbank?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propOpacity?: CSSProperties["opacity"];
};

const ResultsCard: NextPage<ResultsCardType> = ({
  className = "",
  burbank,
  propBackgroundColor,
  propOpacity,
}) => {
  const resultsCardStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      opacity: propOpacity,
    };
  }, [propBackgroundColor, propOpacity]);

  return (
    <div
      className={[styles.resultsCard, className].join(" ")}
      style={resultsCardStyle}
    >
      <div className={styles.section}>
        <div className={styles.burbank}>{burbank}</div>
        <div className={styles.link}>
          <div className={styles.selectCity}>Select city</div>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
