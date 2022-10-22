export interface EnvironmentVariables {
  PORT: number;
  SWAGGER_USERNAME: string;
  SWAGGER_PASSWORD: string;
  RABBIT_MQ_URL: string;
  RABBIT_MQ_POCKER_EXCHANGE: string;
  RABBIT_MQ_POCKER_ROUTING_KEY: string;
  RABBIT_MQ_POCKER_QUEUE: string;
  SMTP_HOST: string;
  SMTP_PORT: number;
  SMTP_USER: string;
  SMTP_PASSWORD: string;
}
