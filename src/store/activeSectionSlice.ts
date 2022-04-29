import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const activeSectionSlice = createSlice({
  name: "activeSection",
  initialState: {
    activeSection: "Piripinnazzi",
  },
  reducers: {
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
  },
});

export default activeSectionSlice.reducer;
export const { setActiveSection } = activeSectionSlice.actions;
