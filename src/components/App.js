import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap";
import Headquarters from "./Headquarters";

function App() {
  const [hosts, setHosts] = useState([]);
  const [areas, setAreas] = useState([]);

  const [selectedHost, setSelectedHost] = useState({
    id: null,
    firstName: "",
    lastName: "",
    active: null,
    imageUrl: "",
    gender: "",
    area: "",
    authorized: null
  });

  useEffect(() => {
    fetch("http://localhost:3001/hosts")
      .then(response => response.json())
      .then(data => setHosts(data))
  }, [])

  useEffect(() => {
    fetch("http://localhost:3001/areas")
      .then(response => response.json())
      .then(data => setAreas(data))
  }, [])

  function updateSelectedHost(hostClicked){
    console.log(hostClicked)
    setSelectedHost(hostClicked)
  }

  function updateSelectedHostData(updatedHost){
    setSelectedHost(updatedHost);
    setHosts(hosts.map(host => {
      if(host.id === updatedHost.id){
        return updatedHost
      } else {
        return host
      }
    }))
  }

  function activateAll(){
    const updatedHosts = hosts.map(host => ({...host, active: true}));
    setHosts(updatedHosts)
  }

  function decomissionAll(){
    const updatedHosts = hosts.map(host => ({...host, active: false}));
    setHosts(updatedHosts)
  }

  return (
    <Segment id="app">
      <WestworldMap 
        areas={areas}
        hosts={hosts}
        selectedHost={selectedHost}
        updateSelectedHost={updateSelectedHost}
      />
      <Headquarters 
        areas={areas}
        hosts={hosts}
        selectedHost={selectedHost}
        updateSelectedHost={updateSelectedHost}
        updateSelectedHostData={updateSelectedHostData}
        onActivateAll={activateAll}
        onDecommissionAll={decomissionAll}
      />
    </Segment>
  );
}

export default App;
