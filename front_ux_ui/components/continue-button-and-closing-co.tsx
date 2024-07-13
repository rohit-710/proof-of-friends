import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./continue-button-and-closing-co.module.css";

export type ContinueButtonAndClosingCoType = {
  className?: string;
  continue1?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];

  /** Action props */
  onContinueContainerClick?: () => void;
};

const ContinueButtonAndClosingCo: NextPage<ContinueButtonAndClosingCoType> = ({
  className = "",
  continue1,
  propAlignSelf,
  propWidth,
  onContinueContainerClick,
}) => {
  const continueButtonAndClosingCoStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const router = useRouter();

  const onContinueContainerClick1 = useCallback(() => {
    router.push("/chooses-type-of-experience");
  }, [router]);

  return (
    <div
      className={[styles.continueButtonAndClosingCo, className].join(" ")}
      style={continueButtonAndClosingCoStyle}
    >
      <div className={styles.continue} onClick={onContinueContainerClick}>
        <h1 className={styles.continue1}>{continue1}</h1>
        <img className={styles.continueChild} alt="" src="/polygon-2.svg" />
      </div>
    </div>
  );
};

export default ContinueButtonAndClosingCo;
