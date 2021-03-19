import Typed from 'typed.js';
import { useState, useEffect } from 'react'
function App() {
  var options = {
    strings: ['Selamat ulang tahun Anindya Prasetyo Putri :)',
      'Semoga selalu diberkahi kesehatan, kesuksesan lahir batin ',
      'Semoga ke depannya dilancarkan terus',
      'Selalu dijaga 5 waktunya dan selalu take care and safe healthy',
      'Sampai jumpa di bulan April yaa :)'],
    typeSpeed: 80,
    backSpeed: 10
  };
  useEffect(() => {
    var typed = new Typed('#typedWord', options);
  })
  return (
    <>
      {/* <ReactFullpage
        pluginWrapper={pluginWrapper}
        scrollingSpeed={1000}
        scrollHorizontally={true}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <p>Section 1 (welcome to fullpage.js)</p>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button>
              </div>
              <div className="section">
                <p>Section 2</p>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}>
      </ReactFullpage> */}

      {/* WELCOME */}
      <section className="pt-6 pt-md-11 pb-8 pb-md-9">
        <div className="container-lg">
          <div className="row justify-content-center">
            <div className="col-md-12 col-xl-10 text-center">
              {/* Heading */}
              <h1 className="display-2 mb-4" id="typedWord">
              </h1>
            </div>
          </div>
          {/* <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 text-center">
              <p className="lead text-muted">
                Goodkit will make your product look modern and professional while saving you precious time.
              </p>
            </div>
          </div> */}
        </div>
      </section>
      {/* SHAPE */}
      <div className="position-relative">
        <div className="shape shape-fluid-x shape-bottom text-white pb-18">
          <div className="shape-img pb-9 pb-md-15">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M0 0h100v25H75L25 50H0z" fill="currentColor" /></svg>
          </div>
        </div>
      </div>

      {/* TASKS */}
      <section className="pt-10 pt-md-12 bg-dark">
        <div className="container-lg">
          <div className="row">
            <div className="col-12">
              {/* Decoration */}
              <div className="position-absolute top-center top-md-left text-warning mt-n8 ml-md-n8">
                <svg width={185} height={186} viewBox="0 0 185 186" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx={2} cy={2} r={2} fill="currentColor" /><circle cx={22} cy={2} r={2} fill="currentColor" /><circle cx={42} cy={2} r={2} fill="currentColor" /><circle cx={62} cy={2} r={2} fill="currentColor" /><circle cx={82} cy={2} r={2} fill="currentColor" /><circle cx={102} cy={2} r={2} fill="currentColor" /><circle cx={122} cy={2} r={2} fill="currentColor" /><circle cx={142} cy={2} r={2} fill="currentColor" /><circle cx={162} cy={2} r={2} fill="currentColor" /><circle cx={182} cy={2} r={2} fill="currentColor" /><circle cx={2} cy={22} r={2} fill="currentColor" /><circle cx={22} cy={22} r={2} fill="currentColor" /><circle cx={42} cy={22} r={2} fill="currentColor" /><circle cx={62} cy={22} r={2} fill="currentColor" /><circle cx={82} cy={22} r={2} fill="currentColor" /><circle cx={102} cy={22} r={2} fill="currentColor" /><circle cx={122} cy={22} r={2} fill="currentColor" /><circle cx={142} cy={22} r={2} fill="currentColor" /><circle cx={162} cy={22} r={2} fill="currentColor" /><circle cx={182} cy={22} r={2} fill="currentColor" /><circle cx={2} cy={42} r={2} fill="currentColor" /><circle cx={22} cy={42} r={2} fill="currentColor" /><circle cx={42} cy={42} r={2} fill="currentColor" /><circle cx={62} cy={42} r={2} fill="currentColor" /><circle cx={82} cy={42} r={2} fill="currentColor" /><circle cx={102} cy={42} r={2} fill="currentColor" /><circle cx={122} cy={42} r={2} fill="currentColor" /><circle cx={142} cy={42} r={2} fill="currentColor" /><circle cx={162} cy={42} r={2} fill="currentColor" /><circle cx={182} cy={42} r={2} fill="currentColor" /><circle cx={2} cy={62} r={2} fill="currentColor" /><circle cx={22} cy={62} r={2} fill="currentColor" /><circle cx={42} cy={62} r={2} fill="currentColor" /><circle cx={62} cy={62} r={2} fill="currentColor" /><circle cx={82} cy={62} r={2} fill="currentColor" /><circle cx={102} cy={62} r={2} fill="currentColor" /><circle cx={122} cy={62} r={2} fill="currentColor" /><circle cx={142} cy={62} r={2} fill="currentColor" /><circle cx={162} cy={62} r={2} fill="currentColor" /><circle cx={182} cy={62} r={2} fill="currentColor" /><circle cx={2} cy={82} r={2} fill="currentColor" /><circle cx={22} cy={82} r={2} fill="currentColor" /><circle cx={42} cy={82} r={2} fill="currentColor" /><circle cx={62} cy={82} r={2} fill="currentColor" /><circle cx={82} cy={82} r={2} fill="currentColor" /><circle cx={102} cy={82} r={2} fill="currentColor" /><circle cx={122} cy={82} r={2} fill="currentColor" /><circle cx={142} cy={82} r={2} fill="currentColor" /><circle cx={162} cy={82} r={2} fill="currentColor" /><circle cx={182} cy={82} r={2} fill="currentColor" /><circle cx={2} cy={102} r={2} fill="currentColor" /><circle cx={22} cy={102} r={2} fill="currentColor" /><circle cx={42} cy={102} r={2} fill="currentColor" /><circle cx={62} cy={102} r={2} fill="currentColor" /><circle cx={82} cy={102} r={2} fill="currentColor" /><circle cx={102} cy={102} r={2} fill="currentColor" /><circle cx={122} cy={102} r={2} fill="currentColor" /><circle cx={142} cy={102} r={2} fill="currentColor" /><circle cx={162} cy={102} r={2} fill="currentColor" /><circle cx={182} cy={102} r={2} fill="currentColor" /><circle cx={2} cy={122} r={2} fill="currentColor" /><circle cx={22} cy={122} r={2} fill="currentColor" /><circle cx={42} cy={122} r={2} fill="currentColor" /><circle cx={62} cy={122} r={2} fill="currentColor" /><circle cx={82} cy={122} r={2} fill="currentColor" /><circle cx={102} cy={122} r={2} fill="currentColor" /><circle cx={122} cy={122} r={2} fill="currentColor" /><circle cx={142} cy={122} r={2} fill="currentColor" /><circle cx={162} cy={122} r={2} fill="currentColor" /><circle cx={182} cy={122} r={2} fill="currentColor" /><circle cx={2} cy={142} r={2} fill="currentColor" /><circle cx={22} cy={142} r={2} fill="currentColor" /><circle cx={42} cy={142} r={2} fill="currentColor" /><circle cx={62} cy={142} r={2} fill="currentColor" /><circle cx={82} cy={142} r={2} fill="currentColor" /><circle cx={102} cy={142} r={2} fill="currentColor" /><circle cx={122} cy={142} r={2} fill="currentColor" /><circle cx={142} cy={142} r={2} fill="currentColor" /><circle cx={162} cy={142} r={2} fill="currentColor" /><circle cx={182} cy={142} r={2} fill="currentColor" /><circle cx={2} cy={162} r={2} fill="currentColor" /><circle cx={22} cy={162} r={2} fill="currentColor" /><circle cx={42} cy={162} r={2} fill="currentColor" /><circle cx={62} cy={162} r={2} fill="currentColor" /><circle cx={82} cy={162} r={2} fill="currentColor" /><circle cx={102} cy={162} r={2} fill="currentColor" /><circle cx={122} cy={162} r={2} fill="currentColor" /><circle cx={142} cy={162} r={2} fill="currentColor" /><circle cx={162} cy={162} r={2} fill="currentColor" /><circle cx={182} cy={162} r={2} fill="currentColor" /><circle cx={2} cy={182} r={2} fill="currentColor" /><circle cx={22} cy={182} r={2} fill="currentColor" /><circle cx={42} cy={182} r={2} fill="currentColor" /><circle cx={62} cy={182} r={2} fill="currentColor" /><circle cx={82} cy={182} r={2} fill="currentColor" /><circle cx={102} cy={182} r={2} fill="currentColor" /><circle cx={122} cy={182} r={2} fill="currentColor" /><circle cx={142} cy={182} r={2} fill="currentColor" /><circle cx={162} cy={182} r={2} fill="currentColor" /><circle cx={182} cy={182} r={2} fill="currentColor" /></svg>
              </div>
              {/* Stack */}
              <div className="card-stack">
                {/* Card */}
                <div className="card-stack-item mb-9">
                  <div className="card card-lg rounded overflow-hidden">
                    <div className="row no-gutters">
                      <div className="col-md order-md-1 d-flex h-full bg-primary">
                        {/* Image */}
                        <a href="./robo-advisor.html">
                          <img className="card-img-top" src={`${process.env.PUBLIC_URL}/img1.jpg`} alt="..." />
                          {/* <img className="card-img-top" src={`${process.env.PUBLIC_URL}/dist/assets/img/screenshots/ui-elements/landing-robo-investor.jpg`} alt="..." /> */}
                        </a>
                      </div>
                      <div className="col-md-5 order-md-0 d-flex align-items-center bg-white">
                        <div className="card-body text-center">
                          {/* Icon */}
                          <div className="icon text-primary-light mx-auto mb-4">
                            <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" /><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" fill="#335EEA" opacity=".3" /><path d="M18.5 11h-13A1.5 1.5 0 004 12.5v.5h4.586a1 1 0 01.707.293l1 1a2.414 2.414 0 003.414 0l1-1a1 1 0 01.707-.293H20v-.5a1.5 1.5 0 00-1.5-1.5zM5.5 6A1.5 1.5 0 004 7.5V8h16v-.5A1.5 1.5 0 0018.5 6h-13z" fill="#335EEA" /></g></svg>
                          </div>
                          {/* Heading */}
                          <h1 className="font-family-sans-serif mb-4 mt-auto">
                            Supervised Learning
                          </h1>
                          {/* Text */}
                          <p>
                            Aku banyak belajar dari kamu, tentang gimana jadi manusia yang berambisi, tapi tidak puas diri
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card */}
                <div className="card-stack-item mb-9">
                  <div className="card card-lg rounded overflow-hidden">
                    <div className="row no-gutters">
                      <div className="col-md order-md-1 d-flex align-items-center justify-center bg-primary">
                        {/* Image */}
                        <a href="./analytics-saas.html">
                          <img className="card-img-top" src={`${process.env.PUBLIC_URL}/img2.jpg`} alt="..." />
                          {/* <img className="card-img-top" src={`${process.env.PUBLIC_URL}/dist/assets/img/screenshots/ui-elements/landing-analytics.jpg`} alt="..." /> */}
                        </a>
                      </div>
                      <div className="col-md-5 order-md-0 d-flex align-items-center bg-white">
                        <div className="card-body text-center">
                          {/* Icon */}
                          <div className="icon text-primary-light mx-auto mb-4">
                            <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" /><path d="M4.002 12.2L13 14V4.062A8.001 8.001 0 0112 20a8 8 0 01-7.998-7.8z" fill="#335EEA" opacity=".3" /><path d="M3.06 10.012A8.001 8.001 0 0111 3v8.6l-7.94-1.588z" fill="#335EEA" /></g></svg>
                          </div>
                          {/* Heading */}
                          <h1 className="font-family-sans-serif mb-4 mt-auto">
                            Support System
                          </h1>
                          {/* Text */}
                          <p>
                            Dibalik ambisinya aku selama ini, ada dorongan yang kuat untuk bisa membahagiakan kamu nanti
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card */}
                <div className="card-stack-item mb-9">
                  <div className="card card-lg rounded overflow-hidden">
                    <div className="row no-gutters">
                      <div className="col-md order-md-1 d-flex align-items-end bg-primary">
                        {/* Image */}
                        <a href="./e-commerce-platform.html">
                          <img className="card-img-top" src={`${process.env.PUBLIC_URL}/img3.jpg`} alt="..." />
                          {/* <img className="card-img-top" src={`${process.env.PUBLIC_URL}/dist/assets/img/screenshots/ui-elements/landing-e-commerce.jpg`} alt="..." /> */}
                        </a>
                      </div>
                      <div className="col-md-5 order-md-0 d-flex align-items-center bg-white">
                        <div className="card-body text-center">
                          {/* Icon */}
                          <div className="icon text-primary-light mx-auto mb-4">
                            <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" /><path d="M18.145 11.844l-.698 4.185a1 1 0 01-1.165.82L4.913 14.78a1 1 0 01-.783-.709L2.306 7.685a1 1 0 01.961-1.275h13.726l.613-2.627a1.18 1.18 0 011.15-.912h2.064a1.18 1.18 0 110 2.36h-1.128l-1.547 6.613z" fill="#335EEA" opacity=".3" /><path d="M6.5 21a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="#335EEA" /></g></svg>
                          </div>
                          {/* Heading */}
                          <h1 className="font-family-sans-serif mb-4 mt-auto">
                            Rollback Mechanism
                          </h1>
                          {/* Text */}
                          <p>
                            Dari kamu, aku banyak belajar untuk terus berintrospeksi diri
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card */}
                <div className="card-stack-item mb-9">
                  <div className="card card-lg rounded overflow-hidden">
                    <div className="row no-gutters">
                      <div className="col-md order-md-1 d-flex align-items-end bg-primary">
                        {/* Image */}
                        <a href="./robo-advisor.html">
                          <img className="card-img-top" src={`${process.env.PUBLIC_URL}/img4.jpg`} alt="..." />
                          {/* <img className="card-img-top" src={`${process.env.PUBLIC_URL}/dist/assets/img/screenshots/ui-elements/landing-robo-investor.jpg`} alt="..." /> */}
                        </a>
                      </div>
                      <div className="col-md-5 order-md-0 d-flex align-items-center bg-white">
                        <div className="card-body text-center">
                          {/* Icon */}
                          <div className="icon text-primary-light mx-auto mb-4">
                            <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" /><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" fill="#335EEA" opacity=".3" /><path d="M18.5 11h-13A1.5 1.5 0 004 12.5v.5h4.586a1 1 0 01.707.293l1 1a2.414 2.414 0 003.414 0l1-1a1 1 0 01.707-.293H20v-.5a1.5 1.5 0 00-1.5-1.5zM5.5 6A1.5 1.5 0 004 7.5V8h16v-.5A1.5 1.5 0 0018.5 6h-13z" fill="#335EEA" /></g></svg>
                          </div>
                          {/* Heading */}
                          <h1 className="font-family-sans-serif mb-4 mt-auto">
                            Depth First Search
                          </h1>
                          {/* Text */}
                          <p>
                            Dari lubuk hati yang terdalam, izinkan aku mengucapkan terima kasih untuk hari-hari yang telah bersama dilewati
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card */}
                <div className="card-stack-item mb-9">
                  <div className="card card-lg rounded overflow-hidden">
                    <div className="row no-gutters">
                      <div className="col-md order-md-1 d-flex align-items-end bg-primary">
                        {/* Image */}
                        <a href="./robo-advisor.html">
                          <img className="card-img-top" src={`${process.env.PUBLIC_URL}/img5.jpg`} alt="..." />
                          {/* <img className="card-img-top" src={`${process.env.PUBLIC_URL}/dist/assets/img/screenshots/ui-elements/landing-robo-investor.jpg`} alt="..." /> */}
                        </a>
                      </div>
                      <div className="col-md-5 order-md-0 d-flex align-items-center bg-white">
                        <div className="card-body text-center">
                          {/* Icon */}
                          <div className="icon text-primary-light mx-auto mb-4">
                            <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" /><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" fill="#335EEA" opacity=".3" /><path d="M18.5 11h-13A1.5 1.5 0 004 12.5v.5h4.586a1 1 0 01.707.293l1 1a2.414 2.414 0 003.414 0l1-1a1 1 0 01.707-.293H20v-.5a1.5 1.5 0 00-1.5-1.5zM5.5 6A1.5 1.5 0 004 7.5V8h16v-.5A1.5 1.5 0 0018.5 6h-13z" fill="#335EEA" /></g></svg>
                          </div>
                          {/* Heading */}
                          <h1 className="font-family-sans-serif mb-4 mt-auto">
                            Procedural Programming
                          </h1>
                          {/* Text */}
                          <p>
                            Mari, kita bersama-sama melewati hari ke depan, sesuai jalan kita masing-masing, sampai ketika kita menjadi raja dan ratu sehari
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="footer py-8 pt-md-11 bg-dark border-multicolor">
        <div className="container-lg">
          <div className="row">
            <div className="col-12">
              {/* Divider */}
              <hr className="border-white-10 my-7" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              {/* Brand */}
              <h2 className="font-family-serif text-white mb-0">
                Sabtu 20 Maret 2021
        </h2>
            </div>
            <div className="col-auto">
              {/* Text */}
              <small className="text-gray-600">
                Simply, Made with ❤️ by Yuesth
        </small>
            </div>
          </div>
        </div>
      </footer>



    </>
  );
}

export default App;
