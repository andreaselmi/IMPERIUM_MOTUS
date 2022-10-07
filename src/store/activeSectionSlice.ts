import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SiteSectionTypes } from "../defs/siteSection";

const activeSectionSlice = createSlice({
  name: "activeSection",
  initialState: {
    activeSection: "",
  },
  reducers: {
    setActiveSection: (
      state,
      action: PayloadAction<SiteSectionTypes | null>
    ) => {
      if (!action.payload) {
        state.activeSection = "";
      } else {
        state.activeSection = action.payload;
      }
    },
  },
});

export default activeSectionSlice.reducer;
export const { setActiveSection } = activeSectionSlice.actions;
