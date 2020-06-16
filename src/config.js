// export default {
//   s3: {
//     REGION: "us-east-1",
//     BUCKET: "notes-app-camilo-segura"
//   },
//   apiGateway: {
//     REGION: "us-east-1",
//     URL: "https://7l486yxqnd.execute-api.us-east-1.amazonaws.com/prod"
//   },
//   cognito: {
//     REGION: "us-east-1",
//     USER_POOL_ID: "us-east-1_aKM0KoTFW",
//     APP_CLIENT_ID: "7vi8k73lhntbg4us7c6jv59oek",
//     IDENTITY_POOL_ID: "us-east-1:868acd62-38d9-4159-ba9b-ee8a07c791c7"
//   },
//   MAX_ATTACHMENT_SIZE: 5000000,
//   STRIPE_KEY: "pk_test_hqaJWt6NjSGSYbjGYbfEsui200A4COlnsI"
// };


const dev = {
  STRIPE_KEY: "pk_test_hqaJWt6NjSGSYbjGYbfEsui200A4COlnsI",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-5d7uh5wun0qy"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "ttps://49fxpk4ck7.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_SyWGMwfjr",
    APP_CLIENT_ID: "5dr8iidh1h4j4lvca0cgdh5fn6",
    IDENTITY_POOL_ID: "us-east-1:ee6afe29-6698-467c-9dc1-1b4becddc681"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_hqaJWt6NjSGSYbjGYbfEsui200A4COlnsI",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-nu8i7umldzsa"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://afqw1incyj.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_d61UQkOcq",
    APP_CLIENT_ID: "1kb8fi7d07eofl03oslnssqdmp",
    IDENTITY_POOL_ID: "us-east-1:ebc9d92e-9263-4a75-8350-ed6c7c71f305"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
