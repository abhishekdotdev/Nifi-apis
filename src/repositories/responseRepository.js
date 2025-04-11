import db from '../models/index.js';
const { Response } = db;
export async function createResponse(responseData) {
  try {
    const response = await Response.create(responseData);
    return response;
  } catch (error) {
    console.log('Error in repository', error);
    return error;
  }
}

export async function getResponses() {
  try {
    const responses = await Response.findAll({
      order: [['createdAt', 'DESC']],
    });
    return responses;
  } catch (error) {
    console.log('Error in repository', error);
    throw error;
  }
}
export async function getResponseById(id) {
  try {
    const response = await Response.findOne({
      where: { id },
    });
    return response;
  } catch (error) {
    console.log('Error in repository', error);
    throw error;
  }
}
