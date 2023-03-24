import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MDBRow, MDBCol, MDBContainer, MDBCheckbox } from "mdb-react-ui-kit";
import MInput from "../../utility/MInput";
import MTextarea from "../../utility/MTextarea";
import MButton from "../../utility/MButton";
import FooterDegin from "../../Component/Footer/FooterDegin";
import "./EnquireStyle.css";
import careerimg from "../../assets/Img/careerimg.png";
import axios from "axios";
import Weburls from "../../Redux/ApI/Weburls";
import SuccessModel from "../../utility/SuccessModel";
// import SuccessModel from "../../utility/SuccessModel"
// import { toast } from "react-toastify";

function EnquireInfo() {
  const [SuccessLoader, setSuccessLoader] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      companyname: "",
      email: "",
      mobileno: "",
      postalcode: "",
      country: "",
    },
  });
  const onSubmit = (data) => {
    // e.preventDefault();

    console.log(data);
    console.log("alert");

    const result = axios
      .post(Weburls.EnquiryPost, {
        ...data,
      })
      .then((res) => {
        reset();

        setSuccessLoader(true);
        document.body.style.overflow = "hidden";
        console.log(res.status);
        setTimeout(() => {
          document.body.style.overflow = "auto";
          setSuccessLoader(false);
        }, 3000);
      })
      .catch((error) => {
        setSuccessLoader(false);
      });
  };
  console.log(watch("example"));
  return (
    <>
      <div>
        <img src={careerimg} className="Img-fluid w-100" alt="no-Img" />
      </div>

      <MDBContainer className="my-5">
        <h1 className="text-center text-uppercase  mb-4 ">
          Find Your Marley Part Today!
        </h1>
        <p className="text-center mb-4 ">
          For more information on Marley parts, please call 1-800-4-MARLEY,
          Email Us, or fill out the form below. Fields with * are required.
        </p>

        <form className="form-style" onSubmit={handleSubmit(onSubmit)}>
          <MDBRow className="mb-4 ">
            <MDBCol sm={12} md={6}>
              <label className="mb-1"> First Name </label>

              <input
                name="First_Name"
                style={{ width: "100%" }}
                placeholder="Enter Your First Name"
                {...register("firstname", {
                  required: "This field is required",
                })}
                // value={Enquirydata.First_Name}
              />
            </MDBCol>
            <MDBCol sm={12} md={6}>
              <label className="mb-1">Last Name</label>

              <input
                name="Last_Name"
                style={{ width: "100%" }}
                placeholder="Enter Your Last Name"
                {...register("lastname", {
                  required: "This field is required",
                })}
              />
            </MDBCol>
          </MDBRow>
          {/* /// */}
          <MDBRow className="mb-4 ">
            <MDBCol sm={12} md={6}>
              <label className="mb-1"> Company Name</label>

              <input
                name="Company_Name"
                style={{ width: "100%" }}
                placeholder="Company Name"
                {...register("companyname", {
                  required: "This field is required",
                })}
              />
            </MDBCol>

            <MDBCol sm={12} md={6}>
              <label className="mb-1">Email</label>

              <input
                name="Email"
                type="email"
                style={{ width: "100%" }}
                placeholder="Enter Your Email"
                {...register("email", {
                  required: "This field is required",
                })}
              />
            </MDBCol>
          </MDBRow>

          {/* /// */}
          <MDBRow className="mb-4 ">
            <MDBCol sm={12} md={6}>
              <label className="mb-1">Mobile Number</label>

              <input
                name="Mobile Number"
                maxlength="10"
                type="text"
                style={{ width: "100%" }}
                placeholder="Mobile Number"
                {...register("mobileno", {
                  required: "This field is required",
                })}
              />
            </MDBCol>

            <MDBCol sm={12} md={6}>
              <label className="mb-1"> Postal Code</label>

              <input
                name="Postal_Code"
                style={{ width: "100%" }}
                placeholder="Enter Your Postal Code"
                {...register("postalcode", {
                  required: "This field is required",
                })}
              />
            </MDBCol>
          </MDBRow>
          {/* /// */}
          <MDBRow className="mb-4 ">
            <MDBCol sm={12} md={6}>
              <label className="mb-1"> Country</label>

              <input
                name="Country"
                style={{ width: "100%" }}
                placeholder="Enter Your Country"
                {...register("country", {
                  required: "This field is required",
                })}
              />
            </MDBCol>

            <MDBCol sm={12} md={6}>
              <label className="mb-1"> Market Type</label>

              <select
                {...register("Markettype")}
                id="Market_Type"
                name="Market_type"
                style={{ width: "100%" }}
                defaultValue=" --Please select--"
              >
                {/* <option
                  id="hello"
                  value=" Please select"
                  // style={{ color: "rgba(0,0,0,0.4 " }}
                  selected
            
                >
                  --Please select--
                </option> */}
                <option value="HVAC">HVAC</option>
                <option value="Industrial">Industrial</option>
                <option value="Proccess Cooling">Proccess Cooling</option>
                <option value="Commercial Refrigeration">
                  Commercial Refrigeration
                </option>
                <option value="Commercial Refrigeration">
                  Industrial Refrigeration
                </option>
                <option value="Not Sure">Not Sure</option>
              </select>
            </MDBCol>
          </MDBRow>
          {/* //// */}
          <MDBRow className="mb-4 ">
            <MDBCol sm={12} md={6}>
              <label className="mb-1"> Company Type</label>
              <select
                id="Company_Type"
                name="Company_Type"
                style={{ width: "100%" }}
                {...register("Companytype")}
              >
                {/* <option
                  id="hello"
                  value=" Please select"
                  style={{ color: "rgba(0,0,0,0.4" }}
                  disabled
                  selected
         
                >
                  --Please select--
                </option> */}
                <option value="data_center">Data Center</option>
                <option value="Degine_Build ">Design-Build Firm</option>
                <option value="Engineering">Engineering Firm</option>
                <option value="EPS">EPS</option>
                <option value="Goverment">Goverment</option>
                <option value={"Industrial_Process"}>
                  Industrial Proccess
                </option>
                <option value={"University"}>School/University</option>
                <option value="Other">Other</option>
              </select>
            </MDBCol>

            <MDBCol sm={12} md={6}>
              <label className="mb-1"> Job Type</label>

              <select
                id="cars"
                defaultValue=" --Please select--"
                {...register("jobType")}
                name="Job_Type"
                style={{ width: "100%" }}
              >
                {/* <option
                  id="hello"
                  value=" Please select"
                  style={{ color: "rgba(0,0,0,0.4" }}
                  disabled
                  selected
                  hidden
                >
                  --Please select--
                </option> */}
                <option value="HVAC">HVAC</option>
                <option value="Industrial">Industrial</option>
                <option value="Proccess Cooling">Proccess Cooling</option>
                <option value="Commercial Refrigeration">
                  Commercial Refrigeration
                </option>
                <option value="Commercial Refrigeration">
                  Industrial Refrigeration
                </option>
                <option value="Not Sure">Not Sure</option>
              </select>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-4">
            <MDBCol>
              <label className="mb-1">Serial Number</label>

              <input
                className="mb-2"
                style={{ width: "100%" }}
                {...register("serialno")}
                placeholder="Please Enter Serial Number"
                required
              />
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-4">
            <MDBCol>
              <label>Description of Part or Solution Needed:</label>
              <textarea
                {...register("message")}
                style={{ width: "100%" }}
                name="message"
                rows="5"
                cols="20"
                placeholder="Message"
              />
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-4">
            <MDBCol>
              <label className="mb-1 text-capitalize"> I am looking for</label>

              <select
                id="cars"
                {...register("Iamlookingfor")}
                name="cars"
                selected
                style={{ width: "100%" }}
              >
                {/* <option
                  id="hello"
                  value=" Please select"
                  style={{ color: "rgba(0,0,0,0.4" }}
                  disabled
                  selected
                  hidden
                >
                  --Please select--
                </option> */}
                <option value="Part_Help">Part Selection Help</option>
                <option value="Part_Support">Parts Technical Support</option>
                <option value="Part_Price">Part Price And Availability</option>
              </select>
            </MDBCol>
          </MDBRow>
          <MDBRow className=" mb-4">
            <MDBCol>
              <input
                type="checkbox"
                id="javascript"
                name="fav_language"
                {...register("fav_language", {})}
                value={
                  "I agree to receive communications from Mahakal Cooling Tower. "
                }
                className=" mb-1"
              />{" "}
              &nbsp;
              <label htmlfor="javascript">
                I agree to receive communications from Mahakal Cooling Tower.
              </label>
            </MDBCol>
          </MDBRow>

          <MButton text="send Message" />
        </form>
        {/* <SuccessModel /> */}
      </MDBContainer>
      <FooterDegin />
      {SuccessLoader ? <SuccessModel /> : ""}
    </>
  );
}

export default EnquireInfo;

// import { useForm } from "react-hook-form";

// export default function EnquireInfo() {

// console.log(watch("example")); // watch input value by passing the name of it

//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* into the hook by invoking the "/}
//       <input defaultValue="" {... />

//       {/* include validation with required or other standard HTML validation rules */}
//       <input {...uired", { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}
//       <input  type="checkbox" {...ge", { required: true })} value={"here data is the"}     />

//       <input type="submit" />
//     </form>
//   );
// }
