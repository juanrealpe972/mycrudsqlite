import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#003153',
    backgroundColor: '#9EB9D4',
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 18,
    columnGap: 10,
  },
  textCategoria: {
    fontSize: 20,
    color: 'black',
  },
  containerform: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 50,
    marginTop: 40,
    rowGap: 12,
  },
  button: {
    marginHorizontal:12,
    backgroundColor: '#3A506B',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    paddingVertical: 13,
  },
  input: {
    fontSize: 15,
    borderWidth: 1,
    marginBottom: 5,
    paddingLeft: 10,
    borderColor: 'black',
    borderRadius: 15,
  },
});
