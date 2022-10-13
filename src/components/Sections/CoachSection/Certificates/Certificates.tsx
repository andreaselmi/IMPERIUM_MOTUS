import React from "react";
import Typography from "../../../Typography/Typography";
import attestatoBurningGate from "../../../../assets/images/sections/attestato1.png";
import attestatoAICS from "../../../../assets/images/sections/attestato2.png";
import attestatoFGI from "../../../../assets/images/sections/attestato3.png";
import attestatoTrainingLab from "../../../../assets/images/sections/attestato4.png";
import attestatoMidea from "../../../../assets/images/sections/attestato5.png";
import styles from "./Certificates.module.scss";
import { textVariant } from "../../../../defs/textVariant";

const Certificates = () => {
  return (
    <div className={styles.certificatesScrollableContainer}>
      <div className={styles.certificatesContainer}>
        <Typography style={{ marginBottom: 24 }} variant={textVariant.heading}>
          Attestati
        </Typography>
        <div className={styles.certificatesContentContainer}>
          <div className={styles.singleCertificateContainer}>
            <div className={styles.certificateImgContainer}>
              <img
                style={{ height: "100%", width: "100%" }}
                src={attestatoBurningGate}
                alt={"Logo Burningate Calisthenics Evolution skills"}
              />
            </div>
            <Typography
              className={styles.certificateText}
              variant={textVariant.smallTitle}
            >
              Allenamento base Calisthenics
            </Typography>
          </div>
          <div className={styles.singleCertificateContainer}>
            <div className={styles.certificateImgContainer}>
              <img
                style={{ height: "100%", width: "100%" }}
                src={attestatoAICS}
                alt={"Logo Associazione Italiana Cultura Sport"}
              />
            </div>
            <Typography
              className={styles.certificateText}
              variant={textVariant.smallTitle}
            >
              Istruttore Allenamento Calisthenico
            </Typography>
          </div>
          <div className={styles.singleCertificateContainer}>
            <div className={styles.certificateImgContainer}>
              <img
                style={{ height: 101, width: 101 }}
                src={attestatoFGI}
                alt={"Logo Federazione Ginnastica d'Italia"}
              />
            </div>
            <Typography
              className={styles.certificateText}
              variant={textVariant.smallTitle}
            >
              Master “L’ ABC della GINNASTICA”
            </Typography>
          </div>
          <div className={styles.singleCertificateContainer}>
            <div className={styles.certificateImgContainer}>
              <img
                style={{ height: "100%", width: "100%" }}
                src={attestatoTrainingLab}
                alt={"Logo Training Lab Italia"}
              />
            </div>
            <Typography
              className={styles.certificateText}
              variant={textVariant.smallTitle}
            >
              Istruttore Functional Training
            </Typography>
          </div>
          <div className={styles.singleCertificateContainer}>
            <div className={styles.certificateImgContainer}>
              <img
                style={{ height: "100%", width: "100%" }}
                src={attestatoMidea}
                alt={"Logo Centro di Chinesiologia Midea"}
              />
            </div>
            <Typography
              className={styles.certificateText}
              variant={textVariant.smallTitle}
            >
              Istruttore Posturologia
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
