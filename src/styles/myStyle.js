import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centered: {
    alignItems: 'center',
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#EFC81A',
    height: 50,
    width: 350,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
  },
  buttonAddRecipe: {
    alignItems: 'center',
    backgroundColor: '#EFC81A',
    height: 50,
    width: 200,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
  },

  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 5,
    marginHorizontal: 30,
    marginVertical: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});

export default styles;
