import { Layout } from '@components/layout';
import { Home } from '@pages/home';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
            </Route>
            {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
    );
}

export default App;
