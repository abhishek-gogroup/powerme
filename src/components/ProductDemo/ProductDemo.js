import './ProductDemo.css'

function ProductDemo() {
    return (
        <section className="product-demo">
            <div className="product-demo__container">
                <div className="product-demo__image-conainer flex">
                    <div className="product-phone-image-holder">
                        <img src="https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/6088a1db62977b4ef5cdaf64_Apple%20iPhone%2011%20Pro%20Space%20Grey%201.png" loading="lazy" sizes="(max-width: 479px) 300px, 400px" srcSet="https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/6088a1db62977b4ef5cdaf64_Apple%2520iPhone%252011%2520Pro%2520Space%2520Grey%25201-p-500.png 500w, https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/6088a1db62977b4ef5cdaf64_Apple%20iPhone%2011%20Pro%20Space%20Grey%201.png 588w" alt="" className="product-phone-image" />
                        <div className="product-phone-content">
                            <img src="https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/60df02c543a86b85d83088dd_Strom.png" loading="lazy" sizes="(max-width: 479px) 246px, 327px" srcSet="https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/60df02c543a86b85d83088dd_Strom-p-500.png 500w, https://uploads-ssl.webflow.com/6088a1db62977b0a54cdaf23/60df02c543a86b85d83088dd_Strom.png 768w" alt="" className="product-phone-demo-image" />
                        </div>
                    </div>
                </div>

                <div class="product-demo__text-holder flex">
                    <div class="product-text-holder-1">
                        <h1 class="product-text _1">Nach</h1>
                    </div>
                    <div class="product-text-line">
                    </div>
                    <div class="product-text-holder-2" >
                        <h1 class="product-text _2">haltig</h1>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ProductDemo;