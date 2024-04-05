import { lazy, Suspense } from "react";

//Home
const Home = lazy(() => import("./Home"));

function AppRoutes() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Home />
            </Suspense>
        </>
    );
}
export default AppRoutes;
