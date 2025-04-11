import { createFile, getFiles } from '../repositories/uploadRepository.js';

export async function createFileService(uploadData) {
  try {
    const newFile = await createFile(uploadData);
    return newFile;
  } catch (error) {
    console.error('Error creating file:', error);
    throw error;
  }
}

export async function getFileService(req) {
  try {
    const files = await getFiles();
    const filesWithLinks = files.map((file) => ({
      id: file.id,
      filename: file.filename,
      mimetype: file.mimetype,
      size: file.size,
      url: `${req.protocol}://${req.get('host')}/api/files/${file.filename}`,
    }));
    return filesWithLinks;
  } catch (error) {
    console.error('Error fetching file:', error);
    throw error;
  }
}
