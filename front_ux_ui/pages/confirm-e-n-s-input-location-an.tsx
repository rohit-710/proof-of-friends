import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import ResultsCard from "../components/results-card";
import FrameComponent1 from "../components/frame-component1";
import styles from "./confirm-e-n-s-input-location-an.module.css";

const ConfirmENSInputLocationAn: NextPage = () => {
  const router = useRouter();

  const onProofOfFriendClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLinkContainerClick = useCallback(() => {
    router.push("/leaderboard");
  }, [router]);

  return (
    <div className={styles.confirmEnsInputLocationAn}>
      <main className={styles.background}>
        <section className={styles.topNavigationContainer}>
          <div className={styles.heading}>
            <div className={styles.homeNavigationItemContainer}>
              <div className={styles.fAQNavigationItemContaine}>
                <header className={styles.inspoNavigationItemContaine}>
                  <div className={styles.findATimeNavigationItemCo}>
                    <div className={styles.homeNavigationItemSpacer}>
                      <div className={styles.fAQNavigationItemSpacer}>
                        <a className={styles.home}>Home</a>
                        <a className={styles.faq}>FAQ</a>
                        <a className={styles.inspo}>Inspo</a>
                        <a className={styles.findATime}>Find A Time</a>
                      </div>
                    </div>
                    <div className={styles.proofOfFriendNavigationIte}>
                      <div
                        className={styles.proofOfFriend}
                        onClick={onProofOfFriendClick}
                      >
                        Proof of Friend
                      </div>
                    </div>
                    <div className={styles.leaderboardNavigationItemCo}>
                      <div
                        className={styles.link}
                        onClick={onLinkContainerClick}
                      >
                        <a className={styles.leaderboard}>Leaderboard</a>
                      </div>
                    </div>
                  </div>
                </header>
                <h1 className={styles.dontForgetTo}>
                  Don't forget to touch grass.
                </h1>
              </div>
            </div>
            <div className={styles.welcomeMessageContainerWrapper}>
              <div className={styles.welcomeMessageContainer}>
                <div className={styles.welcomeAndENSMessageCont}>
                  <h1 className={styles.welcomeHomeDanyagomezcantuContainer}>
                    <span>
                      <p className={styles.welcomeHome}>
                        <span>welcome home</span>
                        <span className={styles.span}>,</span>
                      </p>
                      <p className={styles.danyagomezcantueth}>
                        <b>danyagomezcantu.eth</b>
                      </p>
                    </span>
                  </h1>
                  <div className={styles.eNSMessageContainer}>
                    <h1 className={styles.notYourEns}>not your ENS?</h1>
                  </div>
                </div>
                <div className={styles.welcomeMessageContainerInner}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/polygon-1.svg"
                  />
                </div>
              </div>
            </div>
            <footer className={styles.background1}>
              <div className={styles.createEventHeadingContainer}>
                <img
                  className={styles.ff162ac344989d2c5aZigZag24Icon}
                  loading="lazy"
                  alt=""
                  src="/659711ff162ac344989d2c5a-zigzag24png@2x.png"
                />
                <div className={styles.heading1}>Let’s get you set up</div>
                <img
                  className={styles.dbc30b418394d6d23cZigZag23Icon}
                  alt=""
                  src="/659711dbc30b418394d6d23c-zigzag23png1@2x.png"
                />
              </div>
            </footer>
            <img
              className={styles.photo20240713130548RemoIcon}
              loading="lazy"
              alt=""
              src="/photo-20240713-130548removebgpreview-1@2x.png"
            />
          </div>
        </section>
        <section className={styles.citySelectionContainerWrapper}>
          <div className={styles.citySelectionContainer}>
            <div className={styles.cityDropdownContainer}>
              <h1 className={styles.selectYourCity}>select your city</h1>
            </div>
            <div className={styles.cityResultsContainer}>
              <div className={styles.cityResultsGridContainer}>
                <div className={styles.resultCardsCol}>
                  <ResultsCard burbank="Burbank" />
                  <ResultsCard
                    burbank="Glendale"
                    propBackgroundColor="rgba(255, 255, 255, 0.05)"
                    propOpacity="0.5"
                  />
                  <ResultsCard
                    burbank="Pasadena"
                    propBackgroundColor="rgba(255, 255, 255, 0.05)"
                    propOpacity="0.5"
                  />
                  <ResultsCard
                    burbank="Santa Monica"
                    propBackgroundColor="rgba(255, 255, 255, 0.05)"
                    propOpacity="0.5"
                  />
                  <ResultsCard
                    burbank="Torrance"
                    propBackgroundColor="rgba(255, 255, 255, 0.05)"
                    propOpacity="0.5"
                  />
                  <ResultsCard
                    burbank="Los Angeles"
                    propBackgroundColor="rgba(255, 255, 255, 0.05)"
                    propOpacity="0.5"
                  />
                  <ResultsCard
                    burbank="West Covina"
                    propBackgroundColor="rgba(255, 255, 255, 0.05)"
                    propOpacity="0.5"
                  />
                  <ResultsCard
                    burbank="San Bernardino"
                    propBackgroundColor="rgba(255, 255, 255, 0.05)"
                    propOpacity="0.5"
                  />
                  <ResultsCard
                    burbank="Topanga"
                    propBackgroundColor="rgba(255, 255, 255, 0.05)"
                    propOpacity="0.5"
                  />
                  <ResultsCard
                    burbank="Manhattan Beach"
                    propBackgroundColor="rgba(255, 255, 255, 0.05)"
                    propOpacity="0.5"
                  />
                </div>
                <div className={styles.map}>
                  <div className={styles.interactiveMapContainer}>
                    <img className={styles.mapIcon} alt="" src="/map@2x.png" />
                    <div className={styles.wrapperDots}>
                      <img className={styles.dotsIcon} alt="" src="/dots.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.socialGoalDropdownContainerWrapper}>
              <div className={styles.socialGoalDropdownContainer}>
                <h1 className={styles.whatsYourSocial}>
                  what’s your social goal?
                </h1>
                <div className={styles.socialGoalSelectionContaine}>
                  <h1 className={styles.selectOne}>select one</h1>
                </div>
              </div>
            </div>
            <div className={styles.socialGoalOptionsContainer}>
              <div className={styles.link1}>
                <h1 className={styles.iWantTo}>
                  I want to expand my social circle
                </h1>
              </div>
              <div className={styles.link2}>
                <h1 className={styles.iWantTo1}>
                  I want to break out of my comfort zone
                </h1>
              </div>
              <div className={styles.link3}>
                <h1 className={styles.iWantTo2}>
                  I want to discover new activities
                </h1>
              </div>
              <div className={styles.link4}>
                <h1 className={styles.iWantTo3}>
                  I want to find like-minded people
                </h1>
              </div>
              <div className={styles.link5}>
                <h1 className={styles.iWantTo4}>
                  I want to make meaningful connections
                </h1>
              </div>
            </div>
          </div>
        </section>
        <FrameComponent1 />
      </main>
    </div>
  );
};

export default ConfirmENSInputLocationAn;
