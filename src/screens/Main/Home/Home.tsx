import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {Button} from 'react-native';
import {getAuth, signOut} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const auth = getAuth();
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Morning, Utkarsh👋</Text>
      </View>
      <View style={styles.progressDiv}>
        <View style={styles.graphContainer}></View>
        <View style={styles.progressContainer}>
          <View style={styles.progress}>
            <Text style={styles.progressText}>
              Wow! Your Daily goals are almost done!
            </Text>
          </View>
          <View style={styles.task}>
            <Text style={styles.taskText}>12 of 16 Completed!</Text>
          </View>
        </View>
      </View>
      <View style={styles.taskContainer}>
        <View style={styles.taskHeader}>
          <Text style={styles.taskHeaderText}>Today's Tasks</Text>
          <TouchableOpacity>
            <Text style={styles.taskHeaderButton}>See All</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
