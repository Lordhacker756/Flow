import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Button, TouchableOpacity} from 'react-native';
import moment from 'moment';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../../../constants/colors';
import {dayTasks} from '../../../../data';

const WeeklyCalendar = ({month, year}) => {
  const [selectedDate, setSelectedDate] = useState(
    moment().year(year).month(month),
  );

  const days = [];
  const startDate = selectedDate.clone().startOf('week');

  for (let i = 0; i < 7; i++) {
    days.push({
      date: startDate.clone().add(i, 'day'),
    });
  }

  useEffect(() => {
    setSelectedDate(moment().year(year).month(month));
  }, [month, year]);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedDate(item.date);
        console.log(selectedDate.day());
      }}>
      <View
        style={[
          styles.day,
          selectedDate.day() === item.date.day() && {
            backgroundColor: colors.theme_red,
          },
        ]}>
        <Text style={styles.dayName}>{item.date.format('dd')}</Text>
        <Text style={styles.date}>{item.date.format('D')}</Text>
      </View>
    </TouchableOpacity>
  );

  const handlePrevWeek = () => {
    setSelectedDate(selectedDate.clone().subtract(1, 'week'));
  };

  const handleNextWeek = () => {
    setSelectedDate(selectedDate.clone().add(1, 'week'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handlePrevWeek}>
            <Feather name="chevron-left" size={30} />
          </TouchableOpacity>
          <View style={styles.dates}>
            <Text style={styles.month}>{selectedDate.format('MMMM')}</Text>
            <Text style={styles.year}>{selectedDate.format('YYYY')}</Text>
          </View>
          <TouchableOpacity onPress={handleNextWeek}>
            <Feather name="chevron-right" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        horizontal
        data={days}
        renderItem={renderItem}
        keyExtractor={item => item.date.format('YYYY-MM-DD')}
      />
      <View style={styles.taskContainer}>
        {/* dayTasks[selectedDate.format('YYYY-MM-DD')] */}
        {selectedDate.day() % 2 == 0 ? (
          <FlatList
            // data={dayTasks[selectedDate.format('YYYY-MM-DD')]}
            data={dayTasks['2023-04-06']}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.dayTaskContainer}>
                <View style={styles.taskLeft}>
                  <Text style={styles.taskTime}>{item.time}</Text>
                </View>
                <View style={styles.taskRight}>
                  <Text style={styles.taskTitle}>{item.title}</Text>
                  <Text
                    style={[
                      styles.taskStatus,
                      item.status == 'completed'
                        ? {color: 'lightgreen'}
                        : {color: colors.theme_red},
                    ]}>
                    {item.status}
                  </Text>
                </View>
              </View>
            )}
          />
        ) : (
          <View style={styles.noTaskContainer}>
            <Text style={styles.noTaskTitle}>No tasks for this day!</Text>
            <Text style={styles.noTaskMessage}>
              Click the (+) Icon to create a new task!
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default WeeklyCalendar;
