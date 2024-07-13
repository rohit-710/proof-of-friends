import type { NextPage } from "next";
import { useCallback } from "react";
import FrameComponent3 from "../components/frame-component3";
import { useRouter } from "next/router";
import styles from "./leaderboard.module.css";

const Leaderboard: NextPage = () => {
  const router = useRouter();

  const onClosingContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.leaderboard}>
      <main className={styles.background}>
        <section className={styles.heading}>
          <FrameComponent3 />
          <div className={styles.eventActions}>
            <div className={styles.actionButtons}>
              <div className={styles.actionButtonsChild} />
              <div className={styles.attendEvent}>Attend event</div>
            </div>
            <div className={styles.actionButtons1}>
              <div className={styles.actionButtonsItem} />
              <div className={styles.createEvent}>Create event</div>
            </div>
          </div>
          <div className={styles.headingInner}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/polygon-11.svg"
            />
          </div>
          <div className={styles.leaderboardContainer}>
            <h1 className={styles.leaderboard1}>Leaderboard</h1>
          </div>
          <div className={styles.headingChild} />
        </section>
        <section className={styles.footer}>
          <div className={styles.closing} onClick={onClosingContainerClick}>
            <div className={styles.takeAChanceContainer}>
              <span>{`Take a chance on `}</span>
              <span className={styles.proofOfFriend}>Proof of Friend</span>
            </div>
            <div className={styles.proofOfFriend2024Wrapper}>
              <div className={styles.proofOfFriend1}>
                Proof of Friend © 2024
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Leaderboard;
