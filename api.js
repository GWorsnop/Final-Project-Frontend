import axios from "axios";
import key from "./maps_key";

function getEvents() {
  return axios
    .get(`http://54.86.179.94:8080/api/events`)
    .then(({ data }) => {
      return data.events;
    })
    .catch((err) => {
      console.log(err);
    });
}

function getAllGroups() {
  return axios.get("http://54.86.179.94:8080/api/groups").then(({ data }) => {
    return data.groups;
  });
}

function getSingleEvent(id) {
  return axios
    .get(`http://54.86.179.94:8080/api/events/${id}`)
    .then(({ data }) => {
      return data.event;
    });
}

function getGroupByID(id) {
  return axios
    .get(`http://54.86.179.94:8080/api/groups/${id}`)
    .then(({ data }) => {
      return data.group;
    });
}

function getEventMessages(id) {
  return axios
    .get(`http://54.86.179.94:8080/api/event-messages/events/${id}`)
    .then(({ data }) => {
      return data.messages;
    });
}

function getCoordsFromLocation(location) {
  const formattedLocation = location.split(" ").join("+");

  return axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedLocation}&key=${key}`
    )
    .then(({ data }) => {
      return data.results[0].geometry.location;
    });
}

module.exports = {
  getAllGroups,
  getEvents,
  getSingleEvent,
  getEventMessages,
  getGroupByID,
  getCoordsFromLocation,
};
