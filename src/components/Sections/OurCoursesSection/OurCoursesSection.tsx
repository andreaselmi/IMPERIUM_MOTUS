import React, { useEffect, useRef, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Button from "../../Button/Button";
import SectionContainer from "../SectionContainer/SectionContainer";
import Modal from "../../Modal/Modal";
import styles from "./OurCoursesSection.module.scss";
import { ReactComponent as OurCourses } from "../../../assets/images/sections/coursesSection.svg";

//Utils
import ScrollAnchor from "../../ScrollAnchor/ScrollAnchor";
import { navBarButtons } from "../../../defs/navbarButtons";
import ModalCalisthenicsContent from "../../Modal/ModalCalisthenicsContent/ModalCalisthenicsContent";
import { useAppDispatch } from "../../../store/store";
import changeActiveSection from "../../../utils/changeActiveSection";
import useAnalyticsEventTracker from "../../../hooks/useAnalyticsEventTracker";
import { GAEventCategory, ModalEventAction } from "../../../defs/analytics";
import { SiteSectionTypes } from "../../../defs/siteSection";
import TabsSelector from "../../TabsSelector/TabsSelector";
import CalisthenicsDescription from "../../CoursesDescription/CalisthenicsDescription/CalisthenicsDescription";
import FunctionalDescription from "../../CoursesDescription/FunctionalDescription/FunctionalDescription";
import YogaDescription from "../../CoursesDescription/YogaDescription/YogaDescription";

const OurCoursesSection = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const [courseSection, setCourseSection] = useState("Calisthenics");

  const gaEventTracker = useAnalyticsEventTracker(GAEventCategory.MODAL);

  const handleBookLesson = () => {
    gaEventTracker(ModalEventAction.CALISTHENICS);
    setShowModal(true);
  };

  const refDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showModal) {
      const body = document.querySelector("body");
      if (body) body.style.overflow = "hidden";
    } else {
      const body = document.querySelector("body");
      if (body) body.style.overflow = "auto";
    }
  }, [showModal]);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      changeActiveSection(
        refDiv.current,
        SiteSectionTypes.OUR_COURSES,
        dispatch
      )
    );
  }, []);

  return (
    <div ref={refDiv}>
      <ScrollAnchor id={navBarButtons.OUR_COURSES} />
      <SectionContainer className={styles.sectionContainer}>
        <div className={styles.container}>
          <SectionHeader
            SvgComponent={<OurCourses />}
            titleClass={styles.sectionTitle}
            imageAlt={"Il Calisthenics"}
            label={"I nostri corsi"}
          />

          <TabsSelector
            setActiveSection={(section) => setCourseSection(section)}
            labels={["Calisthenics", "Ginnastica funzionale", "Yoga"]}
            activeSection={courseSection}
          />

          <div className={styles.body}>
            {courseSection === "Calisthenics" ? (
              <CalisthenicsDescription />
            ) : courseSection === "Ginnastica funzionale" ? (
              <FunctionalDescription />
            ) : (
              <YogaDescription />
            )}
          </div>

          <div>
            <Button
              onClick={handleBookLesson}
              buttonType={"secondary"}
              buttonStyle={"light"}
              label={"Perchè Calisthenics Garage?"}
            />
          </div>
        </div>
      </SectionContainer>
      <Modal closeModal={() => setShowModal(false)} isOpen={showModal}>
        <ModalCalisthenicsContent />
      </Modal>
    </div>
  );
};

export default OurCoursesSection;
