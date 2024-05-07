const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.registerUser = functions.https.onCall(async (data, context) => {
  const { email, password } = data;
  
  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });
    
    return { success: true, user: userRecord };
  } catch (error) {
    console.error('Error registering user:', error);
    throw new functions.https.HttpsError('internal', 'Failed to register user');
  }
});