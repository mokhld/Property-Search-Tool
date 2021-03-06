const Header = () => {
  return (
    <div className="header_container h-100 w-100">
      <div className="page_container position-relative h-100">
        <div className="container-fluid">
          <div className="row">
            <h3 className="mb-0 text-start text-md-center">
              Property Search Tool
            </h3>

            {/* LOGO */}
            <div className="logo_container">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="m0 0h100v100h-100z" fill="#ffdb43" />
                <g fill="#fff">
                  <path
                    d="m53.3 28.7h3.5v16.6h-3.5z"
                    transform="matrix(.70705741 -.70715614 .70715614 .70705741 -10.027095 49.764842)"
                  />
                  <path
                    d="m65.8 28.7h3.5v16.6h-3.5z"
                    transform="matrix(.70709444 -.70711912 .70711912 .70709444 -6.362415 58.616151)"
                  />
                  <path d="m39.6 32.4-2.5-2.5-11.8 11.7 2.5 2.5 9.3-9.3 9.2 9.3 2.6-2.4z" />
                </g>
                <path
                  d="m22 64.5h-2.4v-14.4h2.4zm18-9.4-4.6 4.8h-.6l-4.6-4.8v9.4h-2.2v-14.4h.7l6.6 6.7 6.6-6.7h.6v14.4h-2.5zm20.4 0-4.6 4.8h-.6l-4.6-4.8v9.4h-2.4v-14.4h.8l6.6 6.7 6.6-6.7h.6v14.4h-2.4zm7.3 2.2c0-4.2 2.9-7.5 7.5-7.5 4.7 0 7.6 3.3 7.6 7.5s-2.9 7.5-7.6 7.5c-4.6 0-7.5-3.3-7.5-7.5zm12.7 0c0-3-2-5.3-5.1-5.3-3 0-5.1 2.3-5.1 5.3s2 5.2 5.1 5.2c3 0 5.1-2.2 5.1-5.2z"
                  fill="#000001"
                />
              </svg>
            </div>
            {/* LOGO */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
