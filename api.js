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

module.exports = { getAllGroups, getEvents };
