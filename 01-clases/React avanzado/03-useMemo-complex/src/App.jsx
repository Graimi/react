import './App.css';
import CodePost from './components/CodePost';

const posts = [
  {
    slug: "html-desde-0",
    date: "Fri Oct 06 2023 10:45:00 GMT+0200 (Central European Summer Time)",
    data: "Lorem ipsum"
  },
  {
    slug: "css-desde-0",
    date: "Thu Feb 17 2022 18:15:00 GMT+0100 (Central European Standard Time)",
    data: "Lorem ipsum"
  },
  {
    slug: "javascript-desde-0",
    date: "Tue Aug 23 2022 13:21:00 GMT+0200 (Central European Summer Time)",
    data: "Lorem ipsum"
  },
  {
    slug: "react-desde-0",
    date: "Tue Aug 29 2022 13:21:00 GMT+0200 (Central European Summer Time)",
    data: "Lorem ipsum"
  },
  {
    slug: "node-desde-0",
    date: "Tue Feb 12 2022 13:20:00 GMT+0200 (Central European Summer Time)",
    data: "Lorem ipsum"
  }
]

function App() {

  return (
    <div className="App">
      <CodePost posts={posts}/>
    </div>
  );
}

export default App;
