import {
  createStudent,
  getStudents,
  updateStudent,
} from '../repositories/studentRepository.js';

export async function createStudentService(studentData) {
  try {
    const newStudent = await createStudent(studentData);
    return newStudent;
  } catch (error) {
    console.error('Error creating student:', error);
    throw error;
  }
}

export async function getStudentService() {
  try {
    const students = await getStudents();
    return students;
  } catch (error) {
    console.error('Error fetching student:', error);
    throw error;
  }
}

export async function updateStudentService(id, studentData) {
  try {
    const response = await updateStudent(id, studentData);
    const { count, updatedUser } = response;
    if (count === 0) {
      throw new Error('Student not found!');
    }
    return updatedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
