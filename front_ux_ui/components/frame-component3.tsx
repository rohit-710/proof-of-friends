import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import WelcomeContent from "./welcome-content";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  const router = useRouter();

  const onProofOfFriendClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <header className={[styles.proofContainerParent, className].join(" ")}>
      <div className={styles.proofContainer}>
        <div className={styles.proofOfFriend} onClick={onProofOfFriendClick}>
          Proof of Friend
        </div>
      </div>
      <div className={styles.navigationLinksParent}>
        <div className={styles.navigationLinks}>
          <div className={styles.navLinkItems}>
            <div className={styles.homeParent}>
              <a className={styles.home}>Home</a>
              <a className={styles.faq}>FAQ</a>
              <a className={styles.inspo}>Inspo</a>
              <a className={styles.findATime}>Find A Time</a>
            </div>
            <WelcomeContent propAlignSelf="stretch" />
          </div>
        </div>
        <div className={styles.link}>
          <a className={styles.leaderboard}>Leaderboard</a>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent3;
