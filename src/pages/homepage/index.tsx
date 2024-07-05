import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { FormField } from "../../@customTypes/FormField";
import DynamicForm from "../../components/DynamicForm";
import { useDispatch, useSelector } from "react-redux";
import { saveFormData } from "../../store/formDataSlice";
import { RootState } from "../../store/store";

function HomePage() {
  const dispatch = useDispatch();
  const formData =
    useSelector((state: RootState) => state.formData.formState) || [];
  const [formFields, setFormFields] = useState<FormField[]>([
    { name: "", value: "", id: 0 },
  ]);

  const [canAddNewField, setCanAddNewField] = useState(false);

  const handleAddField = () => {
    if (canAddNewField) {
      setFormFields([
        ...formFields,
        { name: "", value: "", id: formFields.length },
      ]);
    }
    setCanAddNewField(false);
  };

  const handleFieldChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    const newFormFields: FormField[] = [...formFields];
    newFormFields[index] = { ...newFormFields[index], [name]: value };
    setFormFields(newFormFields);
    checkIfCanAddNewField();
  };

  const handleSave = () => {
    if (canAddNewField) {
      const newFormData: FormField[] = [...formData, ...formFields];
      dispatch(saveFormData(newFormData));
      setFormFields([{ name: "", value: "", id: 0 }]);
    }
  };

  const checkIfCanAddNewField = () => {
    if (formFields.every((field) => field.name !== "" && field.value !== "")) {
      setCanAddNewField(true);
    } else {
      setCanAddNewField(false);
    }
  };

  const handleDelete = (id: number) => {
    if (formFields.length > 1) {
      setFormFields(formFields.filter((item) => item.id !== id));
    }
  };

  useEffect(() => {
    checkIfCanAddNewField();
  }, [formFields]);

  return (
    <div className="flex items-center justify-center flex-col mt-10 w-full">
      <div className="text-2xl lg:text-6xl mb-5">Dynamic Form Builder</div>

      <div className="border border-black p-5 rounded-2xl">
        <DynamicForm
          formFields={formFields}
          handleFieldChange={handleFieldChange}
          handleDelete={handleDelete}
        />
        <div className="items-center justify-center flex ">
          <Button
            text="Add New Field"
            onClick={handleAddField}
            className={`mt-5 ${!canAddNewField ? "cursor-not-allowed" : ""}`}
            disabled={!canAddNewField}
          />
        </div>
      </div>
      <Button text="Save" onClick={handleSave} className={`mt-5 `} />
    </div>
  );
}

export default HomePage;
