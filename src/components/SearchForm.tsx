import { FunctionComponent, useState, useCallback, useEffect } from "react";
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
import { gql, useQuery } from "@apollo/client";
import { format } from "date-fns";

type DropdownItem = {
  id: string;
  label: string;
};

const GET_AIRPORTS = gql`
  query getAirports {
    airports {
      id: code
      label: name
    }
  }
`;

const SearchForm: FunctionComponent = () => {
  const { data } = useQuery(GET_AIRPORTS);
  const [departure, setDepartureValue] = useState<DropdownItem | null>(null);
  const [arrival, setArrivalValue] = useState<DropdownItem | null>(null);

  const [depDate, setDepDate] = useState<Date | null>(null);
  const navigate = useNavigate();

  const onSearchFlightsButtonClick = useCallback(() => {
    if (departure && arrival && depDate) {
      const dateStr = format(depDate, "MM/dd/yyyy");
      navigate(
        `/flight-results?departure=${departure.id}&arrival=${arrival.id}&date=${dateStr}`
      );
    }
  }, [departure, arrival, depDate, navigate]);

  useEffect(() => {
    if (!data) return;

    const urlParams = new URLSearchParams(window.location.search);
    const depCode = urlParams.get("departure");
    const arrCode = urlParams.get("arrival");
    const date = urlParams.get("date");

    const depItem =
      depCode && data.airports.find((v: DropdownItem) => v.id === depCode);
    const arrItem =
      depCode && data.airports.find((v: DropdownItem) => v.id === arrCode);
    const dateObj = date && new Date(date);

    if (depItem) {
      setDepartureValue(depItem);
    }
    if (arrItem) {
      setArrivalValue(arrItem);
    }
    if (dateObj) {
      setDepDate(dateObj);
    }
  }, [data]);

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
              options={data?.airports}
              onChange={(
                ev: React.SyntheticEvent,
                newValue: DropdownItem | null
              ) => {
                setDepartureValue(newValue);
              }}
              value={departure}
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
              size="medium"
            />
            <Autocomplete
              className={styles.selectOutlinedAutocomplete}
              sx={{ width: "100%" }}
              disablePortal
              options={data?.airports}
              onChange={(
                ev: React.SyntheticEvent,
                newValue: DropdownItem | null
              ) => {
                setArrivalValue(newValue);
              }}
              value={arrival}
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
              size="medium"
            />
            <div className={styles.selectOutlinedAutocomplete}>
              <DatePicker
                label="Date"
                value={depDate}
                onChange={(value: Date | null) => {
                  setDepDate(value);
                }}
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    color="primary"
                    variant="outlined"
                    size="medium"
                    renderInput={{ placeholder: "10/20/2022" }}
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
