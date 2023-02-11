// npm第三方库
import ReactDOM from 'react-dom/client';

// 样式

// 项目中定义的组件
import { App } from './App';

// 创建项目要渲染到的根节点
const root = ReactDOM.createRoot(document.getElementById('root'));

// 渲染根节点
root.render(<App />);
