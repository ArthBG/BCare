import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  head: {
    backgroundColor: '#F14666',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerFirst:{
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    marginBottom: 70,
  },
  containerFirstt:{
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
  },
  containerImage:{
    position: 'absolute',
    top: -30,
    backgroundColor: '#DDDDDD',
    borderRadius: 15,
  },
  containerImageAndText:{
    display: 'flex',
  },
  buttonInsider: {
    backgroundColor: '#BB0000',
    padding: 10,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  imageLoa: {
    width: 140,
    height: 100,
    marginTop: 20,
  },
  textPrincipal: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerall: {
    padding: 10,
  },
  image: {
    width: 250,
    height: 240,
    marginTop: 20,
  },
  textInicio: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  textInicio2: {
    fontSize: 18,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginTop: 20,
    lineHeight: 24,
  },
  textInicio3: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
  },
  item1: {
    fontSize: 16,
    marginTop: 10,
  },
  item2: {
    fontSize: 16,
    marginTop: 10,
  },
  item3: {
    fontSize: 16,
    marginTop: 10,
  },
  item4: {
    fontSize: 16,
    marginTop: 10,
  },
  item5: {
    fontSize: 16,
    marginTop: 10,
  },
  containerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#BB0000',
    padding: 10,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;