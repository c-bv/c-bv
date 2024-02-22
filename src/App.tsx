import { Layout } from '@components/layout';
import { Blog, Contact, Home, NotFound } from '@pages';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default App;
