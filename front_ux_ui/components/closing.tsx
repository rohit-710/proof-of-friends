import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./closing.module.css";

export type ClosingType = {
  className?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
};

const Closing: NextPage<ClosingType> = ({
  className = "",
  propAlignSelf,
  propWidth,
}) => {
  const closingStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const router = useRouter();

  const onClosingContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div
      className={[styles.closing, className].join(" ")}
      onClick={onClosingContainerClick}
      style={closingStyle}
    >
      <h1 className={styles.takeAChanceContainer}>
        <span>{`Take a chance on `}</span>
        <span className={styles.proofOfFriend}>Proof of Friend</span>
      </h1>
      <div className={styles.copyrightContainer}>
        <div className={styles.proofOfFriend1}>Proof of Friend © 2024</div>
      </div>
    </div>
  );
};

export default Closing;
