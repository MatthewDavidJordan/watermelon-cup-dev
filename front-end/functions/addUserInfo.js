const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.addUserInfo = functions.https.onCall(async (data, context) => {
  const { userId, firstName, lastName, nickname, graduationYear, footPref, position } = data;
  
  try {
    const userRef = admin.firestore().collection('users').doc(userId);
    await userRef.set({
      firstName,
      lastName,
      nickname,
      graduationYear,
      footPref,
      position,
      registered: true,
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error adding user info:', error);
    throw new functions.https.HttpsError('internal', 'Failed to add user info');
  }
});