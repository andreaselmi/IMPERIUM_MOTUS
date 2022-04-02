import React from "react";
import Typography from "../../../Typography/Typography";
import attestatoAICS from "../../../../assets/images/sections/attestato1.png";
import attestatoFGI from "../../../../assets/images/sections/attestato2.png";
import attestatoTrainingLab from "../../../../assets/images/sections/attestato3.png";
import attestatoMidea from "../../../../assets/images/sections/attestato4.png";
import styles from "./Certificates.module.scss";
import { textVariant } from "../../../../defs/textVariant";

const Certificates = () => {
  return (
    <div className={styles.certificatesScrollableContainer}>
      <div className={styles.certificatesContainer}>
        <Typography
          style={{ marginBottom: 24 }}
          variant={textVariant.heading}
          label={"Attestati"}
        />
        <div className={styles.certificatesContentContainer}>
          <div className={styles.singleCertificateContainer}>
            <div className={styles.certificateImgContainer}>
              <img
                src={attestatoAICS}
                alt={"Logo Attestato Istruttore Calisthenico (AICS)"}
              />
            </div>
            <Typography
              className={styles.certificateText}
              variant={textVariant.smallTitle}
              label={"Istruttore Allenamento Calisthenico (AICS)"}
            />
          </div>
          <div className={styles.singleCertificateContainer}>
            <div className={styles.certificateImgContainer}>
              <img
                style={{ height: 101, width: 101 }}
                src={attestatoFGI}
                alt={"Logo federazione Ginnastica Italiana"}
              />
            </div>
            <Typography
              className={styles.certificateText}
              variant={textVariant.smallTitle}
              label={"Master “L’ ABC della GINNASTICA”"}
            />
          </div>
          <div className={styles.singleCertificateContainer}>
            <div className={styles.certificateImgContainer}>
              <img
                src={attestatoTrainingLab}
                alt={"Logo Training Lab Italia"}
              />
            </div>
            <Typography
              className={styles.certificateText}
              variant={textVariant.smallTitle}
              label={"Istruttore Functional Training"}
            />
          </div>
          <div className={styles.singleCertificateContainer}>
            <div className={styles.certificateImgContainer}>
              <img src={attestatoMidea} alt={"Logo Midea"} />
            </div>
            <Typography
              className={styles.certificateText}
              variant={textVariant.smallTitle}
              label={"Istruttore Posturologia"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
