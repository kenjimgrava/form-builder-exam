import React, { ChangeEvent } from "react";
import Input from "./Input";
import { FormField } from "../@customTypes/FormField";

interface Props {
  formFields: FormField[];
  handleFieldChange: (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => void;
  handleDelete: (id: number) => void;
}
function DynamicForm({ formFields, handleFieldChange, handleDelete }: Props) {
  return (
    <form className="p-5">
      {formFields.map((field, index) => (
        <div className="py-3 flex items-center">
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
          <div
            onClick={() => handleDelete(field.id)}
            className="ml-5 cursor-pointer font-bold"
          >
            X
          </div>
        </div>
      ))}
    </form>
  );
}

export default DynamicForm;
