import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
// mock api
import worker from '@/mock';

// 对于没有 mock 的接口直接通过，避免异常
worker.start({ onUnhandledRequest: 'bypass' });

createRoot(document.getElementById('root')!).render(<App />);
