import { StyleSheet,StatusBar } from 'react-native';




export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight || 0,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: "100",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  list :{
    flex: 1,
    // alignItems: 'center',
    justifyContent: "space-between",
  }
});