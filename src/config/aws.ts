import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export const ses = new AWS.SES({ apiVersion: '2010-12-01' });

export const sendOTPEmail = async (to: string, otp: string) => {
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
      },
    },
    Source: process.env.SES_FROM_EMAIL,
  };

  try {
    await ses.sendEmail(params).promise();
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};
