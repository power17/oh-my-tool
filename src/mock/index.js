import { setupWorker } from "msw/browser";
import userMockApi from './api/user'
const api = [...userMockApi];
const worker = setupWorker(...api);

export default worker;