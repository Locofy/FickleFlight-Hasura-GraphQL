import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MatterhornPopup from "../components/MatterhornPopup";
import PortalPopup from "../components/PortalPopup";
import SearchContainer from "../components/SearchContainer";
import RecentSearchesSection from "../components/RecentSearchesSection";
import PopDestinationsSection from "../components/PopDestinationsSection";
import RecommendedSection from "../components/RecommendedSection";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  const onHotelButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  const openMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(true);
  }, []);

  const closeMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(false);
  }, []);

  return (
    <>
      <div className={styles.homepageDiv}>
        <div className={styles.heroSectionDiv}>
          <header className={styles.topHeader}>
            <div className={styles.topContainerDiv}>
              <img className={styles.symbolsIcon} alt="" src="../symbols.svg" />
              <div className={styles.navigationRightDiv}>
                <div className={styles.navigationMenuDiv}>
                  <button className={styles.exploreButton}>Explore</button>
                  <div className={styles.searchDiv} onClick={onSearchTextClick}>
                    Search
                  </div>
                  <div className={styles.searchDiv} onClick={onHotelsTextClick}>
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
                    src="../notification1.svg"
                  />
                  <img
                    className={styles.profilePictureIcon}
                    alt=""
                    src="../top_avatar@2x.png"
                  />
                </div>
              </div>
            </div>
          </header>
          <SearchContainer />
        </div>
        <div className={styles.homeContentsDiv}>
          <div className={styles.upcomingFlightSection}>
            <b className={styles.recentSearchesB}>Recent Searches</b>
            <div className={styles.flightDetailsDiv}>
              <RecentSearchesSection />
              <div className={styles.prepareMenuDiv}>
                <div className={styles.recentSearchesB}>
                  Prepare for your trip
                </div>
                <div className={styles.tripMenusDiv}>
                  <button
                    className={styles.hotelButton}
                    onClick={onHotelButtonClick}
                  >
                    <img
                      className={styles.hotelIcon}
                      alt=""
                      src="../hotel-icon.svg"
                    />
                    <div className={styles.hotelDiv}>Hotel</div>
                  </button>
                  <button className={styles.hotelButton}>
                    <div className={styles.hotelIcon}>
                      <div className={styles.backgroundDiv} />
                      <img
                        className={styles.ticketIcon}
                        alt=""
                        src="../ticket.svg"
                      />
                    </div>
                    <div className={styles.attractionsDiv}>Attractions</div>
                  </button>
                  <button className={styles.hotelButton}>
                    <img
                      className={styles.hotelIcon}
                      alt=""
                      src="../eats-icon.svg"
                    />
                    <div className={styles.attractionsDiv}>Eats</div>
                  </button>
                  <button className={styles.hotelButton}>
                    <div className={styles.hotelIcon}>
                      <div className={styles.backgroundDiv1} />
                      <img
                        className={styles.trainIcon}
                        alt=""
                        src="../vector.svg"
                      />
                    </div>
                    <div className={styles.attractionsDiv}>Commute</div>
                  </button>
                  <button className={styles.hotelButton}>
                    <div className={styles.taxiIconDiv}>
                      <div className={styles.backgroundDiv2} />
                      <img
                        className={styles.taxiIcon}
                        alt=""
                        src="../vector1.svg"
                      />
                    </div>
                    <div className={styles.taxiDiv}>Taxi</div>
                  </button>
                  <button className={styles.hotelButton}>
                    <div className={styles.hotelIcon}>
                      <div className={styles.backgroundDiv3} />
                      <img
                        className={styles.movieIcon}
                        alt=""
                        src="../vector2.svg"
                      />
                    </div>
                    <div className={styles.attractionsDiv}>Movies</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <PopDestinationsSection />
          <RecommendedSection />
          <form className={styles.popularStaysForm}>
            <div className={styles.popularStaysHeader}>
              <div className={styles.popularStaysTitle}>
                <b className={styles.popularStaysB}>Popular Stays</b>
              </div>
              <button
                className={styles.viewAllStaysButton}
                onClick={onViewAllStaysButtonClick}
              >
                <div className={styles.viewAllStays}>View all stays</div>
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="../arrowright4.svg"
                />
              </button>
            </div>
            <div className={styles.hotelCardsDiv}>
              <div className={styles.hotelCard1}>
                <div className={styles.hotelCardDiv}>
                  <img
                    className={styles.matterhornSuitesImage}
                    alt=""
                    src="../unsplashrlwe8f8anoc@2x.png"
                  />
                  <div className={styles.stayDetailsDiv}>
                    <div className={styles.stayDetailsRows}>
                      <div className={styles.entireBungalowDiv}>
                        Entire bungalow
                      </div>
                      <b className={styles.matterhornSuitesB}>
                        Matterhorn Suites
                      </b>
                      <div className={styles.nightDiv}>$575/night</div>
                    </div>
                    <img
                      className={styles.videoIcon}
                      alt=""
                      src="../video.svg"
                      onClick={openMatterhornPopup}
                    />
                  </div>
                  <div className={styles.ratingDiv}>
                    <div className={styles.reviewsDiv}>(60 reviews)</div>
                    <div className={styles.groupDiv}>
                      <div className={styles.div}>4.9</div>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="../vector3.svg"
                      />
                    </div>
                  </div>
                  <button className={styles.moreDetailsButton}>
                    <div className={styles.buttonDiv}>More details</div>
                  </button>
                </div>
              </div>
              <div className={styles.hotelCard1}>
                <div className={styles.hotelCardDiv}>
                  <img
                    className={styles.matterhornSuitesImage}
                    alt=""
                    src="../unsplashtsn8bpopveo@2x.png"
                  />
                  <div className={styles.stayDetailsDiv1}>
                    <div className={styles.stayDetailsRows}>
                      <div className={styles.entireBungalowDiv}>
                        2-Story beachfront suite
                      </div>
                      <b className={styles.matterhornSuitesB}>
                        Discovery Shores
                      </b>
                      <div className={styles.nightDiv}>$360/night</div>
                    </div>
                  </div>
                  <div className={styles.ratingDiv}>
                    <div className={styles.reviewsDiv}>(116 reviews)</div>
                    <div className={styles.groupDiv}>
                      <div className={styles.div}>4.8</div>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="../vector4.svg"
                      />
                    </div>
                  </div>
                  <button className={styles.moreDetailsButton}>
                    <div className={styles.buttonDiv}>More details</div>
                  </button>
                </div>
              </div>
              <div className={styles.hotelCard1}>
                <div className={styles.hotelCardDiv2}>
                  <img
                    className={styles.matterhornSuitesImage}
                    alt=""
                    src="../unsplashrlwe8f8anoc1@2x.png"
                  />
                  <div className={styles.stayDetailsDiv1}>
                    <div className={styles.stayDetailsRows}>
                      <div className={styles.entireBungalowDiv}>
                        Single deluxe hut
                      </div>
                      <b className={styles.arcticHutB}>{`Arctic Hut `}</b>
                      <div className={styles.nightDiv}>$420/night</div>
                    </div>
                  </div>
                  <div className={styles.ratingDiv}>
                    <div className={styles.reviewsDiv2}>(78 reviews)</div>
                    <div className={styles.groupDiv2}>
                      <div className={styles.div2}>4.7</div>
                      <img
                        className={styles.vectorIcon2}
                        alt=""
                        src="../vector5.svg"
                      />
                    </div>
                  </div>
                  <button className={styles.moreDetailsButton}>
                    <div className={styles.buttonDiv}>More details</div>
                  </button>
                </div>
              </div>
              <div className={styles.hotelCard4}>
                <div className={styles.hotelCardDiv3}>
                  <img
                    className={styles.matterhornSuitesImage}
                    alt=""
                    src="../unsplashyqrybvxug5q@2x.png"
                  />
                  <div className={styles.stayDetailsDiv}>
                    <div className={styles.stayDetailsRows}>
                      <div className={styles.entireBungalowDiv}>
                        Deluxe King Room
                      </div>
                      <b className={styles.arcticHutB}>Lake Louise Inn</b>
                      <div className={styles.nightDiv}>$244/night</div>
                    </div>
                    <img
                      className={styles.videoIcon}
                      alt=""
                      src="../video1.svg"
                      onClick={openMatterhornPopup1}
                    />
                  </div>
                  <div className={styles.ratingDiv}>
                    <div className={styles.reviewsDiv}>(63 reviews)</div>
                    <div className={styles.groupDiv}>
                      <div className={styles.div}>4.6</div>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="../vector6.svg"
                      />
                    </div>
                  </div>
                  <button className={styles.moreDetailsButton}>
                    <div className={styles.buttonDiv}>More details</div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.mobileViewAllStays}>
              <div className={styles.viewAllStays1}>View all stays</div>
              <img
                className={styles.notificationBellIcon}
                alt=""
                src="../arrowright5.svg"
              />
            </div>
          </form>
        </div>
        <div className={styles.footerSectionDiv}>
          <div className={styles.subscribeSectionDiv}>
            <img
              className={styles.subscribeSectionBackground}
              alt=""
              src="../subscribe-section-background@2x.png"
            />
            <div className={styles.shareYourTravelsForm}>
              <div className={styles.formHeaderDiv}>
                <b className={styles.recentSearchesB}>
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
                    <div className={styles.inputDiv}>
                      <div className={styles.inactiveDiv}>
                        <div className={styles.mUIAutocompleteTagDiv}>
                          <div className={styles.chipDiv}>
                            <div className={styles.containerDiv}>
                              <div className={styles.avatarDiv}>
                                <div className={styles.oPDiv}>F</div>
                              </div>
                              <div className={styles.typographyDiv}>
                                <div className={styles.chipDiv1}>Chip</div>
                              </div>
                              <img
                                className={styles.notificationBellIcon}
                                alt=""
                                src="../cancel.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.chipDiv}>
                            <div className={styles.containerDiv}>
                              <div className={styles.avatarDiv}>
                                <div className={styles.oPDiv}>F</div>
                              </div>
                              <div className={styles.typographyDiv}>
                                <div className={styles.chipDiv1}>Chip</div>
                              </div>
                              <img
                                className={styles.notificationBellIcon}
                                alt=""
                                src="../cancel.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.yourNameDiv}>Your name</div>
                        <div className={styles.mUIAutocompleteIndicator}>
                          <div className={styles.iconButtonDiv}>
                            <div className={styles.unstyledIconButtonDiv}>
                              <img
                                className={styles.closeIcon}
                                alt=""
                                src="../close.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.arrowDiv}>
                          <img className={styles.notificationBellIcon} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.formTextDiv}>
                    <div className={styles.inputDiv}>
                      <div className={styles.inactiveDiv}>
                        <div className={styles.mUIAutocompleteTagDiv}>
                          <div className={styles.chipDiv}>
                            <div className={styles.containerDiv}>
                              <div className={styles.avatarDiv}>
                                <div className={styles.oPDiv}>F</div>
                              </div>
                              <div className={styles.typographyDiv}>
                                <div className={styles.chipDiv1}>Chip</div>
                              </div>
                              <img
                                className={styles.notificationBellIcon}
                                alt=""
                                src="../cancel.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.chipDiv}>
                            <div className={styles.containerDiv}>
                              <div className={styles.avatarDiv}>
                                <div className={styles.oPDiv}>F</div>
                              </div>
                              <div className={styles.typographyDiv}>
                                <div className={styles.chipDiv1}>Chip</div>
                              </div>
                              <img
                                className={styles.notificationBellIcon}
                                alt=""
                                src="../cancel.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.yourNameDiv}>Email address</div>
                        <div className={styles.mUIAutocompleteIndicator}>
                          <div className={styles.iconButtonDiv}>
                            <div className={styles.unstyledIconButtonDiv}>
                              <img
                                className={styles.closeIcon}
                                alt=""
                                src="../close.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.arrowDiv}>
                          <img className={styles.notificationBellIcon} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.buttonDiv4}>
                  <div className={styles.unstyledButtonDiv}>
                    <div className={styles.buttonDiv5}>submit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className={styles.footer}>
            <div className={styles.fickleFlightBioDiv}>
              <img className={styles.logoIcon} alt="" src="../logo.svg" />
              <div className={styles.fickleFlightIsYourOneStop}>
                Fickle Flight is your one-stop travel portal. We offer hassle
                free flight and hotel bookings. We also have all your flight
                needs in you online shop.
              </div>
              <img
                className={styles.socialIcons}
                alt=""
                src="../social-icons.svg"
              />
            </div>
            <div className={styles.lineDiv} />
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
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
      {isMatterhornPopup1Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup1}
        >
          <MatterhornPopup onClose={closeMatterhornPopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default Homepage;
