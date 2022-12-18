import React, { useState } from "react";
import Input from "../../input/Input";
import "./step1.css";
const options = [
  "Single",
  "Married with kids",

  "Married without kids",

  "single parent with kids",
];

function Step1({
  children,
  fullname,
  email,
  mobile,
  birth,
  PAN,
  onChangeHandler,
  formData,
  setChildren,
  error,
}) {
  const [lifeStage, setLifeStage] = useState(options[0]);
  const decrease = () => {
    if (children === 0) return;
    const { child } = formData;
    child.pop();
    setChildren((old) => old - 1);
  };

  const increase = () => {
    if (children === 4) return;
    const { child } = formData;
    child.push({
      name: "",
      age: "",
    });
    setChildren((old) => old + 1);
  };
  return (
    <>
      <div className="form__input__section">
        <Input
          title="Your full name"
          inputType="text"
          value={fullname}
          name="fullname"
          required
          onChangeHandler={onChangeHandler}
          error={error}
        />
        <Input
          title="Email address"
          inputType="email"
          value={email}
          name="email"
          required
          onChangeHandler={onChangeHandler}
        />
        <Input
          title="Mobile number"
          inputType="tel"
          required
          value={mobile}
          name="mobile"
          onChangeHandler={onChangeHandler}
        />
        <Input
          title="Date of birth"
          inputType="date"
          required
          value={birth}
          name="birth"
          onChangeHandler={onChangeHandler}
        />
        <Input
          title="PAN number"
          inputType="text"
          required
          value={PAN}
          name="PAN"
          onChangeHandler={onChangeHandler}
        />
      </div>
      <hr className="br" />
      <div className="life-stage__section">
        <h4>Select your life stage among these</h4>
        <div>
          {options.map((o, i) => {
            return (
              <span
                className={`${
                  o === lifeStage ? "active__lifestage" : "lifestage"
                }`}
                key={i}
                onClick={() => setLifeStage(options[i])}
              >
                {o}
              </span>
            );
          })}
        </div>
      </div>
      <div className="children__section">
        <h4>Number of children in family</h4>
        <div>
          <button onClick={decrease}>-</button>
          <span>{children}</span>
          <button onClick={increase}>+</button>
        </div>
      </div>
    </>
  );
}

export default Step1;
