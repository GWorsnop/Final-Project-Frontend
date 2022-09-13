import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Map from '../components/Map';
import Groups from '../components/Groups';
import Events from '../Pages/Events';

const MainPage = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Map View" component={Map} />
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Groups" component={Groups} />
    </Tab.Navigator>
  );
};

export default MainPage;
