import type { NextPage } from "next";
import FrameComponent4 from "../components/frame-component4";
import Closing from "../components/closing";
import styles from "./create-event.module.css";

const CreateEvent: NextPage = () => {
  return (
    <div className={styles.createEvent}>
      <main className={styles.background}>
        <section className={styles.heading}>
          <FrameComponent4 />
          <div className={styles.headingInner}>
            <img className={styles.frameChild} loading="lazy" alt="" />
          </div>
        </section>
        <section className={styles.closingWrapper}>
          <Closing propAlignSelf="unset" propWidth="1060.7px" />
        </section>
      </main>
    </div>
  );
};

export default CreateEvent;
