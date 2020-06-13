import React from "react";
import { useForm } from "react-hook-form";
import OnBoardingImg from "../on-boarding/onBoarding-img";

const DietaryPref = ({ setStep, handleChange, user }) => {
  const customRadio = "custom-control custom-radio mb-4";
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    setStep("BMI");
  };
  return (
    <div
      className="d-flex justify mt-4 mx-lg-5 mx-md-5 mx-sm-5 mx-5"
      style={{ height: "950px" }}
    >
      <div className="mt-5 col-xl-3 pt-3">
        <h2 className="text-center pb-5 font-weight-bolder mt-5">
          Dietary Preference{" "}
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-group"
          role="form "
          value={user.DietaryPref}
        >
          <div className={customRadio}>
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              className="custom-control-input"
              value="0"
              onChange={handleChange}
              ref={register}
            />
            <label className="custom-control-label" htmlFor="customRadio1">
              <h5 className="ml-3">Keto</h5>
            </label>
          </div>
          <div className="border-bottom mb-5"></div>
          <div className={customRadio}>
            <input
              type="radio"
              id="customRadio2"
              name="customRadio"
              className="custom-control-input"
              value="1"
              onChange={handleChange}
              ref={register}
            />
            <label className="custom-control-label" htmlFor="customRadio2">
              <h5 className="ml-3">Paleo</h5>
            </label>
          </div>
          <div className="border-bottom mb-5"></div>
          <div className={customRadio}>
            <input
              type="radio"
              id="customRadio3"
              name="customRadio"
              className="custom-control-input"
              value="2"
              onChange={handleChange}
              ref={register}
            />
            <label className="custom-control-label" htmlFor="customRadio3">
              <h5 className="ml-3">US. Gov. Nutrition Guidelines</h5>
            </label>
          </div>
          <div className="border-bottom mb-5"></div>
          <div className={customRadio}>
            <input
              type="radio"
              id="customRadio4"
              name="customRadio"
              className="custom-control-input"
              value="3"
              onChange={handleChange}
              ref={register}
            />
            <label className="custom-control-label" htmlFor="customRadio4">
              <h5 className="ml-3">None</h5>
            </label>
          </div>

          <button
            type="submit"
            className="btn-primary rounded p-2 w-100 border border-primary mt-2"
          >
            Next
          </button>
          <button
            onClick={() => setStep("ActivityLevel")}
            className="mt-3 btn-secondary rounded p-2 w-100"
          >
            Back
          </button>
        </form>
      </div>
      <OnBoardingImg />
    </div>
  );
};

export default DietaryPref;