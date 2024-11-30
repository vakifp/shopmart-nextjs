import React from 'react'

function Header() {
  return (
    <div>
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
    </div>
  )
}

export default Header