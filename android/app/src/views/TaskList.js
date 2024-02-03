// src/views/TaskList.js

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCourse } from '../components/actions/TaskAction';
import { style_01 } from '../styles/style_01';

const TaskList = () => {
  const { availableCourses, selectedCourses } = useSelector(state => state.courses);
  const dispatch = useDispatch();

  const handlePress = course => {
    dispatch(toggleCourse(course));
  };

  return (
    <View>
		<View style={style_01.titleBar}>
						<Image source={require('../imgs/logos/logo_universidad.png')} />
					</View>
      <Text style={style_01.title}>Cursos Disponibles</Text>
      {availableCourses.map((course, index) => (
        <TouchableOpacity key={index} style={{ ...style_01.taskText, backgroundColor: '#add8e6' }} onPress={() => handlePress(course)}>
          <Text style={style_01.text}>{course}</Text>
        </TouchableOpacity>
      ))}

      <Text style={style_01.title}>Cursos Seleccionados</Text>
      {selectedCourses.map((course, index) => (
        <TouchableOpacity key={index} style={{ ...style_01.taskText, backgroundColor: '#90ee90' }} onPress={() => handlePress(course)}>
          <Text style={style_01.text}>{course}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TaskList;
