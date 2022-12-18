import React from "react";
import Input from "../../input/Input";
import "./step2.css";
function Step2({
  children,
  child,
  spouse,
  father,
  mother,
  onChangeChildren,
  onChangeSpouse,
  onChangeFather,
  onChangeMother,
  onSubmit,
}) {
  return (
    <>
      <form style={{ position: "relative" }} onSubmit={onSubmit}>
        <button className="submit-btn" onClick={() => onSubmit()}>
          submit
        </button>
        <div className="form__input__section2-outer">
          <div className="form__input__section2">
            <div style={{ display: "flex" }}>
              <Input
                title="Your spouse name"
                inputType="text"
                placeholder="Enter full name"
                mandatory
                required
                name="name"
                value={spouse.name}
                onChangeHandler={onChangeSpouse}
              />
              <Input
                title="Age"
                inputType="text"
                placeholder="Enter age"
                mandatory
                required
                name="age"
                value={spouse.age}
                onChangeHandler={onChangeSpouse}
              />
            </div>

            {Array.from(Array(children), (_, i) => {
              return (
                <div key={i} style={{ display: "flex" }}>
                  <Input
                    title={`Child number 0${i + 1}`}
                    placeholder="Enter full name"
                    mandatory
                    required
                    value={child.name}
                    name="name"
                    onChangeHandler={onChangeChildren(i)}
                  />
                  <Input
                    title="Age"
                    inputType="text"
                    placeholder="Enter age"
                    mandatory
                    value={child.age}
                    name="age"
                    required
                    onChangeHandler={onChangeChildren(i)}
                  />
                </div>
              );
            })}
          </div>
          <hr />
          <div style={{ display: "flex" }}>
            <Input
              title="Your Father name"
              inputType="text"
              placeholder="Enter full name"
              name="name"
              value={father.name}
              onChangeHandler={onChangeFather}
            />
            <Input
              title="Age"
              inputType="text"
              placeholder="Enter age"
              name="age"
              value={father.age}
              onChangeHandler={onChangeFather}
            />
          </div>
          <div style={{ display: "flex" }}>
            <Input
              title="Your Mother name"
              inputType="text"
              placeholder="Enter full name"
              name="name"
              value={mother.name}
              onChangeHandler={onChangeMother}
            />
            <Input
              title="Age"
              inputType="text"
              placeholder="Enter age"
              name="age"
              value={mother.age}
              onChangeHandler={onChangeMother}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default Step2;
