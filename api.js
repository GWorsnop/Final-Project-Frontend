import axios from 'axios';

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
  return axios.get('http://54.86.179.94:8080/api/groups').then(({ data }) => {
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

module.exports = { getAllGroups, getEvents, getSingleEvent };
