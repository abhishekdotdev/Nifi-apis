import {
  createResponseService,
  getResponseService,
} from '../services/responseService.js';

export async function createResponse(req, res) {
  try {
    const response = await createResponseService(req.body);
    return res.status(201).json({
      success: true,
      message: 'Response created successfully',
      data: response,
      error: {},
    });
  } catch (error) {
    return res.status(201).json({
      success: true,
      message: 'Internal server error',
      data: {},
      error: error,
    });
  }
}
export async function getResponse(req, res) {
  try {
    const response = await getResponseService(req.body);
    return res.status(200).json({
      success: true,
      message: response,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: {},
      error: error,
    });
  }
}
