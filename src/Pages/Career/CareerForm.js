import axios from "axios";
import { MDBCol, MDBContainer, MDBInput, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Weburls from "../../Redux/ApI/Weburls";
import MButton from "../../utility/MButton";
import MInput from "../../utility/MInput";
import SuccessModel from "../../utility/SuccessModel";

function CareerForm() {
  // const {
  //   reset,
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {},
  // });
  // const onSubmit = (data) => {
  //   // e.preventDefault();

  //   console.log(data);
  //   console.log("alert");

  //   reset();
  // };
  const [SuccessLoader, setSuccessLoader] = useState(false);
  const { reset, register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const config = {
      name: data.name,
      email: data.email,
      mobileno: data.mobileno,
      exprerience: data.exprerience,
      current_ctc: data.current_ctc,
      Expected_ctc: data.Expected_ctc,
      city: data.city,
      state: data.state,
      address: data.address,
      resume: data.resume[0],
    };
    // console.log(filesdata);
    console.log(config);

    // const {
    //   name,
    //   email,
    //   resume,
    //   address,
    //   state,
    //   city,
    //   Expected_ctc,
    //   current_ctc,
    //   exprerience,
    //   mobileno,
    // } = data;
    // console.log(
    //   name,
    //   email,
    //   resume,
    //   address,
    //   state,
    //   city,
    //   Expected_ctc,
    //   current_ctc,
    //   exprerience,
    //   mobileno
    // );
    // const formdata = new FormData();
    // formdata.append("name", name);
    // formdata.append("email", email);
    // formdata.append("resume", resume.File[0]);
    // formdata.append("address", address);
    // formdata.append("city", city);
    // formdata.append("state", state);
    // formdata.append("Expected_ctc", Expected_ctc);
    // formdata.append("current_ctc", current_ctc);
    // formdata.append("exprerience", exprerience);
    // formdata.append("mobileno", mobileno);

    //   axios.post("http://192.168.1.34:3000/api/v1/ApplyPost", {

    // })

    await axios
      .post(Weburls.CareerPostapi, config, {
        headers: {
          "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
        },
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

    // reset();
  };

  return (
    <>
      {/* Career post form  */}

      <MDBContainer>
        {/* <form onSubmit={handleSubmit(onSubmit)}>

            <input {...register("picture")} type="file"/>
            <button>Submit</button>
        </form> */}
        <form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
          {/* email and name  */}
          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput
                {...register("name", { required: true })}
                name={"name"}
                className={" w-100 p-2"}
                label="Enter your Name"
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                {...register("email", { required: true })}
                name={"email"}
                className={" w-100 p-2"}
                label="Enter your Email"
              />
            </MDBCol>
          </MDBRow>
          {/* contact number  and experience */}
          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput
                {...register("mobileno", { required: true })}
                name={"mobileno"}
                className={" w-100 p-2"}
                label="Enter your Contact No."
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                {...register("exprerience", { required: true })}
                name={"exprerience"}
                className={" w-100 p-2"}
                label="Enter your Experience"
              />
            </MDBCol>
          </MDBRow>

          {/* ctc and expected ctc  */}
          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput
                {...register("current_ctc", { required: true })}
                name={"current_ctc"}
                className={" w-100 p-2"}
                label="Enter your Current_CTC"
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                {...register("Expected_ctc", { required: true })}
                name={"Expected_ctc"}
                className={" w-100 p-2"}
                label="Enter your Expected_CTC"
              />
            </MDBCol>
          </MDBRow>

          {/* city and state  */}
          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput
                {...register("city", { required: true })}
                name={"city"}
                className={" w-100 p-2"}
                label="Enter your City"
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                {...register("state", { required: true })}
                name={"state"}
                className={" w-100 p-2"}
                label="Enter your State"
              />
            </MDBCol>
          </MDBRow>

          {/* address  */}

          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput
                {...register("address", { required: true })}
                name={"address"}
                className={" w-100 p-2"}
                label="Enter your Adderess"
              />
            </MDBCol>
          </MDBRow>

          {/* file system  */}
          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput
                {...register("resume", {
                  required: true,
                  validate: {
                    lessThan10MB: (files) =>
                      files[0]?.size < 1000000 || "Max 10MB",
                    acceptedFormates: (files) =>
                      [
                        "application/pdf",
                        "application/msword",
                        "application/vnd.openxm1formats-officedocument.wordprocessingml.document",
                      ].includes(files[0]?.type) ||
                      "Uploderesume as .pdf and .docx extension",
                  },
                })}
                className={" w-100 p-2"}
                type="file"
                accept=".pdf,.doc,.docx"
              />
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-4">
            <MDBCol>
              <MButton text={"Apply Now"} />
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>
      {SuccessLoader ? <SuccessModel /> : ""}

      {/* career post form  */}
    </>
  );
}

export default CareerForm;

// const [careerformdata, setcareerformdata] = useState("");
// const [careerfiledata, setcareerfiledata] = useState("");

// console.log("//////////", careerformdata);
// const handleChange = (e) => {
//   const { name, value } = e.target;
//   // let file=e.target.file[0];
//   // console.log("/////////",file)

//   setcareerformdata({ ...careerformdata, [name]: value });
// };
// const HandleSubmit = (e) => {
//   e.preventDefault();
//   const {
//     Name,
//     Email,
//     Mobile_NO,
//     Experience,
//     Current_CTC,
//     State,
//     Adderss,
//     File,
//   }= careerformdata;
//   const formdata = new FormData();
//   formdata.append("file", File);
//   formdata.append("Name", Name);
//   formdata.append("Email", Email);
//   formdata.append("Mobile_NO", Mobile_NO);
//   formdata.append("Experience", Experience);
//   formdata.append("Current_CTC", Current_CTC);
//   formdata.append("State", State);
//   formdata.append("Adderss", Adderss);

//   // const formdata = new FormData();
//   // formdata.append("file", careerformdata.File);
//   // formdata.append("Name",careerformdata.Name);
//   // formdata.append("Email",careerformdata.Email);
//   // formdata.append("Mobile_NO",careerformdata.Mobile_NO);
//   // formdata.append("Experience",careerformdata.Experience);
//   // formdata.append("Current_CTC",careerformdata.Current_CTC);
//   // formdata.append("State", careerformdata.State);
//   // formdata.append("Adderss", careerformdata.Adderss);
//   console.log(">>>>>>>>>>>>>>>>>>", formdata);
//   for( let a of formdata){
//     console.log(a)
//   }
// };

// import axios from "axios";
// import React, { useState } from "react";

// function CareerForm() {
//   const [Filedata, setFormdata] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(Filedata);
//     const formData=new FormData();
//     formData.append('resume',Filedata);
//     console.log(formData)
//     axios.post("http://192.168.1.34:3000/api/v1/ApplyPost",{...formData}).then(response=>{
//       console.log(response)
//     })
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type={"file"} accept={".doc,.pdf"} onChange={(e) => setFormdata(e.target.files)} />
//         <button>submit</button>
//       </form>
//     </div>
//   );
// }

// export default CareerForm;

// import React, { Component } from "react";

// class CareerForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       email: "",
//       phone: "",
//       resume: null,
//       message: "",
//     };
//   }

//   handleInputChange = (event) => {
//     const target = event.target;
//     const name = target.name;
//     const value = target.value;

//     this.setState({
//       [name]: value,
//     });
//   };

//   handleFileChange = (event) => {
//     const target = event.target;
//     const name = target.name;
//     const file = target.files[0];

//     this.setState({
//       [name]: file,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(this.state);
//     // code to handle form submission goes here
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input
//             name="name"
//             type="text"
//             value={this.state.name}
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input
//             name="email"
//             type="email"
//             value={this.state.email}
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Phone:
//           <input
//             name="phone"
//             type="tel"
//             value={this.state.phone}
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Resume:
//           <input name="resume" type="file" onChange={this.handleFileChange} />
//         </label>
//         <br />
//         <label>
//           Message:
//           <textarea
//             name="message"
//             value={this.state.message}
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }

// export default CareerForm;
