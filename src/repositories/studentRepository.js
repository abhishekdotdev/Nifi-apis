import db from '../models/index.js';

const { Student } = db;

export async function createStudent(studentData) {
  try {
    const newStudent = await Student.create(studentData);
    return newStudent;
  } catch (error) {
    console.error('Error creating student:', error);
    throw error;
  }
}

export async function getStudents() {
  try {
    const students = await Student.findAll({});
    return students;
  } catch (error) {
    console.log('Error in repository', error);
    throw error;
  }
}

export async function updateStudent(id, studentData) {
  try {
    const [count, [updatedUser]] = await Student.update(studentData, {
      where: { id: id },
      returning: true,
    });
    return { count, updatedUser };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
