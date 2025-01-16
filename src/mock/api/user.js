import { USER_LIST } from "./data";
import { http, HttpResponse } from "msw";
const signIn = http.post(`/api/login`, async ({ request }) => {
    const { username, password } = await request.json();

    const user = USER_LIST.find((item) => item.username === username);

    if (!user || user.password !== password) {
        return HttpResponse.json({
            status: 10001,
            message: "Incorrect username or password.",
        });
    }

    return HttpResponse.json({
        status: 0,
        message: "",
        data: {
            user,
            accessToken: faker.string.uuid(),
            refreshToken: faker.string.uuid(),
        },
    });
});
const test = http.get('/api/test', async () => {
    return HttpResponse.json({
        status: 0,
        message: "",
        data: {
            test: 'test'
        },
    });
})
export default [signIn, test];