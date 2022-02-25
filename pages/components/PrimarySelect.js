import React, { Component } from "react";
import Select from "react-select";
import AlabamaCard from "./Alabama";
import ArizonaCard from "./Arizona";
import styles from '../../styles/Select.module.css'


export default class PrimarySelect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectOptions: [],
      id: "",
      name: ""
    };
  }

  getOptions() {
    const options = [
      { value: "alabama", label: "Alabama" },
      { value: "arizona", label: "Arizona" },
      { value: "arkansas", label: "Arkansas" },
      { value: "georgia", label: "Georgia" },
      { value: "idaho", label: "Idaho" },
      { value: "iowa", label: "Iowa" },
      { value: "kentucky", label: "Kentucky" },
      { value: "louisiana", label: "Louisiana" },
      { value: "michigan", label: "Michigan" },
      { value: "mississippi", label: "Mississippi" },
      { value: "missouri", label: "Missouri" },
      { value: "north dakota", label: "North Dakota" },
      { value: "ohio", label: "Ohio" },
      { value: "oklahoma", label: "Oklahoma" },
      { value: "south carolina", label: "South Carolina" },
      { value: "south dakota", label: "South Dakota" },
      { value: "tennessee", label: "Tennessee" },
      { value: "texas", label: "Texas" },
      { value: "utah", label: "Utah" },
      { value: "west virginia", label: "West Virginia" },
      { value: "wisconsin", label: "Wisconsin" }
    ];
    this.setState({ selectOptions: options });
  }

  handleChange(e) {
    console.log(e);
    this.setState({ id: e.value, name: e.label });
  }

  componentDidMount() {
    this.getOptions();
  }

//   There is a better way to do this but for now we are doing it the long way.
  renderStateInfo() {
    if(this.state.id == 'alabama') {
      return <AlabamaCard/>
    } else if(this.state.id == 'arizona'){
        return <ArizonaCard/>
    }else if(this.state.id == ''){
        return null;
    }
     else {
        return (
        <div className="mt-9 mb-3">
            <div className="p-5">
                <h2 className="uppercase text-8xl text-center uppercase font-bold">no.</h2>
                    <p className="capitalize text-center text-5xl mt-3 pt-8">The state of {this.state.name} does <span className="font-bold">NOT</span> have a trigger law.</p>
            </div>
        </div>
        )
    }
  }

  render() {

    return (
        <div className="w-full">
            <div className="flex justify-center">
                <div className='pt-10 pb-15 w-1/2 '>
                    <Select
                    id="state-value-select" 
                    instanceId="state-value-select"
                    options={this.state.selectOptions}
                    onChange={this.handleChange.bind(this)}
                    />
                    {/* <p>{this.state.id}</p> */}
                </div>
            </div>
            <div className="StateInfo">
                    {this.renderStateInfo()}
            </div>
      </div>
    );
  }
}
