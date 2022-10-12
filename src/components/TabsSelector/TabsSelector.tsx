import React, {
  createRef,
  CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./TabsSelector.module.scss";
import Typography from "../Typography/Typography";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { textVariant } from "../../defs/textVariant";

interface MenuSelectorProps {
  setActiveSection: (adsType: string) => void;
  labels: string[];
  activeSection: string;
  activeBarStyle?: CSSProperties;
  containerStyle?: string;
  tabStyle?: string;
}

// TODO add type of activeSection

const TabsSelector = ({
  activeBarStyle,
  activeSection,
  containerStyle,
  labels,
  setActiveSection,
  tabStyle,
}: MenuSelectorProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showBar, setShowBar] = useState(false);
  const elementsRef = useRef<any>(labels.map(() => createRef()));
  const [labelsPosition, setLabelsPosition] = useState<number[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activePosition, setActivePosition] = useState(0);
  const { width } = useWindowDimensions();
  const [barWidth, setBarWitdth] = useState(0);

  const checkScrollPosition = () => {
    const indexOf = labels.findIndex((el) => el === activeSection);

    if (width) {
      if (indexOf === -1) {
        return;
      } else {
        labels.map((label, index) => {
          if (indexOf === index) {
            if (indexOf === 0) {
              return scrollRef?.current?.scroll({
                left: 0,
                behavior: "smooth",
              });
            } else {
              return scrollRef?.current?.scroll({
                left: labelsPosition[indexOf] - width / 3,
                behavior: "smooth",
              });
            }
          }
        });
      }
    }
  };

  useEffect(() => {
    if (labels.includes(activeSection)) {
      setActiveIndex(labels.findIndex((label) => label === activeSection));
    } else {
      setActiveIndex(0);
    }
    checkScrollPosition();
  }, [activeSection]);

  useEffect(() => {
    const position = labelsPosition.map((label: number, index: number) => {
      if (index === activeIndex) {
        return label - (scrollRef?.current?.getBoundingClientRect().x || 0);
      }
    });

    const barWidth = elementsRef?.current?.map((ref: any, index: number) => {
      if (index === activeIndex) {
        return ref?.current?.getBoundingClientRect().width || 0;
      }
    });

    setBarWitdth(barWidth[activeIndex]);

    setActivePosition(position[activeIndex] || 0);
  }, [activeIndex, labelsPosition]);

  useEffect(() => {
    const positions = elementsRef?.current?.map((ref: any) => {
      return ref.current.getBoundingClientRect().x;
    });

    setLabelsPosition(positions);

    const position = positions.map((label: number, index: number) => {
      if (index === activeIndex) {
        return label - (scrollRef?.current?.getBoundingClientRect().x || 0);
      }
    });

    setActivePosition(position[activeIndex] || 0);
  }, [width]);

  useEffect(() => {
    const positions = elementsRef?.current?.map((ref: any) => {
      return ref.current.getBoundingClientRect().x;
    });

    setLabelsPosition(positions);

    setShowBar(true);

    return () => setShowBar(false);
  }, []);

  return (
    <>
      <div
        className={`${styles.adsSelectorContainer} ${containerStyle}`}
        ref={scrollRef}
      >
        {showBar && (
          <div
            className={`${styles.activeBar} ${styles.animation}`}
            style={{
              left: activePosition,
              ...activeBarStyle,
              width: barWidth,
            }}
          />
        )}

        <div className={styles.wrapper}>
          {labels.length > 0
            ? labels.map((label, index) => {
                return (
                  <span
                    key={index}
                    ref={elementsRef.current[index]}
                    className={`${styles.adsSelector} ${tabStyle}`}
                    role={"button"}
                    onClick={() => {
                      setActiveSection(label);
                    }}
                  >
                    <Typography
                      className={
                        activeSection !== label ? styles.notActiveSelector : ""
                      }
                      variant={textVariant.menu}
                      label={label}
                    />
                  </span>
                );
              })
            : null}
        </div>
      </div>
      <span role={"separator"} className={styles.separator} />
    </>
  );
};

export default TabsSelector;
