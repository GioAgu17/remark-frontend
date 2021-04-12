const dev = {
  STRIPE_KEY: "pk_test_51HdO2AImFnCv4jgf3dPUNtoMRZtgu0sR7FqeBP6XEGk8sfDfAqMttZ3I8j1uWRb3fgxwHXPhy5mJErNuHMJgccAs00OEmd4yfm",
  s3: {
    REGION: "us-east-2",
    BUCKET: "dev-remark-ext-infra-s3-uploads4f6eb0fd-18n2y6qxy2ui9"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://7t0di5r6ad.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_OQaPWe5UD",
    APP_CLIENT_ID: "1gokb9tpm13il68ecv9jiqg6jd",
    IDENTITY_POOL_ID: "us-east-2:91f7362e-8290-413b-bea1-b17df3cd1be1"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HdO2AImFnCv4jgf3dPUNtoMRZtgu0sR7FqeBP6XEGk8sfDfAqMttZ3I8j1uWRb3fgxwHXPhy5mJErNuHMJgccAs00OEmd4yfm",
  s3: {
    REGION: "us-east-2",
    BUCKET: "prod-remark-infra-s3-uploads4f6eb0fd-1jhs0c5v3ii45"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://x4s4epd7f0.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_Q0fGxBVBB",
    APP_CLIENT_ID: "4sn2gd042lmci4f7ig7r26b0pt",
    IDENTITY_POOL_ID: "us-east-2:2b5ceb81-4c9b-4960-b1bd-e2f5ed205cdc"
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
