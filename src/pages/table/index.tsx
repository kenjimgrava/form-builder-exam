import React from "react";
import FormDisplay from "../../components/FormDisplay";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  removeFormDataById,
  editFormDataById,
} from "../../store/formDataSlice";
import { FormField } from "../../@customTypes/FormField";

function TablePage() {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.formData.formState);
  const deleteAction = (id: number) => {
    dispatch(removeFormDataById({ id }));
  };
  const editAction = (item: FormField) => {
    dispatch(editFormDataById(item));
  };
  return (
    <div className="mt-10">
      <FormDisplay
        formFields={formData || []}
        deleteItem={deleteAction}
        editItem={editAction}
      />
    </div>
  );
}

export default TablePage;
