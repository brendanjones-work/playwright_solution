// global-setup.ts
import { FullConfig, request } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const baseURL = config.projects[0].use.baseURL;
  const rand = Math.floor(1000 + Math.random() * 9000);
  // set username
  process.env.RAND = `bruce` + rand.toString();
  const requestContext = await request.newContext();

  // generate the token for the application to be used in the following test cases
  const response = await requestContext.post(baseURL +'/auth/gentoken', {
    headers: {
      "accept": "application/json",
      "Content-Type": "application/json",
    },
    data: {
      "key": "Brendan_Test" + rand,
      "email": "bruceofbeer+" + rand + "@gmail.com",
      "returnKey": true,
    }
  });
  const body = await response.json();
  process.env.TOKEN = body.token;

}

export default globalSetup;