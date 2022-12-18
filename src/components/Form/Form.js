import React, { useState } from "react";
import Input from "../input/Input";
import "./Form.css";
import axios from "axios";
import Step1 from "./step1/Step1";
import Step2 from "./step2/Step2";
function Form() {
  //hamdling states
  const [step, setStep] = useState(0);
  const [children, setChildren] = useState(0);
  const [fieldError, setFieldError] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    birth: new Date().toISOString().slice(0, 10),
    PAN: "",
    child: [],

    spouse: {
      name: "",
      age: "",
    },
    father: {
      name: "",
      age: "",
    },
    mother: {
      name: "",
      age: "",
    },
  });

  //onchange handlers
  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeChildren = (id) => (e) => {
    const newchildrens = formData.child?.map((c, i) => {
      if (id !== i) return c;
      return { ...c, [e.target.name]: e.target.value };
    });
    setFormData({
      ...formData,
      child: newchildrens,
    });
  };

  const onChangeSpouse = (e) => {
    setFormData({
      ...formData,
      spouse: {
        ...formData.spouse,
        [e.target.name]: e.target.value,
      },
    });
  };

  const onChangeFather = (e) => {
    setFormData({
      ...formData,
      father: {
        ...formData.father,
        [e.target.name]: e.target.value,
      },
    });
  };

  const onChangeMother = (e) => {
    setFormData({
      ...formData,
      mother: {
        ...formData.mother,
        [e.target.name]: e.target.value,
      },
    });
  };

  //Saving and submitting the form
  const onSave = () => {
    if (!/^[a-zA-Z ]{2,30}$/.test(formData.fullname)) {
      window.alert("enter valid name");
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      window.alert("enter valid email");
      return;
    }
    if (!/^(0|91)?[6-9][0-9]{9}$/.test(formData.mobile)) {
      window.alert("enter valid phone number");
      return;
    }
    if (!/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/.test(formData.PAN)) {
      window.alert("enter valid pan");
      return;
    }
    const { fullname, email, mobile, birth, PAN } = formData;
    if (fullname && email && mobile && birth && PAN) {
      setStep(1);
    }
  };

  const onSubmit = () => {
    const { fullname, email, mobile, birth, PAN, child, spouse } = formData;
    if (child.length > 0) {
      if (
        !fullname ||
        !email ||
        !mobile ||
        !birth ||
        !child ||
        !PAN ||
        !spouse
      ) {
        window.alert("fill all fields");
        return;
      }
    }

    if (!fullname || !email || !mobile || !birth || !PAN || !spouse) {
      window.alert("fill all fields");
      return;
    }

    axios
      .post("https://dummy.restapiexample.com/api/v1/create", formData)
      .then((data) => {
        window.alert(`submitted form name-${data.data.data.fullname}`);
        console.log(data);
      })
      .catch(() => window.alert("error"));
  };
  return (
    <div className="form__container">
      <div className="form-head__section">
        <div className="form-head__number">
          {step === 1 ? (
            <span
              onClick={() => setStep(0)}
              style={{
                padding: "6px",
                color: "green",
                fontSize: "10px",
                backgroundColor: "#f1f1f1",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              Back to 1
            </span>
          ) : (
            <span className={step === 0 ? "active-step step" : "step"}>1</span>
          )}
          <span
            onClick={() => setStep(1)}
            className={step === 1 ? "active-step step" : "step"}
          >
            2
          </span>
        </div>
        <div>
          <h4>{step === 0 ? `Knowing you!` : `lets talk about family`}</h4>
          <p>You, your age and your family</p>
        </div>
        {step === 0 ? (
          <button
            onClick={onSave}
            className={`${
              (!formData.fullname ||
                !formData.email ||
                !formData.mobile ||
                !formData.birth ||
                !formData.PAN) &&
              "opacity-50"
            } save-btn`}
            disabled={
              !formData.fullname ||
              !formData.email ||
              !formData.mobile ||
              !formData.birth ||
              !formData.PAN
            }
          >
            Save
          </button>
        ) : (
          <button className="save-btn" onClick={() => onSubmit()}>
            submit
          </button>
        )}
      </div>
      <hr />
      {/* <form style={{ position: "relative" }}> */}
      {/* {step === 1 &&} */}
      {step === 0 ? (
        <Step1
          children={children}
          fullname={formData.fullname}
          email={formData.email}
          mobile={formData.mobile}
          birth={formData.birth}
          PAN={formData.PAN}
          onChangeHandler={onChangeHandler}
          setFieldError={setFieldError}
          error={fieldError}
          formData={formData}
          setChildren={setChildren}
        />
      ) : (
        <Step2
          children={children}
          child={formData.child}
          spouse={formData.spouse}
          father={formData.father}
          mother={formData.mother}
          onChangeSpouse={onChangeSpouse}
          onChangeChildren={onChangeChildren}
          onChangeFather={onChangeFather}
          onChangeMother={onChangeMother}
        />
      )}
      {/* </form> */}
    </div>
  );
}

export default Form;
