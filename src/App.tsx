import { Header } from '@/components/layout';
import headerData from '@/data/header.json';
import '@/styles/globals.css';

function App() {
  return (
    <div className="min-h-screen bg-ww-gray-50">
      <Header data={headerData} />
      
    </div>
  );
}

export default App;
