import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  const router = useRouter();

  const onLinkClick = useCallback(() => {
    router.push("/confirm-e-n-s-input-location-an");
  }, [router]);

  return (
    <header className={[styles.navigationWrapper, className].join(" ")}>
      <div className={styles.navigation}>
        <div className={styles.links}>
          <div className={styles.proofOfFriend}>Proof of Friend</div>
        </div>
        <div className={styles.walletLink}>
          <div className={styles.connectWallet}>
            <div className={styles.menuLinks}>
              <a className={styles.home}>Home</a>
              <a className={styles.faq}>FAQ</a>
              <a className={styles.inspo}>Inspo</a>
              <a className={styles.findATime}>Find A Time</a>
            </div>
          </div>
          <button className={styles.link} onClick={onLinkClick}>
            <a className={styles.connectWallet1}>Connect Wallet</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;
