import React, { Component } from "react";

export class Person extends Component {
  public render () {
    return (
      <p>
        I'm a Person and I'm {Math.floor(Math.random() * 30)} years old!
      </p>
    );
  }
}