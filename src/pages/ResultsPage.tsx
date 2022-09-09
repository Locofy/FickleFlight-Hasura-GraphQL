import { FunctionComponent, useCallback } from "react";
import { FormControlLabel, Checkbox, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import ResultsSection from "../components/ResultsSection";
import styles from "./ResultsPage.module.css";

const ResultsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFickleflightLogoButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div className={styles.resultsPageDiv}>
      <header className={styles.topHeader}>
        <div className={styles.topContainerDiv}>
          <button
            className={styles.fickleflightLogoButton}
            onClick={onFickleflightLogoButtonClick}
          >
            <img className={styles.symbolsIcon} alt="" src="../symbols1.svg" />
          </button>
          <div className={styles.navigationRightDiv}>
            <div className={styles.navigationMenuDiv}>
              <div className={styles.exploreDiv} onClick={onExploreTextClick}>
                Explore
              </div>
              <button className={styles.searchButton}>Search</button>
              <div className={styles.exploreDiv} onClick={onHotelsTextClick}>
                Hotels
              </div>
              <button className={styles.offersButton}>Offers</button>
            </div>
            <div className={styles.accountSectionDiv}>
              <img
                className={styles.hamburgerMenuIcon}
                alt=""
                src="../notification.svg"
              />
              <img
                className={styles.notificationBellIcon}
                alt=""
                src="../notification5.svg"
              />
              <img
                className={styles.unsplashd1UPkiFd04AIcon}
                alt=""
                src="../top_avatar@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <div className={styles.searchContainerDiv}>
        <div className={styles.searchSectionDiv}>
          <div className={styles.titleDiv}>
            <div className={styles.whereAreYouOffTo}>Where are you off to?</div>
          </div>
          <SearchForm />
        </div>
      </div>
      <div className={styles.searchResultsDiv}>
        <div className={styles.searchFiltersDiv}>
          <div className={styles.resultsSummaryDiv}>
            <div className={styles.resultsDiv}>10 out of 177 Results</div>
            <img className={styles.vectorIcon} alt="" src="../vector-2.svg" />
          </div>
          <div className={styles.bookingOptionsDiv}>
            <b className={styles.resultsB}>Booking Options</b>
            <FormControlLabel
              className={styles.component1formcheckboxFormControlLabel}
              label="Book on Fickleflight"
              labelPlacement="end"
              control={<Checkbox size="medium" />}
            />
            <FormControlLabel
              className={styles.component1formcheckboxFormControlLabel1}
              label="Official Airline Websites"
              labelPlacement="end"
              control={<Checkbox size="medium" />}
            />
          </div>
          <div className={styles.flightExperienceDiv}>
            <b className={styles.resultsB1}>Flight Experience</b>
            <FormControlLabel
              className={styles.component1formcheckboxFormControlLabel}
              label="No overnight flights"
              labelPlacement="end"
              control={<Checkbox color="primary" size="medium" />}
            />
            <FormControlLabel
              className={styles.component1formcheckboxFormControlLabel1}
              label="No long stop-overs"
              labelPlacement="end"
              control={<Checkbox color="primary" size="medium" />}
            />
          </div>
          <div className={styles.airlinesDiv}>
            <b className={styles.resultsB2}>Airlines</b>
            <FormControlLabel
              className={styles.component1formcheckboxFormControlLabel}
              label="Singapore Airlines"
              labelPlacement="end"
              control={<Checkbox color="primary" size="medium" />}
            />
            <FormControlLabel
              className={styles.component1formcheckboxFormControlLabel1}
              label="Qatar Airways"
              labelPlacement="end"
              control={<Checkbox color="primary" size="medium" />}
            />
          </div>
          <div className={styles.stopsDiv}>
            <b className={styles.resultsB3}>Stops</b>
            <FormControlLabel
              className={styles.component1formcheckboxFormControlLabel}
              label="1 Stop"
              labelPlacement="end"
              control={<Checkbox size="medium" />}
            />
            <FormControlLabel
              className={styles.component1formcheckboxFormControlLabel1}
              label="2 Stops"
              labelPlacement="end"
              control={<Checkbox size="medium" />}
            />
          </div>
          <img className={styles.seperatorIcon} alt="" src="../vector-5.svg" />
        </div>
        <ResultsSection />
      </div>
      <div className={styles.footerSectionDiv}>
        <div className={styles.formTextDiv}>
          <div className={styles.newsletterFormSection}>
            <img
              className={styles.newsletterSectionBackground}
              alt=""
              src="../newsletter-section-background1@2x.png"
            />
            <div className={styles.subscribeFormDiv}>
              <div className={styles.formHeaderDiv}>
                <b className={styles.formTitleSubtext}>
                  subscribe to our newsletter
                </b>
                <b className={styles.formTitleB}>Get weekly updates</b>
              </div>
              <div className={styles.formDiv}>
                <div className={styles.formTextDiv}>
                  <div className={styles.fillInYourDetailsToJoinT}>
                    Fill in your details to join the party!
                  </div>
                </div>
                <div className={styles.formFieldsDiv}>
                  <div className={styles.formTextDiv}>
                    <TextField
                      className={styles.inputTextField}
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Your name"
                      size="medium"
                      margin="none"
                    />
                  </div>
                  <div className={styles.formTextDiv}>
                    <TextField
                      className={styles.inputTextField}
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Email address"
                      size="medium"
                      margin="none"
                    />
                  </div>
                </div>
                <button className={styles.button}>
                  <div className={styles.unstyledButtonDiv}>
                    <div className={styles.buttonDiv}>submit</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <footer className={styles.footer}>
            <div className={styles.fickleFlightBioDiv}>
              <img className={styles.logoIcon} alt="" src="../logo2.svg" />
              <div className={styles.fickleFlightIsYourOneStop}>
                Fickle Flight is your one-stop travel portal. We offer hassle
                free flight and hotel bookings. We also have all your flight
                needs in you online shop.
              </div>
              <img
                className={styles.socialIcons}
                alt=""
                src="../social-icons2.svg"
              />
            </div>
            <div className={styles.seperatorDiv} />
            <div className={styles.footerLinksDiv}>
              <div className={styles.companyDiv}>
                <div className={styles.aboutUsDiv}>About Us</div>
                <div className={styles.companyDiv1}>Company</div>
                <div className={styles.newsDiv}>News</div>
                <div className={styles.careersDiv}>Careers</div>
                <div className={styles.howWeWork}>How we work</div>
              </div>
              <div className={styles.companyDiv}>
                <div className={styles.accountDiv}>Account</div>
                <div className={styles.supportDiv1}>Support</div>
                <div className={styles.supportCenterDiv}>Support Center</div>
                <div className={styles.fAQDiv}>FAQ</div>
                <div className={styles.accessibilityDiv}>Accessibility</div>
              </div>
              <div className={styles.moreDiv}>
                <div className={styles.covidAdvisoryDiv}>Covid Advisory</div>
                <div className={styles.moreDiv1}>More</div>
                <div className={styles.airlineFeesDiv}>Airline Fees</div>
                <div className={styles.tipsDiv}>Tips</div>
                <div className={styles.howWeWork}>Quarantine Rules</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
