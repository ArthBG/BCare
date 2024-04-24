import React, {useState} from 'react';
import {View, Switch} from 'react-native';
import styles from './styles';

const ToggleSwitch = () => {
    
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#767577', true: '#3e3e3e'}}
        thumbColor={isEnabled ? '#bb0000' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default ToggleSwitch