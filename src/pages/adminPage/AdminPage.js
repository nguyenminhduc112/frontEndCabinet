
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { adminRoutes } from './routes';

import DefaultLayout from './layouts/DefaultLayout';

function AdminPage() {
    return (
        <Router>
            <div className="wrapper">
                <Routes>
                    {adminRoutes.map((route, index) => {
                        const Page = route.component;
                        const Layout = DefaultLayout;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
                {/* <Home /> */}
            </div>
        </Router>
    );
}

export default AdminPage;