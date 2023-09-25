import React, { useState } from "react";

export const TextInput = ({ changeFn }) => (
  <input className="input" onChange={changeFn}></input>
);
