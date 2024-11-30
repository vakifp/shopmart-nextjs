import React from 'react'

export default function BannerSilder() {
  return (
    <div>

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
    </div>
  )
}
