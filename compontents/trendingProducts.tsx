import React from 'react'

export default function TrendingProducts() {
  return (
    <div>
          <section className="py-2">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="bootstrap-tabs product-tabs">
            <div className="tabs-header d-flex justify-content-between border-bottom my-5">
              <h3>Trending Products</h3>
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    href="#"
                    className="nav-link text-uppercase fs-6 active"
                    id="nav-all-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-all"
                  >
                    All
                  </a>
                  <a
                    href="#"
                    className="nav-link text-uppercase fs-6"
                    id="nav-fruits-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-fruits"
                  >
                    Fruits &amp; Veges
                  </a>
                  <a
                    href="#"
                    className="nav-link text-uppercase fs-6"
                    id="nav-juices-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-juices"
                  >
                    Juices
                  </a>
                </div>
              </nav>
            </div>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-all"
                role="tabpanel"
                aria-labelledby="nav-all-tab"
              >
                <div className="product-grid row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                  <div className="col">
                    <div className="product-item">
                      <span className="badge bg-success position-absolute m-3">
                        -30%
                      </span>
                      <figure>
                        <a href="index.html" title="Product Title">
                          <img
                            src="images/thumb-bananas.png"
                            className="tab-image"
                          />
                        </a>
                      </figure>
                      <h3>Sunstar Fresh Melon Juice</h3>
                      <span className="qty">1 Unit</span>
                      <div className="d-flex  justify-content-between align-items-center">
                        <span className="price">$18.00</span>
                        <a
                          href="https://api.whatsapp.com/send?phone=+919895443058&text=Hii"
                          className="float"
                          target="_blank"
                        >
                          <img
                            src="images/whatsapp.png"
                            height={40}
                            className="tab-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-item">
                      <span className="badge bg-success position-absolute m-3">
                        -30%
                      </span>
                      <figure>
                        <a href="index.html" title="Product Title">
                          <img
                            src="images/thumb-biscuits.png"
                            className="tab-image"
                          />
                        </a>
                      </figure>
                      <h3>Sunstar Fresh Melon Juice</h3>
                      <span className="qty">1 Unit</span>
                      <div className="d-flex  justify-content-between align-items-center">
                        <span className="price">$18.00</span>
                        <a
                          href="https://api.whatsapp.com/send?phone=+919895443058&text=Hii"
                          className="float"
                          target="_blank"
                        >
                          <img
                            src="images/whatsapp.png"
                            height={40}
                            className="tab-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-item">
                      <figure>
                        <a href="index.html" title="Product Title">
                          <img
                            src="images/thumb-cucumber.png"
                            className="tab-image"
                          />
                        </a>
                      </figure>
                      <h3>Sunstar Fresh Melon Juice</h3>
                      <span className="qty">1 Unit</span>
                      <div className="d-flex  justify-content-between align-items-center">
                        <span className="price">$18.00</span>
                        <a
                          href="https://api.whatsapp.com/send?phone=+919895443058&text=Hii"
                          className="float"
                          target="_blank"
                        >
                          <img
                            src="images/whatsapp.png"
                            height={40}
                            className="tab-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-item">
                      <figure>
                        <a href="index.html" title="Product Title">
                          <img
                            src="images/thumb-milk.png"
                            className="tab-image"
                          />
                        </a>
                      </figure>
                      <h3>Sunstar Fresh Melon Juice</h3>
                      <span className="qty">1 Unit</span>
                      <div className="d-flex  justify-content-between align-items-center">
                        <span className="price">$18.00</span>
                        <a
                          href="https://api.whatsapp.com/send?phone=+919895443058&text=Hii"
                          className="float"
                          target="_blank"
                        >
                          <img
                            src="images/whatsapp.png"
                            height={40}
                            className="tab-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-item">
                      <figure>
                        <a href="index.html" title="Product Title">
                          <img
                            src="images/thumb-bananas.png"
                            className="tab-image"
                          />
                        </a>
                      </figure>
                      <h3>Sunstar Fresh Melon Juice</h3>
                      <span className="qty">1 Unit</span>
                      <div className="d-flex  justify-content-between align-items-center">
                        <span className="price">$18.00</span>
                        <a
                          href="https://api.whatsapp.com/send?phone=+919895443058&text=Hii"
                          className="float"
                          target="_blank"
                        >
                          <img
                            src="images/whatsapp.png"
                            height={40}
                            className="tab-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-item">
                      <figure>
                        <a href="index.html" title="Product Title">
                          <img
                            src="images/thumb-biscuits.png"
                            className="tab-image"
                          />
                        </a>
                      </figure>
                      <h3>Sunstar Fresh Melon Juice</h3>
                      <span className="qty">1 Unit</span>
                      <div className="d-flex  justify-content-between align-items-center">
                        <span className="price">$18.00</span>
                        <a
                          href="https://api.whatsapp.com/send?phone=+919895443058&text=Hii"
                          className="float"
                          target="_blank"
                        >
                          <img
                            src="images/whatsapp.png"
                            height={40}
                            className="tab-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-item">
                      <figure>
                        <a href="index.html" title="Product Title">
                          <img
                            src="images/thumb-cucumber.png"
                            className="tab-image"
                          />
                        </a>
                      </figure>
                      <h3>Sunstar Fresh Melon Juice</h3>
                      <span className="qty">1 Unit</span>
                      <div className="d-flex  justify-content-between align-items-center">
                        <span className="price">$18.00</span>
                        <a
                          href="https://api.whatsapp.com/send?phone=+919895443058&text=Hii"
                          className="float"
                          target="_blank"
                        >
                          <img
                            src="images/whatsapp.png"
                            height={40}
                            className="tab-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-item">
                      <figure>
                        <a href="index.html" title="Product Title">
                          <img
                            src="images/thumb-milk.png"
                            className="tab-image"
                          />
                        </a>
                      </figure>
                      <h3>Sunstar Fresh Melon Juice</h3>
                      <span className="qty">1 Unit</span>
                      <div className="d-flex  justify-content-between align-items-center">
                        <span className="price">$18.00</span>
                        <a
                          href="https://api.whatsapp.com/send?phone=+919895443058&text=Hii"
                          className="float"
                          target="_blank"
                        >
                          <img
                            src="images/whatsapp.png"
                            height={40}
                            className="tab-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-item">
                      <figure>
                        <a href="index.html" title="Product Title">
                          <img
                            src="images/thumb-bananas.png"
                            className="tab-image"
                          />
                        </a>
                      </figure>
                      <h3>Sunstar Fresh Melon Juice</h3>
                      <span className="qty">1 Unit</span>
                      <div className="d-flex  justify-content-between align-items-center">
                        <span className="price">$18.00</span>
                        <a
                          href="https://api.whatsapp.com/send?phone=+919895443058&text=Hii"
                          className="float"
                          target="_blank"
                        >
                          <img
                            src="images/whatsapp.png"
                            height={40}
                            className="tab-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-item">
                      <figure>
                        <a href="index.html" title="Product Title">
                          <img
                            src="images/thumb-biscuits.png"
                            className="tab-image"
                          />
                        </a>
                      </figure>
                      <h3>Sunstar Fresh Melon Juice</h3>
                      <span className="qty">1 Unit</span>
                      <div className="d-flex  justify-content-between align-items-center">
                        <span className="price">$18.00</span>
                        <a
                          href="https://api.whatsapp.com/send?phone=+919895443058&text=Hii"
                          className="float"
                          target="_blank"
                        >
                          <img
                            src="images/whatsapp.png"
                            height={40}
                            className="tab-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* / product-grid */}
              </div>
              <div
                className="tab-pane fade"
                id="nav-fruits"
                role="tabpanel"
                aria-labelledby="nav-fruits-tab"
              >
                <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                  <div className="col">
                    <div className="product-item">
                      <span className="badge bg-success position-absolute m-3">
                        -30%
                      </span>
                      <figure>
                        <a href="index.html" title="Product Title">
                          <img
                            src="images/thumb-cucumber.png"
                            className="tab-image"
                          />
                        </a>
                      </figure>
                      <h3>Sunstar Fresh Melon Juice</h3>
                      <span className="qty">1 Unit</span>
                      <div className="d-flex  justify-content-between align-items-center">
                        <span className="price">$18.00</span>
                        <a
                          href="https://api.whatsapp.com/send?phone=+919895443058&text=Hii"
                          className="float"
                          target="_blank"
                        >
                          <img
                            src="images/whatsapp.png"
                            height={40}
                            className="tab-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-item">
                      <span className="badge bg-success position-absolute m-3">
                        -30%
                      </span>
                      <figure>
                        <a href="index.html" title="Product Title">
                          <img
                            src="images/thumb-milk.png"
                            className="tab-image"
                          />
                        </a>
                      </figure>
                      <h3>Sunstar Fresh Melon Juice</h3>
                      <span className="qty">1 Unit</span>
                      <div className="d-flex  justify-content-between align-items-center">
                        <span className="price">$18.00</span>
                        <a
                          href="https://api.whatsapp.com/send?phone=+919895443058&text=Hii"
                          className="float"
                          target="_blank"
                        >
                          <img
                            src="images/whatsapp.png"
                            height={40}
                            className="tab-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-item">
                      <span className="badge bg-success position-absolute m-3">
                        -30%
                      </span>
                      <figure>
                        <a href="index.html" title="Product Title">
                          <img
                            src="images/thumb-orange-juice.png"
                            className="tab-image"
                          />
                        </a>
                      </figure>
                      <h3>Sunstar Fresh Melon Juice</h3>
                      <span className="qty">1 Unit</span>
                      <div className="d-flex  justify-content-between align-items-center">
                        <span className="price">$18.00</span>
                        <a
                          href="https://api.whatsapp.com/send?phone=+919895443058&text=Hii"
                          className="float"
                          target="_blank"
                        >
                          <img
                            src="images/whatsapp.png"
                            height={40}
                            className="tab-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-item">
                      <figure>
                        <a href="index.html" title="Product Title">
                          <img
                            src="images/thumb-raspberries.png"
                            className="tab-image"
                          />
                        </a>
                      </figure>
                      <h3>Sunstar Fresh Melon Juice</h3>
                      <span className="qty">1 Unit</span>
                      <div className="d-flex  justify-content-between align-items-center">
                        <span className="price">$18.00</span>
                        <a
                          href="https://api.whatsapp.com/send?phone=+919895443058&text=Hii"
                          className="float"
                          target="_blank"
                        >
                          <img
                            src="images/whatsapp.png"
                            height={40}
                            className="tab-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-item">
                      <figure>
                        <a href="index.html" title="Product Title">
                          <img
                            src="images/thumb-bananas.png"
                            className="tab-image"
                          />
                        </a>
                      </figure>
                      <h3>Sunstar Fresh Melon Juice</h3>
                      <span className="qty">1 Unit</span>
                      <div className="d-flex  justify-content-between align-items-center">
                        <span className="price">$18.00</span>
                        <a
                          href="https://api.whatsapp.com/send?phone=+919895443058&text=Hii"
                          className="float"
                          target="_blank"
                        >
                          <img
                            src="images/whatsapp.png"
                            height={40}
                            className="tab-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-item">
                      <figure>
                        <a href="index.html" title="Product Title">
                          <img
                            src="images/thumb-bananas.png"
                            className="tab-image"
                          />
                        </a>
                      </figure>
                      <h3>Sunstar Fresh Melon Juice</h3>
                      <span className="qty">1 Unit</span>
                      <div className="d-flex  justify-content-between align-items-center">
                        <span className="price">$18.00</span>
                        <a
                          href="https://api.whatsapp.com/send?phone=+919895443058&text=Hii"
                          className="float"
                          target="_blank"
                        >
                          <img
                            src="images/whatsapp.png"
                            height={40}
                            className="tab-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* / product-grid */}
              </div>
              <div
                className="tab-pane fade"
                id="nav-juices"
                role="tabpanel"
                aria-labelledby="nav-juices-tab"
              >
                <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                  <div className="col">
                    <div className="product-item">
                      <figure>
                        <a href="index.html" title="Product Title">
                          <img
                            src="images/thumb-cucumber.png"
                            className="tab-image"
                          />
                        </a>
                      </figure>
                      <h3>Sunstar Fresh Melon Juice</h3>
                      <span className="qty">1 Unit</span>
                      <div className="d-flex  justify-content-between align-items-center">
                        <span className="price">$18.00</span>
                        <a
                          href="https://api.whatsapp.com/send?phone=+919895443058&text=Hii"
                          className="float"
                          target="_blank"
                        >
                          <img
                            src="images/whatsapp.png"
                            height={40}
                            className="tab-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-item">
                      <figure>
                        <a href="index.html" title="Product Title">
                          <img
                            src="images/thumb-milk.png"
                            className="tab-image"
                          />
                        </a>
                      </figure>
                      <h3>Sunstar Fresh Melon Juice</h3>
                      <span className="qty">1 Unit</span>
                      <div className="d-flex  justify-content-between align-items-center">
                        <span className="price">$18.00</span>
                        <a
                          href="https://api.whatsapp.com/send?phone=+919895443058&text=Hii"
                          className="float"
                          target="_blank"
                        >
                          <img
                            src="images/whatsapp.png"
                            height={40}
                            className="tab-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-item">
                      <figure>
                        <a href="index.html" title="Product Title">
                          <img
                            src="images/thumb-tomatoes.png"
                            className="tab-image"
                          />
                        </a>
                      </figure>
                      <h3>Sunstar Fresh Melon Juice</h3>
                      <span className="qty">1 Unit</span>
                      <div className="d-flex  justify-content-between align-items-center">
                        <span className="price">$18.00</span>
                        <a
                          href="https://api.whatsapp.com/send?phone=+919895443058&text=Hii"
                          className="float"
                          target="_blank"
                        >
                          <img
                            src="images/whatsapp.png"
                            height={40}
                            className="tab-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-item">
                      <figure>
                        <a href="index.html" title="Product Title">
                          <img
                            src="images/thumb-tomatoketchup.png"
                            className="tab-image"
                          />
                        </a>
                      </figure>
                      <h3>Sunstar Fresh Melon Juice</h3>
                      <span className="qty">1 Unit</span>
                      <div className="d-flex  justify-content-between align-items-center">
                        <span className="price">$18.00</span>
                        <a
                          href="https://api.whatsapp.com/send?phone=+919895443058&text=Hii"
                          className="float"
                          target="_blank"
                        >
                          <img
                            src="images/whatsapp.png"
                            height={40}
                            className="tab-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-item">
                      <figure>
                        <a href="index.html" title="Product Title">
                          <img
                            src="images/thumb-bananas.png"
                            className="tab-image"
                          />
                        </a>
                      </figure>
                      <h3>Sunstar Fresh Melon Juice</h3>
                      <span className="qty">1 Unit</span>
                      <div className="d-flex  justify-content-between align-items-center">
                        <span className="price">$18.00</span>
                        <a
                          href="https://api.whatsapp.com/send?phone=+919895443058&text=Hii"
                          className="float"
                          target="_blank"
                        >
                          <img
                            src="images/whatsapp.png"
                            height={40}
                            className="tab-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product-item">
                      <figure>
                        <a href="index.html" title="Product Title">
                          <img
                            src="images/thumb-bananas.png"
                            className="tab-image"
                          />
                        </a>
                      </figure>
                      <h3>Sunstar Fresh Melon Juice</h3>
                      <span className="qty">1 Unit</span>
                      <div className="d-flex  justify-content-between align-items-center">
                        <span className="price">$18.00</span>
                        <a
                          href="https://api.whatsapp.com/send?phone=+919895443058&text=Hii"
                          className="float"
                          target="_blank"
                        >
                          <img
                            src="images/whatsapp.png"
                            height={40}
                            className="tab-image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* / product-grid */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
