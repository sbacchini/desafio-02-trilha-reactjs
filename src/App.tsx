import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { GenreProvider } from './context/GenreContext';
import './styles/global.scss';



export function App() {
  
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
    <GenreProvider>
    <SideBar />
    <Content />
    </GenreProvider>
    </div>
  );
}