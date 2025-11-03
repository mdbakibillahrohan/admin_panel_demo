import { Routes, Route, Link } from "react-router";

const ProductPage = ()=>{
    
    return <>
    <h2>This is product page</h2>
    <Link to="/product/abc"><button>abc</button></Link>
    <Link to="/product/id"><button>id</button></Link>
    <Routes>
        <Route path="/abc" element={<h4>This is abc page</h4>} />
        <Route path="/id" element={<h4>This is id page</h4>} />
    </Routes>
    </>
}

export default ProductPage;