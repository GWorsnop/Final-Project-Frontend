import React, { useEffect, useState } from 'react';
import { getAllGroups } from '../api';
import { Text, View } from 'react-native';
import GroupListGenerator from './GroupListGenerator';

const Groups = () => {
  const [ allGroups, setAllGroups ] = useState([]);

  useEffect(() => {
    getAllGroups()
      .then((groupsFromApi) => {
        setAllGroups(groupsFromApi);
      })
      .catch((err) => {
        console.log('>>>> err', err);
      });
  }, []);

  return (
    <View>
      <GroupListGenerator allGroups={allGroups} />
    </View>
  );
};

export default Groups;
