import React from "react";
import { FormField } from "../@customTypes/FormField";

interface Props {
  formFields: FormField[];
  deleteItem: (id: number) => void;
  editItem: (item: FormField) => void;
}

function FormDisplay({ formFields, deleteItem, editItem }: Props) {
  return (
    <div className="flex  justify-center">
      <div className="w-[500px]">
        <div className="flex gap-5 items-center font-bold">
          <div className="w-1/2">Field Name</div>
          <div className="w-1/2">Field Value</div>
          <div className="w-1/2">Action</div>
        </div>
        <div>
          {formFields.map(
            (res, index) =>
              res.name &&
              res.value && (
                <div key={index} className="flex gap-5 items-center">
                  <div className="w-1/2">{res.name}</div>
                  <div className="w-1/2">{res.value}</div>
                  <div className="w-1/2 flex gap-2">
                    <div
                      className=" font-bold cursor-pointer"
                      onClick={() => deleteItem(res.id)}
                    >
                      x
                    </div>
                    <div
                      className="w-1/2 font-bold cursor-pointer"
                      onClick={() =>
                        editItem({
                          id: res.id,
                          name: "new_name",
                          value: "new value",
                        })
                      }
                    >
                      edit
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default FormDisplay;
