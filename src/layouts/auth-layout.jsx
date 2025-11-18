import { Route, Routes } from "react-router";

const AuthLayout = ()=>{
    return <>
    <Routes>
        <Route path="login" element={<>It's a practice page</>} />
    </Routes>
    </>
}
export default AuthLayout;