import 'react-native-gesture-handler';
import { EventContext } from './contexts/EventsContext';
import { useState, useEffect } from 'react';
import { getEvents } from './api.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import SingleEvent from './components/SingleEvent';
import MainPage from './Pages/MainPage';

const Stack = createNativeStackNavigator();

export default function App() {
  const [ events, setEvents ] = useState([]);

  useEffect(() => {
    getEvents()
      .then((eventsFromApi) => {
        setEvents(eventsFromApi);
      })
      .catch((err) => {
        setError({ err });
      });
  }, []);

  return (
    <NavigationContainer>
      <EventContext.Provider value={{ events, setEvents }}>
        <Text
          style={{
            paddingTop: 70,
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold'
          }}>
          UpMeet
        </Text>
        {/* <Navbar /> */}
        <Stack.Navigator>
          <Stack.Screen name="Home" component={MainPage} events={events} />
          <Stack.Screen name="Event Details" component={SingleEvent} />
        </Stack.Navigator>
      </EventContext.Provider>
    </NavigationContainer>
  );
}
