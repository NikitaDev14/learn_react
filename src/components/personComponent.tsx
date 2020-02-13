import React, { Component } from "react";
import { Person } from '../models'

export class PersonComponent extends Component<Person> {
  public render () {
    return (
      <div>
        <p>I'm {this.props.name} and I'm {this.props.age} years old!</p>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
