import { View } from 'react-native';
import EventList from '../components/EventList';

const Events = ({ navigation }) => {
  return (
    <View>
      <EventList navigation={navigation} />
    </View>
  );
};

export default Events;
