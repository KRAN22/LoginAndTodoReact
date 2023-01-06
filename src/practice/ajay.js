import { React, useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
// import dayjs from "dayjs";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ReactDOM from "react-dom";

const PanelAvailabilityPanelfunc = (props) => {
  const Associate_NameRef = useRef(null);
  const Associate_IDRef = useRef(null);
  const Associate_GradeRef = useRef(null);
  const From_DateRef = useRef(null);
  const To_DateRef = useRef(null);
  const Day_Of_WeekRef = useRef(null);
  const Start_TimeRef = useRef(null);
  const End_TimeRef = useRef(null);
  let nav = useNavigate();
  // let d1 = dayjs(From_Date);
  // console.log(d1.format('ddd'));
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const setField = (field, value) => {
    setForm({ ...form, [field]: value });
    if (!!errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  function MyCalendar() {
    const [date, setDate] = useState(new Date());
    const onDateChange = (newDate) => {
      setDate(newDate);
      console.log(newDate);
    };
    return (
      <Calendar
        onChange={onDateChange}
        value={date}
        showNeighboringMonth={false}
        locale={"en-IN"}
      />
    );
  }
  //    ReactDOM.render(
  //     <MyCalendar />,
  //     document.getElementById('root')
  // );
  function getSpaces(num) {
    var spaces = "";
    for (var i = 0; i < num; i++) {
      spaces += "\u00A0";
    }

    return spaces;
  }
  const validateForm = () => {
    const {
      Associate_Name,
      Associate_ID,
      Associate_Grade,
      From_Date,
      To_Date,
      Day_Of_Week,
      Start_Time,
      End_Time,
    } = form;

    console.log(form);

    const newErrors = {};

    return newErrors;
  };

  const addPanelAvailabilityPanel = (event) => {
    event.preventDefault();

    const formErrors = validateForm();

    console.log("formErrors: ", formErrors);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log(form);

      setErrors({});

      let newPanelAvailabilityPanel = {
        Associate_Name: Associate_NameRef.current.value,
        Associate_ID: Associate_IDRef.current.value,
        Associate_Grade: Associate_GradeRef.current.value,
        From_Date: From_DateRef.current.value,
        To_Date: To_DateRef.current.value,
        Day_Of_Week: Day_Of_WeekRef.current.value,
        Start_Time: Start_TimeRef.current.value,
        End_Time: End_TimeRef.current.value,
      };
    }
  };
  const cancelPanelAvailability = () => {
    nav("/");
  };
  const [values, setValues] = useState([]);
  const handleChanged = (e) => {
    const b = e.target.value;
    console.log(b);
    return b;
  };
  const [userName, setUserName] = useState("Admin");

  useEffect(() => {
    setUserName(localStorage.getItem("UserName"));
  });
  return (
    <div className="container-wrap">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded">
        <div className="container-fluid">
          <a className="navbar-brand fw-bolder" href="#">
            Panel Management
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Panel Availability
                </a>
              </li>
            </ul>

            <div className="d-flex">
              <div className="profile">
                <i className="bi bi-person"></i>
              </div>

              <div className="profile-text">
                {userName}

                <br></br>

                <span>Panel_Aes</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Form data-testid="form">
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        <h2>Add Panel Availability-Multiple (PH)</h2>
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        {"\u00A0"}
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationName">
            <InputGroup hasValidation>
              <label className="fw-bolder" htmlFor="first">
                Associate Name{getSpaces(4)}
              </label>
              {/* <Form.Control
                required
                type="text"
                
                placeholder="Select Associate Name"
                value={form.Associate_Name}
                onChange={(event) => setField('Associate_Name', event.target.value)}
                isInvalid={!!errors.Associate_Name}
                ref={Associate_NameRef}
              /> */}
              <form class="nosubmit">
                <input class="nosubmit" type="search" placeholder="Search..." />
              </form>

              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
              <Form.Control.Feedback type="invalid">
                {getSpaces(14)}
                {errors.Associate_Name}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          {/* {<div class="text-danger">{getSpaces(91)}{serverError}</div>} */}
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationName">
            <InputGroup hasValidation>
              <label className="fw-bolder" htmlFor="first">
                Associate ID{getSpaces(10)}{" "}
              </label>
              <Form.Control
                required
                type="text"
                placeholder="Associate id"
                value={form.Associate_ID}
                onChange={(event) =>
                  setField("Associate_ID", event.target.value)
                }
                isInvalid={!!errors.Associate_ID}
                ref={Associate_IDRef}
              />
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
              <Form.Control.Feedback type="invalid">
                {getSpaces(14)}
                {errors.Associate_ID}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          {/* {<div class="text-danger">{getSpaces(91)}{serverError}</div>} */}

          {getSpaces(40)}
          <Form.Group as={Col} md="4" controlId="validationName">
            <InputGroup hasValidation>
              <label className="fw-bolder" htmlFor="first">
                Associate Grade{getSpaces(6)}
              </label>
              <Form.Control
                required
                type="text"
                placeholder="Associate Grade"
                value={form.Associate_Grade}
                onChange={(event) =>
                  setField("Associate_Grade", event.target.value)
                }
                isInvalid={!!errors.Associate_Grade}
                ref={Associate_GradeRef}
              />
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
              <Form.Control.Feedback type="invalid">
                {getSpaces(1)}
                {errors.Associate_Grade}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          {/* {<div class="text-danger">{getSpaces(91)}{serverError}</div>} */}
          {"\u00A0"}
          {"\u00A0"}
          {"\u00A0"}
          {"\u00A0"}
          {"\u00A0"}
          {"\u00A0"}
          {"\u00A0"}
          {"\u00A0"}
          {"\u00A0"}
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationName">
            <InputGroup hasValidation>
              <label className="fw-bolder" htmlFor="first">
                From Date{getSpaces(13)}
              </label>

              <Form.Control
                required
                type="date"
                placeholder="Select From Date"
                value={form.From_Date}
                min={new Date().toISOString().split("T")[0]}
                onChange={(event) => setField("From_Date", event.target.value)}
                isInvalid={!!errors.From_Date}
                ref={From_DateRef}
              />
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
              <Form.Control.Feedback type="invalid">
                {getSpaces(14)}
                <Calendar onSelect={(date) => MyCalendar()} />
                {errors.From_Date}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          {/* {<div class="text-danger">{getSpaces(91)}{serverError}</div>} */}

          {getSpaces(40)}
          <Form.Group as={Col} md="4" controlId="validationName">
            <InputGroup hasValidation>
              <label className="fw-bolder" htmlFor="first">
                To Date{getSpaces(20)}
              </label>
              <Form.Control
                required
                type="date"
                placeholder="Select To Date"
                value={form.To_Date}
                min={new Date().toISOString().split("T")[0]}
                onChange={(event) => setField("To_Date", event.target.value)}
                isInvalid={!!errors.To_Date}
                ref={To_DateRef}
              />
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
              <Form.Control.Feedback type="invalid">
                {getSpaces(14)}
                <Calendar onSelect={(date) => MyCalendar()} />
                {errors.To_Date}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          {/* {<div class="text-danger">{getSpaces(91)}{serverError}</div>} */}
        </Row>
        <Row>
          <div className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationName">
              <InputGroup hasValidation>
                <label className="fw-bolder" htmlFor="first">
                  Days Of Week{getSpaces(8)}
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="sunday"
                  id="sunday"
                />
                {getSpaces(2)}
                <label class="form-check-label" for="sunday">
                  {" "}
                  Sun
                </label>
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="monday"
                  id="monday"
                />
                {getSpaces(2)}
                <label class="form-check-label" type="checkbox" for="monday">
                  {" "}
                  Mon
                </label>
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="tuesday"
                  id="tuesday"
                />
                {getSpaces(2)}
                <label class="form-check-label" for="tuesday">
                  {" "}
                  Tue
                </label>
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="wednesday"
                  id="wednesday"
                />
                {getSpaces(2)}
                <label class="form-check-label" for="wednesday">
                  {" "}
                  Wed
                </label>
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="thursday"
                  id="thursday"
                />
                {getSpaces(2)}
                <label class="form-check-label" for="thursday">
                  {" "}
                  Thu
                </label>
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="friday"
                  id="friday"
                />
                {getSpaces(2)}
                <label class="form-check-label" for="friday">
                  {" "}
                  Fri
                </label>
                {"\u00A0"}
                {"\u00A0"}
                {"\u00A0"}
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="saturday"
                  id="saturday"
                />
                {getSpaces(2)}
                <label class="form-check-label" for="saturday">
                  {" "}
                  Sat
                </label>

                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                <Form.Control.Feedback type="invalid">
                  {getSpaces(14)}
                  {errors.Day_Of_Week}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            {/* {<div class="text-danger">{getSpaces(91)}{serverError}</div>} */}
          </div>
        </Row>
        <br></br>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationName">
            <InputGroup hasValidation>
              <label className="fw-bolder" htmlFor="first">
                Start Time{getSpaces(12)}
              </label>
              {/* <Form.Control
                required
                type="text"
                 placeholder="Enter From Time"
                 
                value={form.Start_Time}
                onChange={(event) => setField('Start_Time', event.target.value)}
                isInvalid={!!errors.Start_Time}
                ref={Start_TimeRef}
              /> */}
              <div className="drop-down">
                <TimePicker
                  placeholder="Select Time"
                  use24Hours
                  minuteStep={30}
                  showSecond={false}
                  focusOnOpen={true}
                  // format="hh:mm A"
                  onChange={(e) => setTime(e.format("LT"))}
                />
              </div>
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}

              <Form.Control.Feedback type="invalid">
                {getSpaces(14)}
                {errors.Start_Time}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          {/* {<div class="text-danger">{getSpaces(91)}{serverError}</div>} */}
          {/* </Row>
        <Row className="mb-3"> */}
          {getSpaces(40)}
          <Form.Group as={Col} md="4" controlId="validationName">
            <InputGroup hasValidation>
              <label className="fw-bolder" htmlFor="first">
                End Time{getSpaces(17)}
              </label>
              {/* <Form.Control
                required
                type="text"
                 placeholder="Enter To Time"
                value={form.End_Time}
                onChange={(event) => setField('End_Time', event.target.value)}
                isInvalid={!!errors.End_Time}
                ref={End_TimeRef}
              /> */}
              <div className="drop-down">
                <TimePicker
                  placeholder="Select Time"
                  use24Hours
                  minuteStep={30}
                  showSecond={false}
                  focusOnOpen={true}
                  // format="hh:mm "
                  onChange={(e) => setTime(e.format("LT"))}
                />
              </div>
              {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
              <Form.Control.Feedback type="invalid">
                {getSpaces(14)}
                {errors.End_Time}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          {/* {<div class="text-danger">{getSpaces(91)}{serverError}</div>} */}
        </Row>
        <br></br>
        <br></br>
        {/* <div class="text-danger">{getSpaces(12)}{serverError}</div> */}

        <Row>
          <div class="col-md-2">
            <Button
              type="submit"
              style={{ width: "200px", height: "35px" }}
              class="btn btn-primary"
              onClick={addPanelAvailabilityPanel}
            >
              Submit
            </Button>
          </div>
          {
            <div class="col-md-2">
              <Button
                type="submit"
                style={{ width: "200px", height: "35px" }}
                class="btn btn-primary"
                onClick={cancelPanelAvailability}
              >
                Cancel
              </Button>
            </div>
          }
        </Row>
      </Form>
    </div>
  );
};
export default PanelAvailabilityPanelfunc;
