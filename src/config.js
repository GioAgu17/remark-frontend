export default {
  s3: {
    REGION: "us-east-2",
    BUCKET: "offers-remark-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://x4s4epd7f0.execute-api.us-east-2.amazonaws.com/prod/remark"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_Lk8S8AUSz",
    APP_CLIENT_ID: "7ine38t7jaob454ob1jd64o4qk",
    IDENTITY_POOL_ID: "us-east-2:151db3ce-41c8-4043-bf3f-c1ec6594fecc"
  }
};
