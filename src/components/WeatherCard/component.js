import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";

const WeatherCard = (props) => {
  const red = 100;
  const Card = styled.div`
    color: #fff;
    background: linear-gradient(0deg, rgb(${red}, 231, 0), rgb(255, 81, 0));
    width: 200px;
    height: 240px;
    display: block;
    margin: auto;
    text-align: center;
    padding: 10px;
    border-radius: 20px;
    margin-top: 50px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
      Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  `;

  return (
    <Card>
      <Location />
      <Icon />
      <Condition />
    </Card>
  );
};

export default WeatherCard;
