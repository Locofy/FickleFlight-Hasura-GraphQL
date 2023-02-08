import { FunctionComponent } from "react";
import {
  TextField,
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
  Button,
} from "@mui/material";
import styles from "./MyRideBecomeADriverPopu.module.css";

type MyRideBecomeADriverPopuType = {
  onClose?: () => void;
};

const MyRideBecomeADriverPopu: FunctionComponent<
  MyRideBecomeADriverPopuType
> = ({ onClose }) => {
  return (
    <div className={styles.myRideBecomeADriverPopu}>
      <div className={styles.lastNameInput}>
        <img
          className={styles.undrawFastCarP4Cu1Icon}
          alt=""
          src="../undraw-fast-car-p4cu-1.svg"
        />
        <div className={styles.driveWithMyrideParent}>
          <b className={styles.driveWithMyride}>Drive with MyRide</b>
          <div className={styles.registerAsA}>
            Register as a driver using the form below. Our team will assess and
            get back to you within 48 hours.
          </div>
        </div>
      </div>
      <div className={styles.nameInput}>
        <div className={styles.inputdefaultWrapper}>
          <TextField
            className={styles.inputdefault}
            color="primary"
            variant="outlined"
            type="text"
            label="First Name"
            size="medium"
            margin="none"
          />
        </div>
        <div className={styles.inputdefaultContainer}>
          <TextField
            className={styles.inputdefault}
            color="primary"
            variant="outlined"
            type="text"
            label="Last Name"
            size="medium"
            margin="none"
          />
        </div>
      </div>
      <TextField
        className={styles.inputdefault}
        color="primary"
        variant="outlined"
        type="email"
        label="Email Address"
        size="medium"
        margin="none"
        required
      />
      <Autocomplete
        className={styles.countryInput}
        disablePortal
        options={[
          "Philippines",
          "Poland",
          "Portugal",
          "Qatar",
          "Romania",
          "Russian Federation",
          "Rwanda",
          "St Kitts & Nevis",
          "St Lucia",
          "Saint Vincent & the Grenadines",
          "Samoa",
          "San Marino",
          "Sao Tome & Principe",
          "Saudi Arabia",
          "Senegal",
          "Serbia",
          "Seychelles",
          "Sierra Leone",
          "Singapore",
          "Slovakia",
          "Slovenia",
          "Solomon Islands",
          "Somalia",
          "South Africa",
          "South Sudan",
          "Spain",
          "Sri Lanka",
          "Sudan",
          "Suriname",
          "Swaziland",
          "Sweden",
          "Switzerland",
          "Syria",
          "Taiwan",
          "Tajikistan",
          "Tanzania",
          "Thailand",
          "Togo",
          "Tonga",
          "Trinidad & Tobago",
          "Tunisia",
          "Turkey",
          "Turkmenistan",
          "Tuvalu",
          "Uganda",
          "Ukraine",
          "United Arab Emirates",
          "United Kingdom",
          "United States",
          "Uruguay",
          "Uzbekistan",
          "Vanuatu",
          "Vatican City",
          "Venezuela",
          "Vietnam",
          "Yemen",
          "Zambia",
          "Zimbabwe",
        ]}
        renderInput={(params: any) => (
          <TextField
            {...params}
            color="primary"
            label="Country"
            variant="outlined"
            placeholder=""
            helperText=""
          />
        )}
        defaultValue="Singapore"
        size="medium"
      />
      <FormControl className={styles.countryInput} variant="outlined">
        <InputLabel color="primary">City</InputLabel>
        <Select color="primary" size="medium" label="City">
          <MenuItem value="Orchard">Orchard</MenuItem>
          <MenuItem value="Novena">Novena</MenuItem>
          <MenuItem value="Bishan">Bishan</MenuItem>
          <MenuItem value="Kallang">Kallang</MenuItem>
          <MenuItem value="paya Lebar">paya Lebar</MenuItem>
          <MenuItem value="Woodlands. Yishun">Woodlands. Yishun</MenuItem>
          <MenuItem value="Lavender">Lavender</MenuItem>
          <MenuItem value="Yew Tee">Yew Tee</MenuItem>
          <MenuItem value="Pasir Ris">Pasir Ris</MenuItem>
          <MenuItem value="Tampines">Tampines</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
      <TextField
        className={styles.inputdefault}
        color="primary"
        variant="outlined"
        type="text"
        label="Referral Code"
        size="medium"
        margin="none"
      />
      <div className={styles.ownsCarSwitch}>
        <div className={styles.iDriveMy}>I drive my own car</div>
        <img className={styles.switchonIcon} alt="" src="../3-switchon.svg" />
      </div>
      <div className={styles.carTypeOptions}>
        <div className={styles.selectYourCar}>Select your car type</div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <button className={styles.faSolidcarSideParent}>
              <img
                className={styles.faSolidcarSideIcon}
                alt=""
                src="../fasolidcarside.svg"
              />
              <div className={styles.sedan}>Sedan</div>
            </button>
            <button className={styles.faSolidcarSideParent}>
              <img
                className={styles.mdivanPassengerIcon}
                alt=""
                src="../mdivanpassenger.svg"
              />
              <div className={styles.sedan}>SUV/Van</div>
            </button>
          </div>
          <div className={styles.frameGroup}>
            <button className={styles.mdicarSportsParent}>
              <img
                className={styles.mdicarSportsIcon}
                alt=""
                src="../mdicarsports.svg"
              />
              <div className={styles.sedan}>Semi Luxury</div>
            </button>
            <button className={styles.faSolidcarSideParent}>
              <img
                className={styles.mdicarConvertibleIcon}
                alt=""
                src="../mdicarconvertible.svg"
              />
              <div className={styles.sedan}>Luxury Car</div>
            </button>
          </div>
        </div>
      </div>
      <Button
        sx={{ width: 200 }}
        variant="contained"
        color="primary"
        size="large"
      >
        Submit
      </Button>
      <div className={styles.policyCheckbox}>
        <img
          className={styles.checkboxesselectedIcon}
          alt=""
          src="../1-checkboxesselected.svg"
        />
        <div className={styles.iAgreeToContainer}>
          <span>{`I agree to MyRide's `}</span>
          <span className={styles.termsConditions}>{`Terms & Conditions`}</span>
          <span>{` and `}</span>
          <span className={styles.termsConditions}>Privacy Policy</span>
          <span>.</span>
        </div>
      </div>
    </div>
  );
};

export default MyRideBecomeADriverPopu;
