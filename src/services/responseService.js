import {
  createResponse,
  getResponses,
} from '../repositories/responseRepository.js';

export async function createResponseService(responseData) {
  try {
    const response = await createResponse(responseData);
    return response;
  } catch (error) {
    console.log('Error in service', error);
    throw error;
  }
}

export async function getResponseService() {
  try {
    const response = await getResponses();
    return response;
  } catch (error) {
    console.log('Error in service', error);
    throw error;
  }
}
