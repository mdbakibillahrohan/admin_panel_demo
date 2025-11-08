import { Route, Routes } from "react-router";

const AuthLayout = ()=>{
    return <>
    <Routes>
        <Route path="login" element={<>It's a login page</>} />
    </Routes>
    </>
}
export default AuthLayout;