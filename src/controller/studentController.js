import {
  createStudentService,
  getStudentService,
  updateStudentService,
} from '../services/studentService.js';

export async function createStudent(req, res) {
  try {
    const response = await createStudentService(req.body);
    return res.status(201).json({
      success: true,
      message: 'Student created successfully',
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
}

export async function getStudents(req, res) {
  try {
    const response = await getStudentService();
    return res.status(200).json({
      success: true,
      message: 'Students fetched successfully',
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
}

export async function updateStudent(req, res) {
  try {
    const { id } = req.params;
    const studentData = req.body;
    const response = await updateStudentService(id, studentData);
    return res.status(200).json({
      success: true,
      message: 'Student updated successfully',
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
}
