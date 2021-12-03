import React from "react";
import headerStyles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={headerStyles.title}>
      <h1>
        <span>Next</span> Journal
      </h1>
      <p className={headerStyles.description}>
        Journal entries to practice Next.js!
      </p>
    </div>
  );
}
