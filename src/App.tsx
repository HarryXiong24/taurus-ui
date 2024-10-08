import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Menu, MenuItem } from './components';
import { sider } from './routes';
import Logo from './assets/logo.svg';
import '@/styles/index.scss';

const App = () => {
  const navigate = useNavigate();

  const findRoutePath = (selectedIndex: string) => {
    return sider.filter((item) => selectedIndex === String(item.id))[0];
  };

  useEffect(() => {
    navigate('/icon');
  }, [navigate]);

  return (
    <div className='app'>
      <header className='header'>
        <img src={Logo} className='icon' alt='logo' />
        <p className='title'>
          <span>X</span>bear <span>UI</span>
        </p>
      </header>

      <div className='container'>
        <div className='sider'>
          <Menu
            mode='vertical'
            onSelect={(selectedIndex: string) => {
              const route = findRoutePath(selectedIndex);
              navigate(route.path);
            }}
            style={{ width: '10rem', height: 'calc(100vh - 3rem)' }}
          >
            {sider.map((item) => {
              return (
                <MenuItem key={item.id} index={String(item.id)}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Menu>
        </div>
        <div className='content'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default App;
