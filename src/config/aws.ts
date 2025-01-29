import AWS from 'aws-sdk';

// Configure AWS
AWS.config.update({
  region: process.env.VITE_AWS_REGION,
  credentials: new AWS.Credentials({
    accessKeyId: process.env.VITE_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.VITE_AWS_SECRET_ACCESS_KEY || ''
  })
});

// Create SES service object
const ses = new AWS.SES({ apiVersion: '2010-12-01' });

export const sendOTPEmail = async (to: string, otp: string) => {
  const fromEmail = process.env.VITE_AWS_SES_FROM_EMAIL;
  if (!fromEmail) {
    throw new Error('AWS SES From Email not configured');
  }

  const params = {
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Body: {
        Text: {
          Data: `Your verification code is: ${otp}. This code will expire in 10 minutes.`,
        },
      },
      Subject: {
        Data: 'TradeMade - Email Verification Code',
      }
    },
    Source: fromEmail
  };

  try {
    await ses.sendEmail(params).promise();
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};
