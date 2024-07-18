import { Suspense } from 'react';
import AppBar from '../components/AppBar/AppBar';

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <main>
        <Suspense fallback={null}>{children}</Suspense>
      </main>
    </div>
  );
};

export default Layout;
