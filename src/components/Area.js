import React from "react";
import "../stylesheets/Area.css";
import HostList from './HostList';

function Area( { area, hosts, selectedHost, updateSelectedHost } ) {
  
  const activeHosts = hosts.filter(host => host.active === true);
  const activeHostsInArea = activeHosts.filter(host => host.area === area.name)

  return (
    <div
      className="area"
      id={area.name}
    >
      <h3 className="labels">
        {area.name.split("_").map( word => word.slice(0,1).toUpperCase() + word.slice(1)).join(" ")}
      </h3>
      <HostList hosts={activeHostsInArea} selectedHost={selectedHost} updateSelectedHost={updateSelectedHost}/>
    </div>
  );
}

Area.propTypes = {
  hosts: function (props) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
