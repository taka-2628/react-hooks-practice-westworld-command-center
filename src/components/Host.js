import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host( { host, selectedHost, updateSelectedHost } ) {
  
  return (
    <Card
      className= {host.id === selectedHost.id ? "host selected" : "host"} 
      onClick={() => updateSelectedHost(host)}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
