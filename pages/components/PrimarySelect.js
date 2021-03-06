import React, { Component } from "react";
import Select from "react-select";
import AlabamaCard from "./Alabama";
import ArizonaCard from "./Arizona";
import ArkansasCard from "./Arkansas";
import GeorgiaCard from "./Georgia";
import IdahoCard from "./Idaho";
import IowaCard from "./Iowa";
import KentuckyCard from "./Kentucky";
import LouisianaCard from "./Louisiana";
import MichiganCard from "./Michigan";
import MississippiCard from "./Mississippi";
import MissouriCard from "./Missouri";
import NorthDakotaCard from "./Northdakota";
import OhioCard from "./Ohio";
import OklahomaCard from "./Oklahoma";
import SouthCarolinaCard from "./Southcarolina";
import SouthDakotaCard from "./Southdakota";
import TennesseeCard from "./Tennessee";
import TexasCard from "./Texas";
import UtahCard from "./Utah";
import WestVirginiaCard from "./Westvirginia";
import WisconsinCard from "./Wisconsin";
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
      { value: "alaska", label: "Alaska" },
      { value: "arizona", label: "Arizona" },
      { value: "arkansas", label: "Arkansas" },
      { value: "california", label: "California" },
      { value: "colorado", label: "Colorado" },
      { value: "connecticut", label: "Connecticut" },
      { value: "delaware", label: "Delaware" },
      { value: "florida", label: "Florida" },
      { value: "georgia", label: "Georgia" },
      { value: "hawaii", label: "Hawaii" },
      { value: "idaho", label: "Idaho" },
      { value: "illinoise", label: "Illinoise" },
      { value: "indiana", label: "Indiana" },
      { value: "iowa", label: "Iowa" },
      { value: "kansas", label: "Kansas" },
      { value: "kentucky", label: "Kentucky" },
      { value: "louisiana", label: "Louisiana" },
      { value: "maine", label: "Maine" },
      { value: "maryland", label: "Maryland" },
      { value: "michigan", label: "Michigan" },
      { value: "massachussetts", label: "Massachussetts" },
      { value: "michigan", label: "Michigan" },
      { value: "minnesota", label: "Minnesota" },
      { value: "mississippi", label: "Mississippi" },
      { value: "missouri", label: "Missouri" },
      { value: "montana", label: "Montana" },
      { value: "nebraska", label: "Nebraska" },
      { value: "nevada", label: "Nevada" },
      { value: "new hampshire", label: "New Hampshire" },
      { value: "new jersey", label: "New Jersey" },
      { value: "new mexico", label: "New Mexico" },
      { value: "new york", label: "New York" },
      { value: "north carolina", label: "North Carolina" },
      { value: "north dakota", label: "North Dakota" },
      { value: "ohio", label: "Ohio" },
      { value: "oklahoma", label: "Oklahoma" },
      { value: "oregon", label: "Oregon" },
      { value: "pennsylvania", label: "Pennsylvania" },
      { value: "rhode island", label: "Rhode Island" },
      { value: "south carolina", label: "South Carolina" },
      { value: "south dakota", label: "South Dakota" },
      { value: "tennessee", label: "Tennessee" },
      { value: "texas", label: "Texas" },
      { value: "utah", label: "Utah" },
      { value: "vermont", label: "Vermont" },
      { value: "virginia", label: "Virginia" },
      { value: "washington", label: "Washington" },
      { value: "west virginia", label: "West Virginia" },
      { value: "wisconsin", label: "Wisconsin" },
      { value: "wyoming", label: "Wyoming" },
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
    }else if(this.state.id == 'arkansas'){
      return <ArkansasCard/>
    }else if(this.state.id == 'georgia'){
      return <GeorgiaCard/>
    }else if(this.state.id == 'idaho'){
      return <IdahoCard/>
    }else if(this.state.id == 'iowa'){
      return <IowaCard/>
    }else if(this.state.id == 'kentucky'){
      return <KentuckyCard/>
    }else if(this.state.id == 'louisiana'){
      return <LouisianaCard/>
    }else if(this.state.id == 'michigan'){
      return <MichiganCard/>
    }else if(this.state.id == 'mississippi'){
      return <MississippiCard/>
    }else if(this.state.id == 'missouri'){
          return <MissouriCard/>
    }else if(this.state.id == 'north dakota'){
      return <NorthDakotaCard/>
    }else if(this.state.id == 'ohio'){
      return <OhioCard/>
    }else if(this.state.id == 'oklahoma'){
      return <OklahomaCard/>
    }else if(this.state.id == 'south carolina'){
      return <SouthCarolinaCard/>
    }else if(this.state.id == 'south dakota'){
      return <SouthDakotaCard/>
    }else if(this.state.id == 'tennessee'){
      return <TennesseeCard/>
    }else if(this.state.id == 'texas'){
      return <TexasCard/>
    }else if(this.state.id == 'utah'){
      return <UtahCard/>
    }else if(this.state.id == 'west virginia'){
      return <WestVirginiaCard/>
    }else if(this.state.id == 'wisconsin'){
      return <WisconsinCard/>
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
