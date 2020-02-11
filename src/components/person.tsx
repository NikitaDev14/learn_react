import React, { Component } from "react";
import { Person as PersonModel } from '../models'

export class Person extends Component<PersonModel> {
  public render () {
    return (
      <div>
        <p>I'm {this.props.name} and I'm {this.props.age} years old!</p>
        <p>{this.props.children}</p>
      </div>
    );
  }
}