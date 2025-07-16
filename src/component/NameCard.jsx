import React from "react";

const nameCheapUrl =
  "https://www.namecheap.com/domains/registration/results/?domain=";

export default function NameCard({ suggestedName }) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="card-link"
      href={`${nameCheapUrl}${suggestedName}`}
    >
      <p>{suggestedName}</p>
    </a>
  );
}
