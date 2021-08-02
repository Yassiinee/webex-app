import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import { makeStyles } from "@material-ui/core";
import ReactiveButton from "reactive-button";
import * as employeeService from "../Join/employeeService";
// import Controls from "../Join/controls/Controls";
// import AddIcon from "@material-ui/icons/Add";
import Popup from "../Join/Popup";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
  newButton: {
    position: "absolute",
    right: "10px",
  },
}));

export default function Employees() {
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null);
  //const [setRecords] = useState(employeeService.getAllEmployees());
  const [openPopup, setOpenPopup] = useState(false);

  const addOrEdit = (employee, resetForm) => {
    if (employee.id === 0) employeeService.insertEmployee(employee);
    else employeeService.updateEmployee(employee);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    //setRecords(employeeService.getAllEmployees());
  };
  const action = () => {
    setOpenPopup(true);
    setRecordForEdit(null);
  };

  return (
    <>
      {/* <Controls.Button
        text="Add New"
        variant="outlined"
        startIcon={<AddIcon />}
        className={classes.newButton}
        onClick={() => {
          setOpenPopup(true);
          setRecordForEdit(null);
        }}
      /> */}
      <ReactiveButton
        onClick={action}
        className={classes}
        color={"teal"}
        idleText={"Join Us"}
        type={"button"}
        style={{ borderRadius: "5px" }}
        outline={false}
        shadow={false}
        rounded={false}
        size={"large"}
        block={false}
        disabled={false}
        buttonRef={null}
        width={null}
        height={null}
        animation={true}
      />
      <Popup
        title="Sign up free, it's quick."
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EmployeeForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
    </>
  );
}
