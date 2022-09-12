import { ScrollView, View, Text, StyleSheet } from 'react-native';

const GroupListGenerator = ({ allGroups }) => {
  return (
    <ScrollView>
      {allGroups.map((group) => {
        return (
          <View key={group._id} style={styles.container}>
            <Text style={styles.title}>{group.title}</Text>
            <Text style={styles.description}>{group.description}</Text>
            <Text style={styles.category}>{group.category}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default GroupListGenerator;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  },
  description: {
    fontSize: 16,
    paddingLeft: 10,
    paddingBottom: 10
  },
  category: {
    fontSize: 13,
    paddingLeft: 10,
    paddingBottom: 5,
    fontWeight: 'bold'
  }
});
