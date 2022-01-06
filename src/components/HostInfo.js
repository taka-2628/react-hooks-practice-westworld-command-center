import React from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";

function HostInfo( { areas, selectedHost, updateSelectedHostData } ) {
  // Options have to be formatted in this way (array of objects with keys of: key, text, value)
  // Value has to match the value in the object to render the right text.
  const options = areas.map( area=> {
    return { key: area.name, 
      text: area.name.split("_").map( word => word.slice(0,1).toUpperCase() + word.slice(1)).join(" "), 
      value: area.name
    }
  })

  function handleRadioChange() {
    const updatedHost = {...selectedHost, active: !selectedHost.active}
    updateSelectedHostData(updatedHost)
  }

  function handleOptionChange(e, { value }) {
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger or console.log in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
    const updatedHost = {...selectedHost, area: value}
    updateSelectedHostData(updatedHost)
  }  

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={selectedHost.imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {selectedHost.firstName} | {selectedHost.gender === "Male" ? <Icon name="man" /> : <Icon name="woman" />}
            </Card.Header>
            <Card.Meta>
              <Radio
                onChange={handleRadioChange}
                label={selectedHost.active ? "Active" : "Decommissioned"}
                checked={selectedHost.active}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleOptionChange}
              value={selectedHost.area}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
