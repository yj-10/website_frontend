import React, { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBTextArea,
} from "mdb-react-ui-kit";
import MInput from "../../utility/MInput";
import MTextarea from "../../utility/MTextarea";
import MButton from "../../utility/MButton";
import Weburls from "../../Redux/ApI/Weburls";

import axios from "axios";
import { useForm } from "react-hook-form";
import SuccessModel from "../../utility/SuccessModel";
function Contactform() {

  const [SuccessLoader, setSuccessLoader] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      mobileno: "",
      companyname: "",
      subject: "",
      message: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);

    axios.post(Weburls.ContactPostapi, { ...data }).then((res) => {
      reset();

      setSuccessLoader(true)
      document.body.style.overflow = "hidden"
      console.log(res.status);
      setTimeout(() => {
        document.body.style.overflow = "auto"
        setSuccessLoader(false)
      }, 3000);

    }).catch((error) => {
      setSuccessLoader(false)
    })
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <MDBRow className="mb-4">
          <MDBCol sm={12} md={6}>
            <MDBInput
              className="w-100 mb-3 p-2"
              label="Enter your Name"
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && (
              <p role="alert" className="text-danger my-2">
                Name is required *
              </p>
            )}
          </MDBCol>
          <MDBCol sm={12} md={6}>
            <MDBInput
              {...register("email", { required: true })}
              className=" w-100 mb-3 p-2"
              label="Enter your Email"
            />
            {errors.email?.type === "required" && (
              <p role="alert" className="text-danger my-2">
                Email is required *
              </p>
            )}
          </MDBCol>
        </MDBRow>

        <MDBRow className="mb-4">
          <MDBCol sm={12} md={6}>
            <MDBInput
              {...register("mobileno", { required: true })}
              className=" w-100 mb-3 p-2"
              name={"mobileno"}
              label="Mobile Number"
            />
            {errors.mobileno?.type === "required" && (
              <p role="alert" className="text-danger my-2">
                Mobile Number is required *
              </p>
            )}
          </MDBCol>
          <MDBCol sm={12} md={6}>
            <MDBInput
              className=" w-100 mb-3 p-2"
              {...register("companyname", { required: true })}
              name={"companyname"}
              label="Company Name"
            />
            {errors.companyname?.type === "required" && (
              <p role="alert" className="text-danger my-2">
                Company name is required *
              </p>
            )}
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol sm={12} md={12}>
            <MDBInput
              name={"subject"}
              {...register("subject", { required: true })}
              label="your Subject"
              className=" w-100  p-2"
            />
            {errors.subject?.type === "required" && (
              <p role="alert" className="  text-danger my-2">
                Subject name is required *
              </p>
            )}
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <textarea
              {...register("message", { required: true })}
              placeholder={"Message"}
              className="w-100  p-2"
              rows={4}
            />
            {errors.message?.type === "required" && (
              <p role="alert" className="   text-danger ">
                Message is required *
              </p>
            )}
          </MDBCol>
        </MDBRow>

        <MButton text="send Message" />
      </form>
      {SuccessLoader ? <SuccessModel /> : ""}
    </>
  );
}

export default Contactform;

// axios.post(Weburls.ContactPostapi, { ...formdata });
