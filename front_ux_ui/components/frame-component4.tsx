import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  const router = useRouter();

  const onProofOfFriendClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLinkContainerClick = useCallback(() => {
    router.push("/leaderboard");
  }, [router]);

  return (
    <header className={[styles.frameParent, className].join(" ")}>
      <div className={styles.proofOfFriendWrapper}>
        <div className={styles.proofOfFriend} onClick={onProofOfFriendClick}>
          Proof of Friend
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.linkColumnsWrapper}>
          <div className={styles.linkColumns}>
            <div className={styles.linkColumn}>
              <a className={styles.home}>Home</a>
              <a className={styles.faq}>FAQ</a>
              <a className={styles.inspo}>Inspo</a>
              <a className={styles.findATime}>Find A Time</a>
            </div>
            <div className={styles.welcomeHomeDanyagomezcantuParent}>
              <h1 className={styles.welcomeHomeDanyagomezcantuContainer}>
                <p className={styles.welcomeHome}>
                  <span>welcome home</span>
                  <span className={styles.span}>,</span>
                </p>
                <p className={styles.danyagomezcantueth}>
                  <b>danyagomezcantu.eth</b>
                </p>
              </h1>
              <div className={styles.linkParent}>
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
          </div>
        </div>
        <div className={styles.link2} onClick={onLinkContainerClick}>
          <a className={styles.leaderboard}>Leaderboard</a>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent4;
