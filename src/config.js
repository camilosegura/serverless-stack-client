export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-camilo-segura"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://7l486yxqnd.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_aKM0KoTFW",
    APP_CLIENT_ID: "7vi8k73lhntbg4us7c6jv59oek",
    IDENTITY_POOL_ID: "us-east-1:868acd62-38d9-4159-ba9b-ee8a07c791c7"
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_hqaJWt6NjSGSYbjGYbfEsui200A4COlnsI"
};
