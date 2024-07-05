import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormField } from "../@customTypes/FormField";

export interface FormDataState {
  formState: FormField[] | null;
}

const initialState: FormDataState = {
  formState: null,
};

export const formDataSlice = createSlice({
  name: "formState",
  initialState,
  reducers: {
    saveFormData: (state, action: PayloadAction<FormField[]>) => {
      console.log("payload ", action.payload);
      state.formState = action.payload;
    },
    editFormDataById: (state, action: PayloadAction<FormField>) => {
      if (state.formState) {
        console.log("new State", state.formState);
        console.log("new payload", action.payload);
        const index = state.formState.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.formState[index] = action.payload;
        }
      }
    },
    removeFormDataById: (state, action: PayloadAction<{ id: number }>) => {
      if (state.formState) {
        state.formState = state.formState.filter(
          (item) => item.id !== action.payload.id
        );
      }
      console.log("new State", state.formState);
    },
  },
});
export const { saveFormData, removeFormDataById, editFormDataById } =
  formDataSlice.actions;
export default formDataSlice.reducer;
