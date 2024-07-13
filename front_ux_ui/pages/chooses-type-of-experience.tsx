import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent2 from "../components/frame-component2";
import WelcomeContent from "../components/welcome-content";
import ContinueButtonAndClosingCo from "../components/continue-button-and-closing-co";
import styles from "./chooses-type-of-experience.module.css";

const ChoosesTypeOfExperience: NextPage = () => {
  const router = useRouter();

  const onContinueContainerClick = useCallback(() => {
    router.push("/leaderboard");
  }, [router]);

  const onClosingContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.choosesTypeOfExperience}>
      <main className={styles.background}>
        <section className={styles.heading}>
          <FrameComponent2 />
          <div className={styles.image4Parent}>
            <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
            <img className={styles.image4Icon1} alt="" src="/image-41@2x.png" />
          </div>
          <div className={styles.headingChild} />
          <div className={styles.welcomeContentWrapper}>
            <WelcomeContent />
          </div>
          <div className={styles.background1}>
            <div className={styles.why} />
            <footer className={styles.curatedOrRandomContainer}>
              <span className={styles.curatedOrRandomContainer1}>
                <p className={styles.curatedOrRandom}>Curated or random,</p>
                <p className={styles.whichWillYou}>which will you choose?</p>
              </span>
            </footer>
          </div>
        </section>
        <section className={styles.experienceSelection}>
          <div className={styles.selectionContent}>
            <div className={styles.selectionOptions}>
              <div className={styles.selectionPrompt}>
                <h3 className={styles.thisWeekI}>This week, I want to...</h3>
              </div>
              <div className={styles.selectionButtons}>
                <div className={styles.curated}>
                  <div className={styles.buttonPairs}>
                    <div className={styles.relaxAndActive}>
                      <div className={styles.relaxAndActiveChild} />
                      <div className={styles.relaxAndUnwind}>
                        relax and unwind
                      </div>
                    </div>
                    <div className={styles.nightlifeAndCreative}>
                      <div className={styles.nightlifeAndCreativeChild} />
                      <div className={styles.enjoyNewNightlife}>
                        enjoy new nightlife
                      </div>
                    </div>
                  </div>
                  <div className={styles.buttonPairs1}>
                    <div className={styles.div}>
                      <div className={styles.child} />
                      <div className={styles.getActiveAnd}>
                        get active and fit
                      </div>
                    </div>
                    <div className={styles.div1}>
                      <div className={styles.item} />
                      <div className={styles.beCreative}>
                        <p className={styles.be}>be</p>
                        <p className={styles.creative}>creative</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.random}>
                  <img className={styles.randomIcon} alt="" src="/random.svg" />
                  <div className={styles.beSurprised}>be surprised</div>
                </div>
              </div>
            </div>
            <div className={styles.confirmation}>
              <div className={styles.confirmationContent}>
                <ContinueButtonAndClosingCo
                  continue1="let’s go"
                  propAlignSelf="unset"
                  propWidth="998.7px"
                  onContinueContainerClick={onContinueContainerClick}
                />
                <div
                  className={styles.closing}
                  onClick={onClosingContainerClick}
                >
                  <div className={styles.takeAChanceContainer}>
                    <span>{`Take a chance on `}</span>
                    <span className={styles.proofOfFriend}>
                      Proof of Friend
                    </span>
                  </div>
                  <div className={styles.copyright}>
                    <div className={styles.proofOfFriend1}>
                      Proof of Friend © 2024
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ChoosesTypeOfExperience;
