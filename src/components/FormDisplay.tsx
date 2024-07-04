import React from "react";
import { FormField } from "../@customTypes/FormField";

interface Props {
  formFields: FormField[];
}

function FormDisplay({ formFields }: Props) {
  return (
    <div className="w-[500px]">
      <div className="flex gap-5 items-center font-bold">
        <div className="w-1/2">Field Name</div>
        <div className="w-1/2">Field Value</div>
      </div>
      <div>
        {formFields.map(
          (res, index) =>
            res.name &&
            res.value && (
              <div key={index} className="flex gap-5 items-center">
                <div className="w-1/2">{res.name}</div>
                <div className="w-1/2">{res.value}</div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default FormDisplay;
