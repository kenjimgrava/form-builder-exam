import React, { ChangeEvent } from "react";
import Input from "./Input";
import { FormField } from "../@customTypes/FormField";

interface Props {
  formFields: FormField[];
  handleFieldChange: (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => void;
}
function DynamicForm({ formFields, handleFieldChange }: Props) {
  return (
    <form className="border border-black p-5 rounded-2xl">
      {formFields.map((field, index) => (
        <div className="py-3">
          <Input
            name="name"
            placeholder="Field Name"
            className="mr-5"
            value={field.name}
            onChange={(e) => handleFieldChange(index, e)}
          />
          <Input
            name="value"
            placeholder="Field Value"
            value={field.value}
            onChange={(e) => handleFieldChange(index, e)}
          />
        </div>
      ))}
    </form>
  );
}

export default DynamicForm;
