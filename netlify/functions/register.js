import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const client = new MongoClient(uri);

  try {
    const {
      firstName,
      lastName,
      jobTitle,
      company,
      mobileNumber,
      email,
      companyWebsite,
      agree,
    } = JSON.parse(event.body);

    // Basic validation
    if (!firstName || !lastName || !email || !jobTitle || !company) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Missing required fields' }),
      };
    }

    await client.connect();
    const db = client.db('registrationDB');
    const collection = db.collection('registrations');

    // Insert form data
    await collection.insertOne({
      firstName,
      lastName,
      jobTitle,
      company,
      mobileNumber,
      email,
      companyWebsite,
      agree,
      createdAt: new Date(),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Registration successful' }),
    };
  } catch (error) {
    console.error('Registration error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  } finally {
    await client.close();
  }
}
