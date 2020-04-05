import React from "react";
import styled from "@emotion/styled";

const Location = (props) => {
  const City = styled.h1`
    margin-bottom: 0;
  `;
  const Country = styled.h3`
    margin: 0 0 15px 0;
  `;
  return (
    <div>
      <City> Sydney </City>
      <Country> AU </Country>
    </div>
  );
};

export default Location;
