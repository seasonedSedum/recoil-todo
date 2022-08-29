import React from "react";
import { RecoilRoot } from "recoil";
import Calendar from "./components/Calendar";

export default function App() {
  return (
    <RecoilRoot>
      <Calendar />
    </RecoilRoot>
  );
}
