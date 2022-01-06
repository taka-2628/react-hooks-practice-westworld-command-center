import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage";
import LogPanel from "./LogPanel";

function Headquarters( { areas, hosts, selectedHost, updateSelectedHost, updateSelectedHostData, onActivateAll, onDecommissionAll } ) {
  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage hosts={hosts} selectedHost={selectedHost} updateSelectedHost={updateSelectedHost}/>
      </Grid.Column>
      <Grid.Column width={5}>
        <Details areas={areas} selectedHost={selectedHost} updateSelectedHostData={updateSelectedHostData}/>
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel onActivateAll={onActivateAll} onDecommissionAll={onDecommissionAll}/>
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
