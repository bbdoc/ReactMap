import { Icon } from 'leaflet' 

export default function (pokestop) {
  return new Icon({
    iconUrl: `/img/misc/pokestop.png`,
    iconSize: [30, 30],
    iconAnchor: [20, 33.96],
    popupAnchor: [0, -41.96],
  })
}