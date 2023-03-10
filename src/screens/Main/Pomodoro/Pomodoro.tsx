import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import colors from '../../../constants/colors';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const Pomodoro = ({sessions = 4, time = 40, breakTime = 5}) => {
  /*
  TODO: The time and no of sessions will be given, 
  * The ticker will be having time given as props
  ! By default we will be giving 10 minutes between each session
  ! No. of Breaks = Session - 1, which will be handled by a function which will count the session.
  
  TODO: First, Pomodoro Session, then once, ticker is 0, set currentSession to Break, initialize ticker to breakTime, and continue to tick.

  */
  //! To Pause and resume the pomodoro
  const [active, setActive] = useState(false);

  //! The actual ticker
  const [ticker, setTicker] = useState(time);

  // ! The number of break sessions
  const [breaks, setBreaks] = useState(sessions - 1);

  // ! The progress of the circular chart
  const [progress, setProgress] = useState(0);

  // ! The time shown to the user
  const [pomodoroTime, setPomodoroTime] = useState(
    'Click the button to start pomodoro!',
  );

  // ! To switch between sessions
  const [currentSession, setCurrentSession] = useState('Pomodoro');

  function initializeSessions() {
    //! This function will run everytime the ticker goes to zero and assigns the next session, be it break or pomodoro
    if (ticker == 0 && currentSession === 'Pomodoro' && sessions > 0) {
      setCurrentSession('Break');
      sessions--;
      setTicker(300);
      setPomodoroTime('Click the button to start Break!');
      setActive(false); //! Pausing the pomodoro after sessions are completed
    } else if (ticker == 0 && currentSession === 'Break' && breaks > 0) {
      setCurrentSession('Pomodoro');
      setBreaks(prev => prev - 1);
      setTicker(time);
      setPomodoroTime('Click the button to start pomodoro!');
      setActive(false); //! Pausing the pomodoro after sessions are completed
    }
  }

  function updateChart() {
    /*
    !This function will calculate the progress for the round chart 
    TODO: Here's the explaination, let's say we have 30 seconds remaining in the ticker, and the totat time is 120s
    * We will calculate the percent 30 is of 120,which is 0.25, that means 1 - 0.25 => 0.75 is completed, 
    ! Therefore the progress = 0.75 * 100 => 75% 
    TODO: The edge case is when ticker is 0, where we set the progress manually to 100% and stop the pomodoro until user starts it again or else, we will never be able to see 100% completed
    */
    if (currentSession === 'Pomodoro') {
      let _progress = (1 - (ticker / time) * 100) * 100;
      setProgress(Math.round(_progress));
    } else {
      let _progress = (1 - ticker / (breakTime * 60)) * 100;
      setProgress(Math.round(_progress));
    }
  }

  function showTimeLeft() {
    let _minutes = Math.floor(ticker / 60);
    let _seconds = (Math.round(ticker / 60) - ticker / 60) * 60;

    if (_seconds < 10) {
      setPomodoroTime(`${_minutes} : 0${_seconds}`);
    } else {
      setPomodoroTime(`${_minutes} : ${_seconds}`);
    }
  }

  useEffect(() => {
    //* Ticker, only ticks when the session is active
    while (ticker && active) {
      const timer = setInterval(() => {
        setTicker(prev => prev - 1);
        updateChart();
        showTimeLeft();
      }, 1000);
      clearInterval(timer);
    }
    if (ticker === 0) {
      initializeSessions();
    }
  });

  return (
    <View style={styles.pageContainer}>
      <View style={styles.taskContainer}>
        <View style={styles.taskLeft}>
          <Text style={styles.taskTitle}>Task Title</Text>
          <Text style={styles.taskTime}>{ticker} minutes</Text>
        </View>
        <View style={styles.taskRight}>
          <Text style={styles.sessionStatus}>{sessions} Left</Text>
          <Text style={styles.sessionTime}>{time} minutes</Text>
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
          <Text style={styles.pomodoroTimeLeft}>{pomodoroTime}</Text>
          <Text style={styles.pomodoroLeft}>2 of 4 sessions</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.currentTask}>
          {currentSession === 'Pomodoro'
            ? 'Time to get Focued!🧠'
            : 'Time to take a break!🎊'}
        </Text>
        <View style={styles.controlButtons}>
          <TouchableOpacity style={styles.resetBtn}>
            <FontAwesome5 name="redo" size={20} color={colors.theme_gray} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.pauseBtn,
              !active && {backgroundColor: 'lightgreen'},
            ]}
            onPress={() => {
              setActive(!active);
            }}>
            <Ionicons
              name={active ? 'pause' : 'play'}
              size={40}
              color="white"
            />
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
