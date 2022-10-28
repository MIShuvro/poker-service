export interface EnvironmentVariables {
  PORT: number;
  SWAGGER_USERNAME: string;
  SWAGGER_PASSWORD: string;
  RABBIT_MQ_URL: string;
  RABBIT_MQ_POCKER_EXCHANGE: string;
  RABBIT_MQ_POCKER_ROUTING_KEY: string;
  RABBIT_MQ_POCKER_QUEUE: string;
  SES_HOST: string;
  SES_PORT: number;
  SES_USER: string;
  SES_PASSWORD: string;
  SES_EMAIL_SOURCE: string;
  AWS_ACCESS_KEY: string;
  AWS_SECRET_KEY: string;
  AWS_REGION: string;
  AWS_API_VERSION: string;
}
