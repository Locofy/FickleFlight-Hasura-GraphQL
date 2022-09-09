import { FunctionComponent, useState, useCallback } from "react";
import {
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import styles from "./SearchForm.module.css";

const SearchForm: FunctionComponent = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState<string | null>(null);
  const navigate = useNavigate();

  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.searchFormDiv}>
        <div className={styles.formTitleGroup}>
          <b className={styles.searchFlightsB}>Search flights</b>
          <div className={styles.flightOptionsDiv}>
            <div className={styles.flightTypeDiv}>
              <FormControlLabel
                className={styles.radioFormControlLabel}
                label="Return"
                labelPlacement="end"
                control={<Radio size="medium" />}
              />
              <FormControlLabel
                className={styles.radioFormControlLabel1}
                label="One-way"
                labelPlacement="end"
                control={<Radio color="primary" checked size="medium" />}
              />
            </div>
          </div>
        </div>
        <div className={styles.formInputsRow}>
          <div className={styles.inputsRowDiv}>
            <Autocomplete
              className={styles.selectOutlinedAutocomplete}
              disablePortal
              options={[
                "Singapore (SIN)",
                "Sydney (SYD)",
                "Siem Reap (REP)",
                "Shanghai (PVG)",
                "Sanya (SYX)",
              ]}
              renderInput={(params: any) => (
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
            <Autocomplete
              className={styles.selectOutlinedAutocomplete}
              sx={{ width: "100%" }}
              disablePortal
              options={[
                "Clark (CRK)",
                "Launceston (LST)",
                "Kalibo (KLO)",
                "Colombo CMB",
                "Melbourne (AVV)",
                "Los Angeles (LA)",
              ]}
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  color="primary"
                  label="Arrival"
                  variant="outlined"
                  placeholder=""
                  helperText=""
                />
              )}
              defaultValue="Los Angeles (LA)"
              size="medium"
            />
            <div className={styles.selectOutlinedAutocomplete}>
              <DatePicker
                label="Date"
                value={selectOutlinedDateTimePickerValue}
                onChange={(newValue: any) => {
                  setSelectOutlinedDateTimePickerValue(newValue);
                }}
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    color="primary"
                    variant="outlined"
                    size="medium"
                    renderInput={{ placeholder: "01/05/2022" }}
                    helperText=""
                    fullWidth
                  />
                )}
              />
            </div>
          </div>
          <div className={styles.buttonGroupDiv}>
            <button
              className={styles.searchFlightsButton}
              onClick={onSearchFlightsButtonClick}
            >
              <div className={styles.buttonDiv}>Search flights</div>
            </button>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default SearchForm;
