import { setActiveSection } from "../store/activeSectionSlice";
import { AppDispatch } from "../store/store";

const changeActiveSection = (
  element: HTMLDivElement | null,
  activeSection: string,
  dispatch: AppDispatch
) => {
  if (!element) return;

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    dispatch(setActiveSection(activeSection));
  }
  if (window.scrollY <= 500) {
    dispatch(setActiveSection(""));
  }

  const rect = element.getBoundingClientRect();

  if (rect.top <= window.innerHeight / 3 && rect.bottom >= 0) {
    dispatch(setActiveSection(activeSection));
  }
};

export default changeActiveSection;
