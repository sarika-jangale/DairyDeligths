import React from "react";
import { Search } from "@mui/icons-material";

export default function SearchNote({ onSearchNote, searchText }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginLeft: "300px",
        position: "relative",
        top: "-12px",
      }}
    >
      <input
        className="search-input"
        style={{
          width: "35vw",
          height: "40px", // Adjusted height
          backgroundColor: "transparent",
          border: "1px solid white",
          borderRadius: "20px",
          padding: "0px 10px", // Padding for input
          fontSize: "14px",
          marginBottom: "-90px",
          color: "white",
        }}
        type="text"
        value={searchText}
        placeholder="🔎Search for Product"
        onChange={onSearchNote}
      />
    </div>
  );
}
