import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import WeekCalendar from './components/WeeklyCalendar';
import {dayTasks} from '../../../data';

const ViewTasks = () => {
  return (
    <View style={styles.pageContainer}>
      <WeekCalendar month={3} year={2023} />
    </View>
  );
};

export default ViewTasks;
