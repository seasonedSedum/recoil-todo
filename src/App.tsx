import React from "react";
import { RecoilRoot } from "recoil";
import Calendar from "./components/Calendar";
import TodoFormModal from "./features/TodoFormModal";
import TodoStatisticsModal from "./features/TodoStatisticsModal";

export default function App() {
  return (
    <RecoilRoot>
      <Calendar />
      <TodoFormModal />
      <TodoStatisticsModal />
    </RecoilRoot>
  );
}
