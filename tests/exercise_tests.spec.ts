import { test, expect, request } from '@playwright/test';
import { baseURLis } from '../globals/globals';

let responseNum: number;
test.describe.configure({ mode: 'serial' });

// Verify the token is valid
test('Verify Token', async () => {
    const requestContext = await request.newContext();
    //process.env.TOKEN = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJCcmVuZGFuX1Rlc3QxMyIsImVtYWlsIjoiYnJ1Y2VvZmJlZXIrMTNAZ21haWwuY29tIiwicmV0dXJuS2V5Ijp0cnVlLCJpYXQiOjE3MTgwMDYwOTUsImV4cCI6MTcxODI2NTI5NX0.O10k65BiR-yiyr9cY22ngJXLcnKhNCbbzmbjmDNNHHdud8QxI-TxZtYCpGEiP5RVxqbqm2o0i3XNhJ5gQkzjwA";
    const response = await requestContext.get(baseURLis + '/auth/verifytoken', {
        headers: {
            "accept": "*/*",
            "Authorization": `${process.env.TOKEN}`,
        },
    });
    responseNum = response.status();
    expect(responseNum == 200)
});

//Create User
test('Register user', async () => {
    const requestContext = await request.newContext();
    const response = await requestContext.get(baseURLis + '/auth/user/register', {
        headers: {
            "accept": "*/*",
            "Authorization": `${process.env.TOKEN}`,
        },
        data: {
            "username": `${process.env.RAND}`,
            "password": "Test/Pass01"
        }
    });
    responseNum = response.status();
    expect(responseNum == 200)
});

//Login with User credentials
test('login user', async () => {
    const requestContext = await request.newContext();
    const response = await requestContext.post(baseURLis + '/auth/user/login', {
        headers: {
            "accept": "*/*",
            "Content-Type": "application/json",
            "Authorization": `${process.env.TOKEN}`,
        },
        data: {
            "username": `${process.env.RAND}`,
            "password": "Test/Pass01"
        }
    });
    const body = await response.json();
    process.env.LOGIN = body.token;
    responseNum = response.status();
    expect(responseNum == 200)
});
//Add User to the leaderboard
test('add new user', async () => {
    const requestContext = await request.newContext();
    const response = await requestContext.post(baseURLis + '/v1/user', {
        headers: {
            "accept": "*/*",
            "Authorization": `${process.env.LOGIN}`,
        },
        data: {
            "username": `${process.env.RAND}`,
            "score": 0
        }
    });
    responseNum = response.status();
    expect(responseNum == 201)
});
//update Points for the user
test('update user points', async () => {
    const requestContext = await request.newContext();
    const response = await requestContext.put(baseURLis + '/v1/user', {
        headers: {
            "accept": "*/*",
            "Authorization": `${process.env.LOGIN}`,
        },
        data: {
            "username": `${process.env.RAND}`,
            "score": 50
        }
    });
    responseNum = response.status();
    expect(responseNum == 204)
});