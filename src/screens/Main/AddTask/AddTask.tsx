import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';

import styles from './styles';
import {categories} from '../../../data';

import Feather from 'react-native-vector-icons/Feather';
import Ioncicons from 'react-native-vector-icons/Ionicons';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {SelectList} from 'react-native-dropdown-select-list';
import Slider from '@react-native-community/slider';
import colors from '../../../constants/colors';
import {width} from '../../../constants/dimesions';

const AddTask = ({navigation}) => {
  const [isDateVisible, setDateVisible] = useState(false);
  const [isTimeVisible, setTimeVisible] = useState(false);
  const [date, setDate] = useState('Select Date');
  const [time, setTime] = useState('Select Time');
  const [workingSessions, setWorkingSessions] = useState(2);
  const [longBreak, setLongBreak] = useState(15);
  const [shortBreak, setShortBreak] = useState(5);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined,
  );

  return (
    <View style={styles.pageContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Title</Text>
        <TextInput style={styles.input} placeholder="Enter title" />
      </View>
      <View style={styles.row}>
        <View style={styles.halfParent}>
          <View style={styles.halfInputContainer}>
            <Text style={styles.inputTitle}>Date</Text>
            <Pressable
              style={styles.specialInput}
              onPress={() => {
                setDateVisible(true);
              }}>
              <Text style={styles.inputText}>
                {date === 'Select Date' ? date : date.toDateString()}
              </Text>
              <Feather name="calendar" size={20} color="white" />
            </Pressable>
            <DateTimePickerModal
              isVisible={isDateVisible}
              mode="date"
              onConfirm={date => {
                setDate(date);
                setDateVisible(false);
              }}
              onCancel={() => {
                setDateVisible(false);
              }}
            />
          </View>
        </View>
        <View style={styles.halfParent}>
          <View style={styles.halfInputContainer}>
            <Text style={styles.inputTitle}>Time</Text>
            <Pressable
              style={styles.specialInput}
              onPress={() => {
                setTimeVisible(true);
              }}>
              <Text style={styles.inputText}>
                {time === 'Select Time' ? time : time.toLocaleTimeString()}
              </Text>
              <Ioncicons name="time-outline" size={20} color="white" />
            </Pressable>
            <DateTimePickerModal
              isVisible={isTimeVisible}
              mode="time"
              onConfirm={time => {
                setTime(time);
                setTimeVisible(false);
              }}
              onCancel={() => {
                setTimeVisible(false);
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Select Category</Text>
        <SelectList
          boxStyles={styles.select_input}
          arrowicon={<Feather name="chevron-down" size={20} color="white" />}
          setSelected={val => setSelectedCategory(val)}
          data={categories}
          search={false}
          closeicon={<Ioncicons name="close" size={20} color="white" />}
          save="value"
          dropdownStyles={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.row}>
          <Text style={styles.inputTitle}>Working Sessions</Text>
          <Text style={styles.selectValue}>{workingSessions}</Text>
        </View>
        <Slider
          style={{width: width * 0.9, height: 40}}
          minimumValue={0}
          maximumValue={10}
          minimumTrackTintColor={colors.theme_red}
          maximumTrackTintColor={colors.theme_gray}
          thumbTintColor={colors.theme_red}
          onValueChange={val => setWorkingSessions(val)}
          step={1}
          tapToSeek={true}
          value={workingSessions}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.row}>
          <Text style={styles.inputTitle}>Long Break</Text>
          <Text style={styles.selectValue}>{longBreak}</Text>
        </View>
        <Slider
          style={{width: width * 0.9, height: 40}}
          minimumValue={0}
          maximumValue={40}
          minimumTrackTintColor={colors.theme_red}
          maximumTrackTintColor={colors.theme_gray}
          thumbTintColor={colors.theme_red}
          onValueChange={val => setLongBreak(val)}
          step={5}
          tapToSeek={true}
          value={longBreak}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.row}>
          <Text style={styles.inputTitle}>Short</Text>
          <Text style={styles.selectValue}>{shortBreak}</Text>
        </View>
        <Slider
          style={{width: width * 0.9, height: 40}}
          minimumValue={0}
          maximumValue={20}
          minimumTrackTintColor={colors.theme_red}
          maximumTrackTintColor={colors.theme_gray}
          thumbTintColor={colors.theme_red}
          onValueChange={val => setShortBreak(val)}
          step={5}
          value={shortBreak}
          tapToSeek={true}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          ToastAndroid.show('Task Created😄', ToastAndroid.SHORT);
          navigation.navigate('Home');
        }}>
        <Text style={styles.buttonText}>Create Task</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AddTask;
