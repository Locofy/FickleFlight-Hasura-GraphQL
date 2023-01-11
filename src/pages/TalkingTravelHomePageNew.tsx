import { FunctionComponent, useCallback } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import styles from "./TalkingTravelHomePageNew.module.css";

const TalkingTravelHomePageNew: FunctionComponent = () => {
  const onStoryTextClick = useCallback(() => {
    // Please sync "Talking Travel - Blog article page" to the project
  }, []);

  const onFeaturedDestinationCTAClick = useCallback(() => {
    // Please sync "Talking Travel - Blog article page" to the project
  }, []);

  return (
    <div className={styles.talkingTravelHomePageNew}>
      <div className={styles.headerSection}>
        <div className={styles.headerElementsRow}>
          <img
            className={styles.headerLogoIcon}
            alt=""
            src="../header-logo.svg"
          />
          <div className={styles.headerMenuOptionsRow}>
            <div className={styles.headerLinks}>
              <div className={styles.home}>Home</div>
              <div className={styles.story} onClick={onStoryTextClick}>
                Story
              </div>
              <div className={styles.gallery}>Gallery</div>
              <div className={styles.contactUs}>Contact Us</div>
            </div>
            <img
              className={styles.headerHamburgerMenu}
              alt=""
              src="../group-3.svg"
            />
            <div className={styles.headerMenuOptionsRowChild} />
            <img
              className={styles.headerSearchIcon}
              alt=""
              src="../header-search-icon.svg"
            />
            <img
              className={styles.headerProfileIcon}
              alt=""
              src="../header-profile.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.heroSection}>
        <img
          className={styles.heroBackgroundImage}
          alt=""
          src="../unsplashjb8wahvhmoy@2x.png"
        />
        <div className={styles.heroContainer}>
          <div className={styles.heroContentContainer}>
            <div className={styles.heroTexts}>
              <div className={styles.heroTitle}>
                <span>Let’s talk</span>
                <span className={styles.aboutYourNext}>
                  {" "}
                  about your next trip!
                </span>
              </div>
              <div className={styles.heroDescription}>
                Share your favorite travel destination and we will feature it in
                our next blog!
              </div>
            </div>
            <div className={styles.callToActionsRow}>
              <div className={styles.watchHighlightsCta}>
                <button className={styles.ellipseParent}>
                  <img
                    className={styles.groupChild}
                    alt=""
                    src="../ellipse-13.svg"
                  />
                  <img
                    className={styles.groupItem}
                    alt=""
                    src="../polygon-1.svg"
                  />
                </button>
                <div className={styles.watchHighlights}>Watch highlights</div>
              </div>
              <div className={styles.shareYourStoryCta}>
                <div className={styles.shareYourStoryCtaChild} />
                <div className={styles.shareYourStory}>Share your story</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.featuredDestinationSection}>
        <div className={styles.featuredImageContainer}>
          <img
            className={styles.featuredImageIcon}
            alt=""
            src="../unsplash87jymb9zfu@2x.png"
          />
        </div>
        <div className={styles.featuredDestinationBlurb}>
          <div className={styles.featuredDestinationCopywriti}>
            <b className={styles.featuredDestinationCategory}>
              Featured Destination
            </b>
            <div className={styles.featuredDestinationTitle}>
              Our swiss adventure blog
            </div>
            <div
              className={styles.featuredDestinationDescripti}
            >{`Visiting the swiss alps? Want to know the requirements on travelling to Switzerland during the pandemic? Our blog might help! `}</div>
          </div>
          <button
            className={styles.featuredDestinationCta}
            onClick={onFeaturedDestinationCTAClick}
          >
            <div className={styles.watchNow}>Watch Now</div>
            <button className={styles.ellipseGroup}>
              <img
                className={styles.groupInner}
                alt=""
                src="../ellipse-131.svg"
              />
              <img
                className={styles.polygonIcon}
                alt=""
                src="../polygon-11.svg"
              />
            </button>
          </button>
        </div>
      </div>
      <div className={styles.discoverTheWorldSection}>
        <div className={styles.discoverTheWorldHeader}>
          <b className={styles.discoverTheWorld}>Join our adventures</b>
          <div className={styles.discoverTheWorld1}>
            Discover the world with us
          </div>
        </div>
        <div className={styles.locationCardsRow}>
          <div className={styles.icelandCard}>
            <img
              className={styles.icelandCardImage}
              alt=""
              src="../iceland-card-image@2x.png"
            />
            <div className={styles.cardTitle}>
              <div className={styles.iceland}>Iceland</div>
              <div className={styles.discover}>Discover</div>
            </div>
          </div>
          <div className={styles.italyCard}>
            <img
              className={styles.icelandCardImage}
              alt=""
              src="../italy-card-image@2x.png"
            />
            <div className={styles.cardTitle}>
              <div className={styles.iceland}>Italy</div>
              <div className={styles.discover}>Discover</div>
            </div>
          </div>
          <div className={styles.dubaiCard}>
            <img
              className={styles.icelandCardImage}
              alt=""
              src="../dubai-card-image@2x.png"
            />
            <div className={styles.cardTitle}>
              <div className={styles.dubai}>Dubai</div>
              <div className={styles.discover}>Discover</div>
            </div>
          </div>
          <div className={styles.patagoniaCard}>
            <img
              className={styles.icelandCardImage}
              alt=""
              src="../patagonia-card-image@2x.png"
            />
            <div className={styles.cardTitle}>
              <div className={styles.dubai}>Patagonia</div>
              <div className={styles.discover}>Discover</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.shareYourTravelsSection}>
        <img
          className={styles.shareYourTravelsSectionBac}
          alt=""
          src="../rectangle-193@2x.png"
        />
        <div className={styles.shareYourTravelsForm}>
          <div className={styles.formHeader}>
            <b className={styles.discoverTheWorld}>Let’s build a community</b>
            <div className={styles.formTitle}>Join our next destination</div>
          </div>
          <div className={styles.form}>
            <div className={styles.formText}>
              <div className={styles.iceland}>Share your travels</div>
              <div className={styles.suggestANew}>
                Suggest a new travel destination that you want to see and we
                will feature it in our blog.
              </div>
            </div>
            <div className={styles.formFields}>
              <div className={styles.cardTitle}>
                <TextField
                  className={styles.input}
                  color="primary"
                  variant="outlined"
                  type="text"
                  label="Destination name"
                  size="medium"
                  margin="none"
                />
              </div>
              <div className={styles.cardTitle}>
                <div className={styles.input1}>
                  <div className={styles.inactive}>
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
                            className={styles.cancelIcon}
                            alt=""
                            src="../cancel.svg"
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
                            className={styles.cancelIcon}
                            alt=""
                            src="../cancel.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.countryOfDestination}>
                      Country of Destination
                    </div>
                    <img
                      className={styles.muiAutocompleteIndicator}
                      alt=""
                      src="../mui-autocomplete-indicator.svg"
                    />
                    <img
                      className={styles.arrowIcon}
                      alt=""
                      src="../arrow.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.cardTitle}>
                <TextField
                  className={styles.input}
                  color="primary"
                  variant="outlined"
                  type="text"
                  label="Your name"
                  size="medium"
                  margin="none"
                />
              </div>
              <div className={styles.cardTitle}>
                <FormControl className={styles.input3} variant="outlined">
                  <InputLabel color="primary">Shooting category</InputLabel>
                  <Select
                    color="primary"
                    size="medium"
                    label="Shooting category"
                  >
                    <MenuItem value="Landscape">Landscape</MenuItem>
                    <MenuItem value="People">People</MenuItem>
                    <MenuItem value="Seascape">Seascape</MenuItem>
                    <MenuItem value="Mountain Peaks">Mountain Peaks</MenuItem>
                    <MenuItem value="Transportation">Transportation</MenuItem>
                    <MenuItem value="Architecture">Architecture</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </div>
              <div className={styles.describeMoreTextarea}>
                <TextField
                  className={styles.input3}
                  color="primary"
                  variant="outlined"
                  multiline
                  rows={4}
                  label="Describe what kind of photos you want to focus on"
                  margin="none"
                />
              </div>
            </div>
            <button className={styles.formSubmitButton}>
              <div className={styles.formSubmitButtonChild} />
              <div className={styles.submit}>Submit</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.formHeader}>
          <b className={styles.discoverTheWorld}>catch up to our posts</b>
          <div className={styles.formTitle}>Recent story entries</div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.unsplashrezbvcvaspiParent}>
              <img
                className={styles.unsplashrezbvcvaspiIcon}
                alt=""
                src="../unsplashrezbvcvaspi@2x.png"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.zermattSwitzerlandParent}>
                    <div className={styles.iceland}>Zermatt, Switzerland</div>
                    <div className={styles.marvelOnThe}>
                      Marvel on the beauty of the iconic Matterhorn. Find the
                      best places to stay that has the best views of this
                      peak...
                    </div>
                  </div>
                  <button className={styles.ellipseContainer}>
                    <img
                      className={styles.groupChild}
                      alt=""
                      src="../ellipse-132.svg"
                    />
                    <img
                      className={styles.groupChild1}
                      alt=""
                      src="../polygon-12.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent1}>
              <div className={styles.unsplashcZhkgezy3uParent}>
                <img
                  className={styles.unsplashcZhkgezy3uIcon}
                  alt=""
                  src="../unsplashc-zhkgezy3u@2x.png"
                />
                <div className={styles.tuscanyItalyParent}>
                  <div className={styles.iceland}>Tuscany, Italy</div>
                  <div className={styles.marvelOnThe}>
                    <span>{`The amazing Tuscany is home to famous Renaissance art and architecture and a vast scenic landscape. `}</span>
                    <span className={styles.viewFullBlog}>
                      view full blog...
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.unsplashUinPffj7cParent}>
                <img
                  className={styles.unsplashUinPffj7cIcon}
                  alt=""
                  src="../unsplash-uinpffj7c@2x.png"
                />
                <div className={styles.tuscanyItalyParent}>
                  <div className={styles.iceland}>Kyoto, Japan</div>
                  <div className={styles.marvelOnThe}>
                    <span>{`Kyoto is well known for its temples, gardens, Shinto shrines and wooden houses. It’s time to visit tokyo. `}</span>
                    <span className={styles.viewFullBlog}>
                      view full blog...
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.unsplashUinPffj7cParent}>
                <img
                  className={styles.unsplashcZhkgezy3uIcon}
                  alt=""
                  src="../unsplashpg5df4wy8m0@2x.png"
                />
                <div className={styles.tuscanyItalyParent}>
                  <div className={styles.iceland}>Lofoten Islands, Norway</div>
                  <div className={styles.marvelOnThe}>
                    <span>{`Featuring razor-sharp peaks housing the arctic landscape. This astonishing island is perfect for your next postcard.  `}</span>
                    <span className={styles.viewFullBlog}>
                      view full blog...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.talkingTravelAllRightsResParent}>
        <div className={styles.talkingTravelAll}>
          © 2022, Talking Travel. All Rights Reserved.
        </div>
        <div className={styles.homeParent}>
          <div className={styles.home1}>Home</div>
          <div className={styles.blog}>Blog</div>
          <div className={styles.gallery1}>Gallery</div>
          <div className={styles.contactUs1}>Contact Us</div>
        </div>
      </div>
    </div>
  );
};

export default TalkingTravelHomePageNew;
