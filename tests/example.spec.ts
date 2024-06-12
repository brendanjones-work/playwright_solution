// import { test, expect, request } from '@playwright/test';
// import { baseURLis } from '../globals/globals';

// test('Verify Token', async () => {
//   const requestContext = await request.newContext();
//   process.env.TOKEN = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJCcmVuZGFuX1Rlc3QxMyIsImVtYWlsIjoiYnJ1Y2VvZmJlZXIrMTNAZ21haWwuY29tIiwicmV0dXJuS2V5Ijp0cnVlLCJpYXQiOjE3MTgwMDYwOTUsImV4cCI6MTcxODI2NTI5NX0.O10k65BiR-yiyr9cY22ngJXLcnKhNCbbzmbjmDNNHHdud8QxI-TxZtYCpGEiP5RVxqbqm2o0i3XNhJ5gQkzjwA";
//   const response = await requestContext.get( baseURLis + '/auth/verifytoken', {
//     headers: {
//       "accept": "*/*",
//       "Authorization": `${process.env.TOKEN}`,
//     },
//   });
//   const body = response.status();
//   console.log(body);
//   expect(body == 200)
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
