import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import colors from '../../../constants/colors';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const Pomodoro = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.taskContainer}>
        <View style={styles.taskLeft}>
          <Text style={styles.taskTitle}>Task Title</Text>
          <Text style={styles.taskTime}>120 minutes</Text>
        </View>
        <View style={styles.taskRight}>
          <Text style={styles.sessionStatus}>2/4</Text>
          <Text style={styles.sessionTime}>25 minutes</Text>
        </View>
      </View>
      <View style={styles.counterContainer}>
        <AnimatedCircularProgress
          size={responsiveHeight(35)}
          width={25}
          fill={65}
          tintColor={colors.theme_red}
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor={colors.theme_gray}
          fillLineCap={'round'}
          rotation={0}
        />
        <View style={styles.pomodoroDetails}>
          <Text style={styles.pomodoroTimeLeft}>18:59</Text>
          <Text style={styles.pomodoroLeft}>2 of 4 sessions</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.currentTask}>Stay focus for 25 minutes</Text>
        <View style={styles.controlButtons}>
          <TouchableOpacity style={styles.resetBtn}>
            <FontAwesome5 name="redo" size={20} color={colors.theme_gray} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.pauseBtn}>
            <Ionicons name="pause" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancel}>
            <FontAwesome5 name="stop" size={20} color={colors.theme_gray} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Pomodoro;
