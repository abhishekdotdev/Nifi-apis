import {
  createFileService,
  getFileService,
} from '../services/uploadService.js';

export async function createFile(req, res) {
  try {
    const img = req.file;
    console.log('IMAGE', img);
    const uploadData = {
      filename: img.filename,
      path: img.path,
      mimetype: img.mimetype,
      size: img.size,
    };
    const newFile = await createFileService(uploadData);

    return res.status(201).json({
      success: true,
      message: 'File uploaded successfully',
      data: newFile,
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

export async function getFiles(req, res) {
  try {
    const files = await getFileService(req);
    return res.status(200).json({
      success: true,
      message: 'Files fetched successfully',
      data: files,
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
