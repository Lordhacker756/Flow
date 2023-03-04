import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import {tasks} from '../../../data';

const AllTasks = ({navigation}) => {
  return (
    <View style={styles.pageContainer}>
      <ScrollView style={styles.taskList} showsVerticalScrollIndicator={false}>
        {tasks.map((task, index) => (
          <View style={styles.taskItem} key={index}>
            <View>
              <Text style={styles.taskItemTitle}>{task.title}</Text>
              <Text style={styles.taskDuration}>{task.time}</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.startPomodoro}
                onPress={() => navigation.navigate('Pomodoro')}>
                <FontAwesome5 name="play" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default AllTasks;
