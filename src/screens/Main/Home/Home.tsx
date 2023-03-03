import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import tasks from '../../../data/Tasks';
import {getAuth, signOut} from 'firebase/auth';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import colors from '../../../constants/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Home = ({navigation}) => {
  const auth = getAuth();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Morning, Utkarsh👋</Text>
      </View>
      <View style={styles.progressDiv}>
        <View style={styles.graphContainer}>
          <AnimatedCircularProgress
            size={120}
            width={15}
            fill={75}
            tintColor={colors.theme_red}
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor={colors.theme_gray}
            fillLineCap={'round'}
            rotation={0}
          />
          <Text style={styles.progressCount}>75%</Text>
        </View>
        <View style={styles.progressContainer}>
          <View>
            <Text style={styles.progressText}>
              Wow! Your Daily goals are almost done!
            </Text>
          </View>
          <View>
            <Text style={styles.taskText}>12 of 16 Completed!</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.taskHeader}>
          <Text style={styles.taskHeaderText}>Today's Tasks</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AllTasks')}>
            <Text style={styles.taskHeaderButton}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.taskList}
          showsVerticalScrollIndicator={false}>
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
    </View>
  );
};

export default Home;
