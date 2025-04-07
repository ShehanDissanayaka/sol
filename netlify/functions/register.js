import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const { name, email, company, jobTitle } = JSON.parse(event.body);

    if (!name || !email || !company || !jobTitle) {
      return {
        statusCode: 400,
        body: 'Missing required fields',
      };
    }

    await client.connect();
    const db = client.db('registrationDB');
    const collection = db.collection('registrations');

    await collection.insertOne({ name, email, company, jobTitle });

    return {
      statusCode: 200,
      body: 'Registration successful',
    };
  } catch (error) {
    console.error('Registration error:', error);
    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  } finally {
    await client.close();
  }
}
