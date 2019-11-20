export default {
    STRIPE_KEY: "pk_test_wne7Zs0SXsxNyfbBQ19i4fmP00TM49MGrh",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "eu-west-2",
      BUCKET: "test-note-app"
    },
    apiGateway: {
      REGION: "eu-west-2",
      URL: "https://rcmjcufu82.execute-api.eu-west-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "eu-west-2",
      USER_POOL_ID: "eu-west-2_cAbdPWS4n",
      APP_CLIENT_ID: "337pnotv6j20uri0u9vtutm8ss",
      IDENTITY_POOL_ID: "eu-west-2:9a64a8aa-b2bc-4e2f-b6c9-b28487ffcb4e"
    }
  };