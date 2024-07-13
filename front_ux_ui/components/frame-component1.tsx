import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import ContinueButtonAndClosingCo from "./continue-button-and-closing-co";
import Closing from "./closing";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  const router = useRouter();

  const onContinueContainerClick = useCallback(() => {
    router.push("/chooses-type-of-experience");
  }, [router]);

  return (
    <section
      className={[styles.continueButtonContainerWrapper, className].join(" ")}
    >
      <div className={styles.continueButtonContainer}>
        <ContinueButtonAndClosingCo
          continue1="continue"
          onContinueContainerClick={onContinueContainerClick}
        />
        <Closing />
      </div>
    </section>
  );
};

export default FrameComponent1;
