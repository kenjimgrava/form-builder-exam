import React, { useState } from "react";
import Button from "../components/Button";
import { FormField } from "../@customTypes/FormField";
import DynamicForm from "../components/DynamicForm";
import FormDisplay from "../components/FormDisplay";

function Homepage() {
  const [formFields, setFormFields] = useState<FormField[]>([
    { name: "", value: "" },
  ]);

  const [canAddNewField, setCanAddNewField] = useState(false);
  const handleAddField = () => {
    if (canAddNewField) {
      setFormFields([...formFields, { name: "", value: "" }]);
    }
    setCanAddNewField(false);
  };

  const handleFieldChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    const newFormFields = [...formFields];
    newFormFields[index] = { ...newFormFields[index], [name]: value };

    setFormFields(newFormFields);
    checkIfCanAddNewField();
  };

  const checkIfCanAddNewField = () => {
    if (formFields.every((field) => field.name !== "" && field.value !== "")) {
      setCanAddNewField(true);
    } else {
      setCanAddNewField(false);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col mt-10 w-full">
      <div className="text-2xl lg:text-6xl mb-5">Dynamic Form Builder</div>
      <DynamicForm
        formFields={formFields}
        handleFieldChange={handleFieldChange}
      />
      <Button
        text="Add New Field"
        onClick={handleAddField}
        className={`mt-5 ${!canAddNewField ? "cursor-not-allowed" : ""}`}
        disabled={!canAddNewField}
      />
      {formFields.length > 1 && (
        <div className="mt-32">
          <FormDisplay formFields={formFields} />
        </div>
      )}
    </div>
  );
}

export default Homepage;
