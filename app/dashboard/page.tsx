import React from 'react'

export default function dashboard() {
  return (
    <div>

<>
  <title>FoodMart - Free eCommerce Grocery Store HTML Website Template</title>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="format-detection" content="telephone=no" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="author" content="" />
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
  />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
    crossOrigin="anonymous"
  />
  <link rel="stylesheet" type="text/css" href="css/vendor.css" />
  <link rel="stylesheet" type="text/css" href="style.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
    rel="stylesheet"
  />
  {/* <div className="preloader-wrapper">
    <div className="preloader"></div>
  </div> */}
  <header>
    <div className="container-fluid">
      <div className="row py-2">
        <div className="col-10 col-lg-3 text-center text-sm-start  align-items-center d-flex  justify-content-start">
          <div className="main-logo">
            <a href="index.html">
              <img src="images/logo.png" alt="logo" className="img-fluid" />
            </a>
          </div>
        </div>
        <div className="col-2 col-lg-6">
          <div className="d-flex  justify-content-center align-items-center">
            <nav className="main-menu d-flex navbar navbar-expand-lg">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header justify-content-end">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
                    <li className="nav-item active">
                      <a href="#women" className="nav-link">
                        Women
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a href="#men" className="nav-link">
                        Men
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#kids" className="nav-link">
                        Kids
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#accessories" className="nav-link">
                        Accessories
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        role="button"
                        id="pages"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Pages
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="pages">
                        <li>
                          <a href="index.html" className="dropdown-item">
                            About Us{" "}
                          </a>
                        </li>
                        <li>
                          <a href="index.html" className="dropdown-item">
                            Shop{" "}
                          </a>
                        </li>
                        <li>
                          <a href="index.html" className="dropdown-item">
                            Single Product{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="col-sm-8 col-lg-3 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
          <div className="support-box text-end d-none d-xl-block">
            <span className="fs-6 text-muted">For Support?</span>
            <h5 className="mb-0">+980-34984089</h5>
          </div>
        </div>
      </div>
    </div>
  </header>
  <section
    className="py-3"
    style={{
      backgroundImage: 'url("images/background-pattern.jpg")',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}
  >
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="banner-ad large bg-info block-1">
            <div className="swiper main-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="row banner-content p-5 m-auto">
                    <div className="content-wrapper col-md-8">
                      <div className="categories my-3">100% natural</div>
                      <h3 className="display-4">
                        Fresh Smoothie &amp; Summer Juice
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Dignissim massa diam elementum.
                      </p>
                      <a
                        href="#"
                        className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 px-4 py-3 mt-3"
                      >
                        Shop Now
                      </a>
                    </div>
                    <div className="img-wrapper col-md-4">
                      <img
                        src="images/product-thumb-1.png"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="row banner-content p-5 m-auto">
                    <div className="content-wrapper col-md-7">
                      <div className="categories mb-3 pb-3">100% natural</div>
                      <h3 className="banner-title">
                        Fresh Smoothie &amp; Summer Juice
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Dignissim massa diam elementum.
                      </p>
                      <a
                        href="#"
                        className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                      >
                        Shop Collection
                      </a>
                    </div>
                    <div className="img-wrapper col-md-5">
                      <img
                        src="images/product-thumb-1.png"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="row banner-content p-5 m-auto">
                    <div className="content-wrapper col-md-7">
                      <div className="categories mb-3 pb-3">100% natural</div>
                      <h3 className="banner-title">Heinz Tomato Ketchup</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Dignissim massa diam elementum.
                      </p>
                      <a
                        href="#"
                        className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                      >
                        Shop Collection
                      </a>
                    </div>
                    <div className="img-wrapper col-md-5">
                      <img
                        src="images/product-thumb-2.png"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
          {/* / Banner Blocks */}
        </div>
      </div>
    </div>
  </section>
  <section id="latest-blog" className="py-5">
    <div className="container-fluid">
      <div className="row">
        <div className="section-header d-flex align-items-center justify-content-between my-5">
          <h2 className="section-title">Our Recent Blog</h2>
          <div className="btn-wrap align-right">
            <a href="#" className="d-flex align-items-center nav-link">
              Read All Articles{" "}
              <svg width={24} height={24}>
                <use xlinkHref="#arrow-right" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <article className="post-item card border-0 shadow-sm p-3">
            <div className="image-holder zoom-effect">
              <a href="#">
                <img
                  src="images/post-thumb-1.jpg"
                  alt="post"
                  className="card-img-top"
                />
              </a>
            </div>
            <div className="card-body">
              <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                <div className="meta-date">
                  <svg width={16} height={16}>
                    <use xlinkHref="#calendar" />
                  </svg>
                  22 Aug 2021
                </div>
                <div className="meta-categories">
                  <svg width={16} height={16}>
                    <use xlinkHref="#category" />
                  </svg>
                  tips &amp; tricks
                </div>
              </div>
              <div className="post-header">
                <h3 className="post-title">
                  <a href="#" className="text-decoration-none">
                    Top 10 casual look ideas to dress up your kids
                  </a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet
                  eleifend viverra enim tincidunt donec quam. A in arcu,
                  hendrerit neque dolor morbi...
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className="col-md-4">
          <article className="post-item card border-0 shadow-sm p-3">
            <div className="image-holder zoom-effect">
              <a href="#">
                <img
                  src="images/post-thumb-2.jpg"
                  alt="post"
                  className="card-img-top"
                />
              </a>
            </div>
            <div className="card-body">
              <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                <div className="meta-date">
                  <svg width={16} height={16}>
                    <use xlinkHref="#calendar" />
                  </svg>
                  25 Aug 2021
                </div>
                <div className="meta-categories">
                  <svg width={16} height={16}>
                    <use xlinkHref="#category" />
                  </svg>
                  trending
                </div>
              </div>
              <div className="post-header">
                <h3 className="post-title">
                  <a href="#" className="text-decoration-none">
                    Latest trends of wearing street wears supremely
                  </a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet
                  eleifend viverra enim tincidunt donec quam. A in arcu,
                  hendrerit neque dolor morbi...
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className="col-md-4">
          <article className="post-item card border-0 shadow-sm p-3">
            <div className="image-holder zoom-effect">
              <a href="#">
                <img
                  src="images/post-thumb-3.jpg"
                  alt="post"
                  className="card-img-top"
                />
              </a>
            </div>
            <div className="card-body">
              <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                <div className="meta-date">
                  <svg width={16} height={16}>
                    <use xlinkHref="#calendar" />
                  </svg>
                  28 Aug 2021
                </div>
                <div className="meta-categories">
                  <svg width={16} height={16}>
                    <use xlinkHref="#category" />
                  </svg>
                  inspiration
                </div>
              </div>
              <div className="post-header">
                <h3 className="post-title">
                  <a href="#" className="text-decoration-none">
                    10 Different Types of comfortable{" "}
                  </a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet
                  eleifend viverra enim tincidunt donec quam. A in arcu,
                  hendrerit neque dolor morbi...
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
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
  <section className="py-5">
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-5">
        <div className="col">
          <div className="card mb-3 border-0">
            <div className="row">
              <div className="col-md-2 text-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M21.5 15a3 3 0 0 0-1.9-2.78l1.87-7a1 1 0 0 0-.18-.87A1 1 0 0 0 20.5 4H6.8l-.33-1.26A1 1 0 0 0 5.5 2h-2v2h1.23l2.48 9.26a1 1 0 0 0 1 .74H18.5a1 1 0 0 1 0 2h-13a1 1 0 0 0 0 2h1.18a3 3 0 1 0 5.64 0h2.36a3 3 0 1 0 5.82 1a2.94 2.94 0 0 0-.4-1.47A3 3 0 0 0 21.5 15Zm-3.91-3H9L7.34 6H19.2ZM9.5 20a1 1 0 1 1 1-1a1 1 0 0 1-1 1Zm8 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1Z"
                  />
                </svg>
              </div>
              <div className="col-md-10">
                <div className="card-body p-0">
                  <h5>Free delivery</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipi elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3 border-0">
            <div className="row">
              <div className="col-md-2 text-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.63 3.65a1 1 0 0 0-.84-.2a8 8 0 0 1-6.22-1.27a1 1 0 0 0-1.14 0a8 8 0 0 1-6.22 1.27a1 1 0 0 0-.84.2a1 1 0 0 0-.37.78v7.45a9 9 0 0 0 3.77 7.33l3.65 2.6a1 1 0 0 0 1.16 0l3.65-2.6A9 9 0 0 0 20 11.88V4.43a1 1 0 0 0-.37-.78ZM18 11.88a7 7 0 0 1-2.93 5.7L12 19.77l-3.07-2.19A7 7 0 0 1 6 11.88v-6.3a10 10 0 0 0 6-1.39a10 10 0 0 0 6 1.39Zm-4.46-2.29l-2.69 2.7l-.89-.9a1 1 0 0 0-1.42 1.42l1.6 1.6a1 1 0 0 0 1.42 0L15 11a1 1 0 0 0-1.42-1.42Z"
                  />
                </svg>
              </div>
              <div className="col-md-10">
                <div className="card-body p-0">
                  <h5>100% secure payment</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipi elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3 border-0">
            <div className="row">
              <div className="col-md-2 text-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M22 5H2a1 1 0 0 0-1 1v4a3 3 0 0 0 2 2.82V22a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9.18A3 3 0 0 0 23 10V6a1 1 0 0 0-1-1Zm-7 2h2v3a1 1 0 0 1-2 0Zm-4 0h2v3a1 1 0 0 1-2 0ZM7 7h2v3a1 1 0 0 1-2 0Zm-3 4a1 1 0 0 1-1-1V7h2v3a1 1 0 0 1-1 1Zm10 10h-4v-2a2 2 0 0 1 4 0Zm5 0h-3v-2a4 4 0 0 0-8 0v2H5v-8.18a3.17 3.17 0 0 0 1-.6a3 3 0 0 0 4 0a3 3 0 0 0 4 0a3 3 0 0 0 4 0a3.17 3.17 0 0 0 1 .6Zm2-11a1 1 0 0 1-2 0V7h2ZM4.3 3H20a1 1 0 0 0 0-2H4.3a1 1 0 0 0 0 2Z"
                  />
                </svg>
              </div>
              <div className="col-md-10">
                <div className="card-body p-0">
                  <h5>Quality guarantee</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipi elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3 border-0">
            <div className="row">
              <div className="col-md-2 text-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 8.35a3.07 3.07 0 0 0-3.54.53a3 3 0 0 0 0 4.24L11.29 16a1 1 0 0 0 1.42 0l2.83-2.83a3 3 0 0 0 0-4.24A3.07 3.07 0 0 0 12 8.35Zm2.12 3.36L12 13.83l-2.12-2.12a1 1 0 0 1 0-1.42a1 1 0 0 1 1.41 0a1 1 0 0 0 1.42 0a1 1 0 0 1 1.41 0a1 1 0 0 1 0 1.42ZM12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20Zm0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20Z"
                  />
                </svg>
              </div>
              <div className="col-md-10">
                <div className="card-body p-0">
                  <h5>guaranteed savings</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipi elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3 border-0">
            <div className="row">
              <div className="col-md-2 text-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18 7h-.35A3.45 3.45 0 0 0 18 5.5a3.49 3.49 0 0 0-6-2.44A3.49 3.49 0 0 0 6 5.5A3.45 3.45 0 0 0 6.35 7H6a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h1v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-6h1a1 1 0 0 0 1-1v-2a3 3 0 0 0-3-3Zm-7 13H8a1 1 0 0 1-1-1v-6h4Zm0-9H5v-1a1 1 0 0 1 1-1h5Zm0-4H9.5A1.5 1.5 0 1 1 11 5.5Zm2-1.5A1.5 1.5 0 1 1 14.5 7H13ZM17 19a1 1 0 0 1-1 1h-3v-7h4Zm2-8h-6V9h5a1 1 0 0 1 1 1Z"
                  />
                </svg>
              </div>
              <div className="col-md-10">
                <div className="card-body p-0">
                  <h5>Daily offers</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipi elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="py-5" style={{ backgroundColor: "#fffefc" }}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="footer-menu">
            <img src="images/logo.png" alt="logo" />
            <div className="social-links mt-5">
              <ul className="d-flex list-unstyled gap-2">
                <li>
                  <a href="#" className="btn btn-outline-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73Z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="btn btn-outline-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M22.991 3.95a1 1 0 0 0-1.51-.86a7.48 7.48 0 0 1-1.874.794a5.152 5.152 0 0 0-3.374-1.242a5.232 5.232 0 0 0-5.223 5.063a11.032 11.032 0 0 1-6.814-3.924a1.012 1.012 0 0 0-.857-.365a.999.999 0 0 0-.785.5a5.276 5.276 0 0 0-.242 4.769l-.002.001a1.041 1.041 0 0 0-.496.89a3.042 3.042 0 0 0 .027.439a5.185 5.185 0 0 0 1.568 3.312a.998.998 0 0 0-.066.77a5.204 5.204 0 0 0 2.362 2.922a7.465 7.465 0 0 1-3.59.448A1 1 0 0 0 1.45 19.3a12.942 12.942 0 0 0 7.01 2.061a12.788 12.788 0 0 0 12.465-9.363a12.822 12.822 0 0 0 .535-3.646l-.001-.2a5.77 5.77 0 0 0 1.532-4.202Zm-3.306 3.212a.995.995 0 0 0-.234.702c.01.165.009.331.009.488a10.824 10.824 0 0 1-.454 3.08a10.685 10.685 0 0 1-10.546 7.93a10.938 10.938 0 0 1-2.55-.301a9.48 9.48 0 0 0 2.942-1.564a1 1 0 0 0-.602-1.786a3.208 3.208 0 0 1-2.214-.935q.224-.042.445-.105a1 1 0 0 0-.08-1.943a3.198 3.198 0 0 1-2.25-1.726a5.3 5.3 0 0 0 .545.046a1.02 1.02 0 0 0 .984-.696a1 1 0 0 0-.4-1.137a3.196 3.196 0 0 1-1.425-2.673c0-.066.002-.133.006-.198a13.014 13.014 0 0 0 8.21 3.48a1.02 1.02 0 0 0 .817-.36a1 1 0 0 0 .206-.867a3.157 3.157 0 0 1-.087-.729a3.23 3.23 0 0 1 3.226-3.226a3.184 3.184 0 0 1 2.345 1.02a.993.993 0 0 0 .921.298a9.27 9.27 0 0 0 1.212-.322a6.681 6.681 0 0 1-1.026 1.524Z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="btn btn-outline-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M23 9.71a8.5 8.5 0 0 0-.91-4.13a2.92 2.92 0 0 0-1.72-1A78.36 78.36 0 0 0 12 4.27a78.45 78.45 0 0 0-8.34.3a2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 0 0 0 6.48a9.55 9.55 0 0 0 .3 2a3.14 3.14 0 0 0 .71 1.36a2.86 2.86 0 0 0 1.49.78a45.18 45.18 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 0 0 1.53-.78a2.49 2.49 0 0 0 .61-1a10.58 10.58 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54ZM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08Z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="btn btn-outline-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="btn btn-outline-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M1.04 17.52q.1-.16.32-.02a21.308 21.308 0 0 0 10.88 2.9a21.524 21.524 0 0 0 7.74-1.46q.1-.04.29-.12t.27-.12a.356.356 0 0 1 .47.12q.17.24-.11.44q-.36.26-.92.6a14.99 14.99 0 0 1-3.84 1.58A16.175 16.175 0 0 1 12 22a16.017 16.017 0 0 1-5.9-1.09a16.246 16.246 0 0 1-4.98-3.07a.273.273 0 0 1-.12-.2a.215.215 0 0 1 .04-.12Zm6.02-5.7a4.036 4.036 0 0 1 .68-2.36A4.197 4.197 0 0 1 9.6 7.98a10.063 10.063 0 0 1 2.66-.66q.54-.06 1.76-.16v-.34a3.562 3.562 0 0 0-.28-1.72a1.5 1.5 0 0 0-1.32-.6h-.16a2.189 2.189 0 0 0-1.14.42a1.64 1.64 0 0 0-.62 1a.508.508 0 0 1-.4.46L7.8 6.1q-.34-.08-.34-.36a.587.587 0 0 1 .02-.14a3.834 3.834 0 0 1 1.67-2.64A6.268 6.268 0 0 1 12.26 2h.5a5.054 5.054 0 0 1 3.56 1.18a3.81 3.81 0 0 1 .37.43a3.875 3.875 0 0 1 .27.41a2.098 2.098 0 0 1 .18.52q.08.34.12.47a2.856 2.856 0 0 1 .06.56q.02.43.02.51v4.84a2.868 2.868 0 0 0 .15.95a2.475 2.475 0 0 0 .29.62q.14.19.46.61a.599.599 0 0 1 .12.32a.346.346 0 0 1-.16.28q-1.66 1.44-1.8 1.56a.557.557 0 0 1-.58.04q-.28-.24-.49-.46t-.3-.32a4.466 4.466 0 0 1-.29-.39q-.2-.29-.28-.39a4.91 4.91 0 0 1-2.2 1.52a6.038 6.038 0 0 1-1.68.2a3.505 3.505 0 0 1-2.53-.95a3.553 3.553 0 0 1-.99-2.69Zm3.44-.4a1.895 1.895 0 0 0 .39 1.25a1.294 1.294 0 0 0 1.05.47a1.022 1.022 0 0 0 .17-.02a1.022 1.022 0 0 1 .15-.02a2.033 2.033 0 0 0 1.3-1.08a3.13 3.13 0 0 0 .33-.83a3.8 3.8 0 0 0 .12-.73q.01-.28.01-.92v-.5a7.287 7.287 0 0 0-1.76.16a2.144 2.144 0 0 0-1.76 2.22Zm8.4 6.44a.626.626 0 0 1 .12-.16a3.14 3.14 0 0 1 .96-.46a6.52 6.52 0 0 1 1.48-.22a1.195 1.195 0 0 1 .38.02q.9.08 1.08.3a.655.655 0 0 1 .08.36v.14a4.56 4.56 0 0 1-.38 1.65a3.84 3.84 0 0 1-1.06 1.53a.302.302 0 0 1-.18.08a.177.177 0 0 1-.08-.02q-.12-.06-.06-.22a7.632 7.632 0 0 0 .74-2.42a.513.513 0 0 0-.08-.32q-.2-.24-1.12-.24q-.34 0-.8.04q-.5.06-.92.12a.232.232 0 0 1-.16-.04a.065.065 0 0 1-.02-.08a.153.153 0 0 1 .02-.06Z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-6">
          <div className="footer-menu">
            <h5 className="widget-title">Ultras</h5>
            <ul className="menu-list list-unstyled">
              <li className="menu-item">
                <a href="#" className="nav-link">
                  About us
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="nav-link">
                  Conditions{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 col-sm-6">
          <div className="footer-menu">
            <h5 className="widget-title">Customer Service</h5>
            <ul className="menu-list list-unstyled">
              <li className="menu-item">
                <a href="#" className="nav-link">
                  FAQ
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 col-sm-6">
          <div className="footer-menu">
            <h5 className="widget-title">Customer Service</h5>
            <ul className="menu-list list-unstyled">
              <li className="menu-item">
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="nav-link">
                  Privacy Policy
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="nav-link">
                  Returns &amp; Refunds
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="footer-menu">
            <h5 className="widget-title">Subscribe Us</h5>
            <p>
              Subscribe to our newsletter to get updates about our grand offers.
            </p>
            <form className="d-flex mt-3 gap-0" role="newsletter">
              <input
                className="form-control rounded-start rounded-0 bg-light"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
              />
              <button
                className="btn btn-dark rounded-end rounded-0"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div id="footer-bottom">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 copyright text-center">
          <p>© 2023 vakif. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</>


    </div>
  )
}
