import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  const router = useRouter();

  const onProofOfFriendClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLinkContainerClick = useCallback(() => {
    router.push("/leaderboard");
  }, [router]);

  return (
    <div className={[styles.headingContentWrapper, className].join(" ")}>
      <div className={styles.headingContent}>
        <header className={styles.headingPlaceholder}>
          <div className={styles.headingSpacer}>
            <div
              className={styles.proofOfFriend}
              onClick={onProofOfFriendClick}
            >
              Proof of Friend
            </div>
          </div>
          <div className={styles.navigation}>
            <div className={styles.navigationLinks}>
              <div className={styles.navigationItems}>
                <a className={styles.home}>Home</a>
                <a className={styles.faq}>FAQ</a>
                <a className={styles.inspo}>Inspo</a>
                <a className={styles.findATime}>Find A Time</a>
              </div>
            </div>
            <div className={styles.link} onClick={onLinkContainerClick}>
              <a className={styles.leaderboard}>Leaderboard</a>
            </div>
          </div>
        </header>
        <div className={styles.eventImageBackgroundWrapper}>
          <div className={styles.eventImageBackground}>
            <div className={styles.eventImageWrapper}>
              <div className={styles.eventImageContent}>
                <img
                  className={styles.ff162ac344989d2c5aZigZag24Icon}
                  loading="lazy"
                  alt=""
                  src="/659711ff162ac344989d2c5a-zigzag24png@2x.png"
                />
                <div className={styles.heading1Container}>
                  <span className={styles.heading1Container1}>
                    <p className={styles.discoverNew}>Discover new</p>
                    <p className={styles.socialExperiences}>
                      social experiences
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <img
              className={styles.dbc30b418394d6d23cZigZag23Icon}
              loading="lazy"
              alt=""
              src="/659711dbc30b418394d6d23c-zigzag23png@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
