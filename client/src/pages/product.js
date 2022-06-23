import ProductCard from "../components/ProductCard";


function Product(){
    return(
        <div className="container-fluid bg-black" style={{
            height: "88vh"
        }}>
            <div className="container pt-4">
                <h2 className="text-primary">Product</h2>
                <div className="row row-cols-5" style={{width: '100%'}}>
                        <ProductCard/>
                </div>
            </div>
        </div>
    )
}

export default Product;