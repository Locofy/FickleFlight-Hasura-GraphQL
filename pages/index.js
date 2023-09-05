import { useState, useCallback } from "react";
import {
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
  Icon,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import FlightMainContainer from "../components/flight-main-container";
import TuscanyCardRestauurant from "../components/tuscany-card-restauurant";
import RecommendedHolidays from "../components/recommended-holidays";
import styles from "./index.module.css";
const Next = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState(null);

  const onButtonClick = useCallback(() => {
    window.open("https://www.locofy.ai");
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.next}>
        <div className={styles.heroSection}>
          <header className={styles.topHeader}>
            <div className={styles.topContainer}>
              <button className={styles.fickleflightLogo}>
                <img
                  className={styles.combinedShapeIcon}
                  alt=""
                  src="/combinedshape.svg"
                />
              </button>
              <div className={styles.navigationRight}>
                <div className={styles.navigationMenu}>
                  <button className={styles.explore}>Explore</button>
                  <div className={styles.search}>Search</div>
                  <div className={styles.search}>Hotels</div>
                  <button className={styles.offers}>Offers</button>
                </div>
                <div className={styles.accountSection}>
                  <img
                    className={styles.hamburgerMenuIcon}
                    alt=""
                    src="/notification.svg"
                  />
                  <img
                    className={styles.notificationBellIcon}
                    alt=""
                    src="/notification1.svg"
                  />
                  <img
                    className={styles.profilePictureIcon}
                    alt=""
                    src="/top_avatar@2x.png"
                  />
                </div>
              </div>
            </div>
          </header>
          <div className={styles.searchSection}>
            <div className={styles.searchContainer}>
              <div className={styles.title}>
                <div
                  className={styles.letsExplore}
                >{`Let’s explore & travel the world`}</div>
                <div className={styles.findTheBest}>
                  Find the best destinations and the most popular stays!
                </div>
              </div>
              <div className={styles.searchForm}>
                <div className={styles.formTitleGroup}>
                  <b className={styles.searchFlights}>Search flights</b>
                  <div className={styles.flightOptions}>
                    <div className={styles.flightType}>
                      <FormControlLabel
                        className={styles.radio}
                        label="Return"
                        labelPlacement="end"
                        control={<Radio size="medium" />}
                      />
                      <FormControlLabel
                        className={styles.radio1}
                        label="One-way"
                        labelPlacement="end"
                        control={
                          <Radio color="primary" checked size="medium" />
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.formInputsRow}>
                  <div className={styles.inputsRow}>
                    <Autocomplete
                      className={styles.departureField}
                      disablePortal
                      options={[
                        "Singapore (SIN)",
                        "Sydney (SYD)",
                        "Siem Reap (REP)",
                        "Shanghai (PVG)",
                        "Sanya (SYX)",
                      ]}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          color="primary"
                          label="Departure"
                          variant="outlined"
                          placeholder=""
                          helperText=""
                        />
                      )}
                      defaultValue="Singapore -  Changi (SIN)"
                      size="medium"
                    />
                    <div className={styles.arrivalField}>
                      <div className={styles.input}>
                        <div className={styles.labelContainer}>
                          <div className={styles.arrival}>Arrival</div>
                        </div>
                        <div className={styles.active}>
                          <div className={styles.muiautocompletetag}>
                            <div className={styles.chip}>
                              <div className={styles.container}>
                                <div className={styles.avatar}>
                                  <div className={styles.op}>F</div>
                                </div>
                                <div className={styles.typography}>
                                  <div className={styles.chip1}>Chip</div>
                                </div>
                                <img
                                  className={styles.notificationBellIcon}
                                  alt=""
                                  src="/cancel.svg"
                                />
                              </div>
                            </div>
                            <div className={styles.chip}>
                              <div className={styles.container}>
                                <div className={styles.avatar}>
                                  <div className={styles.op}>F</div>
                                </div>
                                <div className={styles.typography}>
                                  <div className={styles.chip1}>Chip</div>
                                </div>
                                <img
                                  className={styles.notificationBellIcon}
                                  alt=""
                                  src="/cancel.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.losAngelesLa}>
                            Los Angeles (LA)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.departureField}>
                      <DatePicker
                        label="Date"
                        value={selectOutlinedDateTimePickerValue}
                        onChange={(newValue) => {
                          setSelectOutlinedDateTimePickerValue(newValue);
                        }}
                        slotProps={{
                          textField: {
                            variant: "outlined",
                            size: "medium",
                            fullWidth: true,
                            color: "primary",
                          },
                        }}
                      />
                    </div>
                  </div>
                  <div className={styles.buttonGroup}>
                    <div className={styles.searchFlightsButton}>
                      <div className={styles.button}>Search flights</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.homeContents}>
          <div className={styles.upcomingFlightSection}>
            <div className={styles.upcomingFlightSection1}>
              <b className={styles.recentSearches}>Recent Searches</b>
              <div className={styles.flightDetails}>
                <div className={styles.recentSearches1}>
                  <FlightMainContainer
                    flightOrigin="SIN"
                    flightDestination="/flight-icons.svg"
                    flightOriginCode="LAX"
                    departureDate="Depart on: "
                    returnDate="7 Sep 2021"
                  />
                  <FlightMainContainer
                    flightOrigin="MY"
                    flightDestination="/flight-icons1.svg"
                    flightOriginCode="DUB"
                    departureDate="Depart on:"
                    returnDate=" 9 Sep 2021"
                  />
                </div>
                <div className={styles.prepareMenu}>
                  <div className={styles.recentSearches}>
                    Prepare for your trip
                  </div>
                  <div className={styles.tripMenus}>
                    <button className={styles.hotel}>
                      <img
                        className={styles.hotelIcon}
                        alt=""
                        src="/hotel-icon.svg"
                      />
                      <div className={styles.hotel1}>Hotel</div>
                    </button>
                    <button className={styles.hotel}>
                      <img
                        className={styles.attractionsIcon}
                        alt=""
                        src="/attractions-icon.svg"
                      />
                      <div className={styles.attractions1}>Attractions</div>
                    </button>
                    <button className={styles.hotel}>
                      <img
                        className={styles.hotelIcon}
                        alt=""
                        src="/eats-icon.svg"
                      />
                      <div className={styles.attractions1}>Eats</div>
                    </button>
                    <button className={styles.hotel}>
                      <img
                        className={styles.attractionsIcon}
                        alt=""
                        src="/commute-icon.svg"
                      />
                      <div className={styles.attractions1}>Commute</div>
                    </button>
                    <button className={styles.hotel}>
                      <img
                        className={styles.taxiIcon}
                        alt=""
                        src="/taxi-icon.svg"
                      />
                      <div className={styles.taxi1}>Taxi</div>
                    </button>
                    <button className={styles.hotel}>
                      <img
                        className={styles.attractionsIcon}
                        alt=""
                        src="/movies-icon.svg"
                      />
                      <div className={styles.attractions1}>Movies</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.popDestinationsMain}>
            <div className={styles.destinationsTitles}>
              <div className={styles.titleContainer}>
                <b className={styles.recentSearches}>Plan your next trip</b>
                <b className={styles.mostPopularDestinations}>
                  Most Popular Destinations
                </b>
              </div>
              <button className={styles.viewAllTop}>
                <div className={styles.viewAllDestinations}>
                  View all destinations
                </div>
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="/arrowright.svg"
                />
              </button>
            </div>
            <div className={styles.cardsContainer}>
              <button className={styles.col1}>
                <div className={styles.pariscard}>
                  <div className={styles.destinationDetails}>
                    <b className={styles.paris}>Paris</b>
                    <div className={styles.details}>
                      <div className={styles.div}>$699</div>
                      <div className={styles.from}>from</div>
                    </div>
                  </div>
                </div>
              </button>
              <button className={styles.col1}>
                <div className={styles.greececard}>
                  <div className={styles.destinationDetails}>
                    <b className={styles.paris}>Greece</b>
                    <div className={styles.details1}>
                      <div className={styles.div1}>$1079</div>
                      <div className={styles.from1}>from</div>
                    </div>
                  </div>
                </div>
              </button>
              <button className={styles.col1}>
                <TuscanyCardRestauurant
                  tuscanyCardBackgroundImage="url('/norwaycard@3x.png')"
                  tuscany="Norway"
                  tuscanyDisplay="inline-block"
                  detailsWidth="5.68rem"
                  prop="$895"
                  divWidth="5.68rem"
                  fromLeft="2.4rem"
                />
              </button>
              <button className={styles.col1}>
                <TuscanyCardRestauurant tuscany="Tuscany" prop="$1245" />
              </button>
            </div>
            <div className={styles.viewAllBottom}>
              <div className={styles.viewAllDestinations1}>
                View all destinations
              </div>
              <img
                className={styles.notificationBellIcon}
                alt=""
                src="/arrowright1.svg"
              />
            </div>
          </div>
          <div className={styles.recommendedHolidaysContainer}>
            <div className={styles.recTitle}>
              <RecommendedHolidays />
              <button className={styles.viewAllHolidaysParent}>
                <div className={styles.viewAllHolidays}>View all holidays</div>
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="/arrowright2.svg"
                />
              </button>
            </div>
            <div className={styles.recCardsContainer}>
              <button className={styles.recCard1}>
                <img
                  className={styles.unsplash5mv818tzxeoIcon}
                  alt=""
                  src="/unsplash5mv818tzxeo@2x.png"
                />
                <div className={styles.holidayDetails}>
                  <div className={styles.recTitle}>
                    <div className={styles.baliParent}>
                      <div className={styles.bali}>Bali</div>
                      <div className={styles.d3n}>4D3N</div>
                    </div>
                    <div className={styles.div2}>$899</div>
                  </div>
                </div>
              </button>
              <button className={styles.recCard1}>
                <img
                  className={styles.unsplash5mv818tzxeoIcon}
                  alt=""
                  src="/switzerlandimage@2x.png"
                />
                <div className={styles.holidayDetails}>
                  <div className={styles.recTitle}>
                    <div className={styles.baliParent}>
                      <div className={styles.bali}>Swiss</div>
                      <div className={styles.d3n}>6D5N</div>
                    </div>
                    <div className={styles.div2}>$900</div>
                  </div>
                </div>
              </button>
              <button className={styles.recCard3}>
                <img
                  className={styles.unsplash5mv818tzxeoIcon}
                  alt=""
                  src="/boracayimage@2x.png"
                />
                <div className={styles.holidayDetails}>
                  <div className={styles.recTitle}>
                    <div className={styles.baliParent}>
                      <div className={styles.bali}>Boracay</div>
                      <div className={styles.d3n}>5D4N</div>
                    </div>
                    <div className={styles.div2}>$699</div>
                  </div>
                </div>
              </button>
              <button className={styles.recCard4}>
                <img
                  className={styles.unsplash5mv818tzxeoIcon}
                  alt=""
                  src="/palawanimage@2x.png"
                />
                <div className={styles.holidayDetails}>
                  <div className={styles.recTitle}>
                    <div className={styles.baliParent}>
                      <div className={styles.bali}>Palawan</div>
                      <div className={styles.d3n}>4D3N</div>
                    </div>
                    <div className={styles.div2}>$789</div>
                  </div>
                </div>
              </button>
            </div>
            <div className={styles.viewAllBottom1}>
              <div className={styles.viewAllHolidays1}>View all holidays</div>
              <img
                className={styles.notificationBellIcon}
                alt=""
                src="/arrowright3.svg"
              />
            </div>
          </div>
          <div className={styles.popularStays}>
            <div className={styles.popularStaysHeader}>
              <b className={styles.popularStays1}>Popular Stays</b>
              <button className={styles.viewAllStaysButton}>
                <div className={styles.viewAllStays}>View all stays</div>
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="/arrowright4.svg"
                />
              </button>
            </div>
            <div className={styles.hotelCards}>
              <div className={styles.hotelCard1}>
                <div className={styles.hotelCard}>
                  <img
                    className={styles.matterhornSuitesImage}
                    alt=""
                    src="/unsplashrlwe8f8anoc@2x.png"
                  />
                  <div className={styles.stayDetails}>
                    <div className={styles.stayDetailsRows}>
                      <div className={styles.entireBungalow}>
                        Entire bungalow
                      </div>
                      <b className={styles.matterhornSuites}>
                        Matterhorn Suites
                      </b>
                      <div className={styles.night}>$575/night</div>
                    </div>
                    <img
                      className={styles.videoIcon}
                      alt=""
                      src="/video1.svg"
                    />
                  </div>
                  <div className={styles.rating}>
                    <div className={styles.reviews}>(60 reviews)</div>
                    <div className={styles.parent}>
                      <div className={styles.div6}>4.9</div>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                  <button className={styles.moreDetailsButton}>
                    <div className={styles.button1}>More details</div>
                  </button>
                </div>
              </div>
              <div className={styles.hotelCard1}>
                <div className={styles.hotelCard}>
                  <img
                    className={styles.matterhornSuitesImage}
                    alt=""
                    src="/unsplashtsn8bpopveo@2x.png"
                  />
                  <div className={styles.stayDetails1}>
                    <div className={styles.stayDetailsRows}>
                      <div className={styles.entireBungalow}>
                        2-Story beachfront suite
                      </div>
                      <b className={styles.matterhornSuites}>
                        Discovery Shores
                      </b>
                      <div className={styles.night}>$360/night</div>
                    </div>
                    <img
                      className={styles.videoIcon}
                      alt=""
                      src="/video1.svg"
                    />
                  </div>
                  <div className={styles.rating}>
                    <div className={styles.reviews}>(116 reviews)</div>
                    <div className={styles.parent}>
                      <div className={styles.div6}>4.8</div>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector1.svg"
                      />
                    </div>
                  </div>
                  <button className={styles.moreDetailsButton}>
                    <div className={styles.button1}>More details</div>
                  </button>
                </div>
              </div>
              <div className={styles.hotelCard1}>
                <div className={styles.hotelCard4}>
                  <img
                    className={styles.matterhornSuitesImage}
                    alt=""
                    src="/unsplashrlwe8f8anoc1@2x.png"
                  />
                  <div className={styles.stayDetails2}>
                    <div className={styles.stayDetailsRows}>
                      <div className={styles.entireBungalow}>
                        Single deluxe hut
                      </div>
                      <b className={styles.arcticHut}>{`Arctic Hut `}</b>
                      <div className={styles.night}>$420/night</div>
                    </div>
                    <img
                      className={styles.videoIcon}
                      alt=""
                      src="/video1.svg"
                    />
                  </div>
                  <div className={styles.rating}>
                    <div className={styles.reviews2}>(78 reviews)</div>
                    <div className={styles.parent}>
                      <div className={styles.div6}>4.7</div>
                      <img
                        className={styles.vectorIcon2}
                        alt=""
                        src="/vector2.svg"
                      />
                    </div>
                  </div>
                  <button className={styles.moreDetailsButton}>
                    <div className={styles.button1}>More details</div>
                  </button>
                </div>
              </div>
              <div className={styles.hotelCard41}>
                <div className={styles.hotelCard5}>
                  <img
                    className={styles.matterhornSuitesImage}
                    alt=""
                    src="/unsplashyqrybvxug5q@2x.png"
                  />
                  <div className={styles.stayDetails}>
                    <div className={styles.stayDetailsRows}>
                      <div className={styles.entireBungalow}>
                        Deluxe King Room
                      </div>
                      <b className={styles.arcticHut}>Lake Louise Inn</b>
                      <div className={styles.night}>$244/night</div>
                    </div>
                    <img
                      className={styles.videoIcon}
                      alt=""
                      src="/video1.svg"
                    />
                  </div>
                  <div className={styles.rating}>
                    <div className={styles.reviews}>(63 reviews)</div>
                    <div className={styles.parent}>
                      <div className={styles.div6}>4.6</div>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector3.svg"
                      />
                    </div>
                  </div>
                  <button className={styles.moreDetailsButton}>
                    <div className={styles.button1}>More details</div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.mobileViewAllStays}>
              <div className={styles.viewAllStays1}>View all stays</div>
              <img
                className={styles.notificationBellIcon}
                alt=""
                src="/arrowright5.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.footerSection}>
          <div className={styles.subscribeSection}>
            <div className={styles.shareYourTravelsForm}>
              <div className={styles.formHeader}>
                <a
                  className={styles.formTitleSubtext}
                  href="https://www.locofy.ai"
                >
                  subscribe to our newsletter
                </a>
                <b className={styles.formTitle}>Get weekly updates</b>
              </div>
              <div className={styles.form}>
                <div className={styles.formText}>
                  <div className={styles.fillInYour}>
                    Fill in your details to join the party!
                  </div>
                </div>
                <div className={styles.formText}>
                  <TextField
                    className={styles.destinationNameInput}
                    color="warning"
                    variant="filled"
                    type="text"
                    label="Haider"
                    placeholder="Placeholder"
                    size="medium"
                    margin="none"
                  />
                </div>
                <button className={styles.button5} onClick={onButtonClick}>
                  <div className={styles.unstyledbutton}>
                    <div className={styles.button6}>submit</div>
                  </div>
                </button>
                <TextField
                  sx={{ width: 220 }}
                  color="secondary"
                  variant="outlined"
                  defaultValue="Ye mera area hy"
                  multiline
                  rows={3}
                  label="Label"
                  placeholder="Textarea placeholder"
                  margin="none"
                />
              </div>
            </div>
          </div>
          <footer className={styles.footer}>
            <div className={styles.fickleflightBio}>
              <img className={styles.logoIcon} alt="" src="/logo.svg" />
              <div className={styles.fickleFlightIs}>
                Fickle Flight is your one-stop travel portal. We offer hassle
                free flight and hotel bookings. We also have all your flight
                needs in you online shop.
              </div>
              <img
                className={styles.socialIcons}
                alt=""
                src="/social-icons.svg"
              />
            </div>
            <div className={styles.footerChild} />
            <div className={styles.footerLinks}>
              <div className={styles.company}>
                <div className={styles.company1}>Company</div>
                <div className={styles.aboutUs}>About Us</div>
                <div className={styles.news}>News</div>
                <div className={styles.howWeWork}>How we work</div>
                <div className={styles.careers}>Careers</div>
              </div>
              <div className={styles.company}>
                <div className={styles.account}>Account</div>
                <div className={styles.support1}>Support</div>
                <div className={styles.supportCenter}>Support Center</div>
                <div className={styles.faq}>FAQ</div>
                <div className={styles.accessibility}>Accessibility</div>
              </div>
              <div className={styles.more}>
                <div className={styles.covidAdvisory}>Covid Advisory</div>
                <div className={styles.more1}>More</div>
                <div className={styles.airlineFees}>Airline Fees</div>
                <div className={styles.tips}>Tips</div>
                <div className={styles.howWeWork}>Quarantine Rules</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Next;
