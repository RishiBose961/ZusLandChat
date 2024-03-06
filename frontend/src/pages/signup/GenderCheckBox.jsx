import React from "react";

const GenderCheckBox = () => {
  return (
    <div>
      <div className="form-control flex ">
        <label className="label cursor-pointer">
          <span className="label-text">Male</span>
          <input type="checkbox" className="checkbox checkbox-primary" />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text">Female</span>
          <input type="checkbox" className="checkbox checkbox-primary" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
