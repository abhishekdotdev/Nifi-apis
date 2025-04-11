import db from '../models/index.js';

const { myfile } = db;
export async function createFile(uploadData) {
  try {
    const newFile = await myfile.create(uploadData);
    return newFile;
  } catch (error) {
    console.error('Error creating file:', error);
    throw error;
  }
}
export async function getFiles() {
  try {
    const files = await myfile.findAll({
      order: [['createdAt', 'DESC']],
    });
    return files;
  } catch (error) {
    console.log('Error in repository', error);
    throw error;
  }
}
