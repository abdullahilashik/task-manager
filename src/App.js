import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <div className="min-w-screen min-h-screen">
      <main className='container mx-auto border shadow rounded px-6 py-8 mt-8'>
        {/* header */}
        <Header />
        {/* content */}
        <Content />
        {/* footer */}
      </main>
    </div>
  );
}

export default App;
