import React, {Component} from "react";

export default class Card extends Component {
  // when you map the elements in the main app, maybe create an ID as you loop then
  // maybe access them somehow here
  render() {
    return (
      <div className="projjy relative mt-12 justify-self-center mb-12 max-w-xs lg:max-w-sm">
        <div className="flex relative z-20">
        <img
          className="w-20 h-20 -mt-10 -ml-10 absolute inline-block"
          src={this.props.lang}
          alt="Language or framework logo"/>
          </div>
        <div
          class="bg-accent2 rounded-2xl overflow-hidden shadow-lg">
          <img class=" w-full h-full" src={this.props.img} alt="Sunset in the mountains"/>
          <div class="px-6 py-4">
            <div className="flex flex-row mb-2">
              <h1 className="font-bold text-gray-200 tracking-tight text-3xl">{this.props.title}</h1>
            </div>
            <p class="text-gray-400 text-xl">
              {this.props.description}
            </p>
          </div>
        </div>
      </div>

    );
  }

}