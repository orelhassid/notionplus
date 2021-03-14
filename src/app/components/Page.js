import React from "react";
import Navigation from "./Navigation/Navigation";

export default function Page({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
