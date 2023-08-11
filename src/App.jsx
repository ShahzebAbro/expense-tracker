import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import Hero from "../assets/hero.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import "./App.css";
import PreLoader from "./PreLoader";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function () {
    AOS.init({ duration: 2000 });
    // window.onload(() => setIsLoading(true));
  }, []);

  const Loader = () => {
    useEffect(() => {
      window.onload = () => {
        const preloader = document.querySelector(".preloader");
        preloader.remove();
      };
    });
    return <PreLoader />;
    // which have your preloader html and having class is `.preloader`
  };
  return (
    <div>
      {isLoading ? (
        <PreLoader />
      ) : (
        <>
          <Loader />
          <nav className="nav">
            <img src={Logo} alt="Website Logo" />
            <p> Menu </p>
          </nav>

          <header className="header">
            <div className="header-content">
              <h1>
                Say goodbye to{" "}
                <Typewriter
                  wrapperClassName="typewriter"
                  cursorClassName="type"
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Hello World!")
                      .callFunction(() => {
                        console.log("String typed out!");
                      })
                      .pauseFor(2500)
                      .deleteAll()
                      .callFunction(() => {
                        console.log("All strings were deleted");
                      })
                      .start();
                  }}
                  options={{
                    strings: [
                      "transfer fees.",
                      "long hold times.",
                      "annual fees.",
                      "paper forms.",
                      "ATM fees.",
                      "waiting in line.",
                      "SMS fees.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p>
                Sign up now for your debit Mastercard and digital wallet. Spend,
                send and withdraw cash without fees.
              </p>
              <button>Signup Now</button>
            </div>
            <img src={Hero} alt="Card Image" data-aos="fade-down" />
          </header>

          <section className="explanation">
            <h1 data-aos="fade-up">Sada</h1>
            <h2 data-aos="fade-up" data-aos-delay="100">
              [sa•da] <i>adjective</i>
            </h2>
            <p className="urdu" data-aos-delay="400" data-aos="fade-right">
              <i>Urdu:</i> <strong>simple</strong>
            </p>
            <p className="arabic" data-aos-delay="500" data-aos="fade-right">
              <i>Arabic:</i> <strong>Happiness</strong>
            </p>
            <p className="english" data-aos-delay="600" data-aos="fade-right">
              <i>English:</i> the most <strong>simple</strong> way to manage
              money
            </p>
          </section>

          <section className="perspective">
            <img
              data-aos="fade-right"
              src="assets/man-couch.png"
              alt="Man relaxing"
            />
            <div data-aos="fade-left" className="perspective-content">
              <h2 className="perspective-heading">
                We have a different perspective about fees
              </h2>
              <p className="perspective-text">
                SadaPay doesn’t have any costly physical branches like a
                traditional bank, which lets us pass those savings onto our
                customers.{" "}
              </p>
              <ul className="perspective-list">
                <li className="perspective-item">
                  <img className="tick" src="assets/tick.png" />
                  <p>No annual fees or minimum deposit</p>
                </li>
                <li className="perspective-item">
                  <img className="tick" src="assets/tick.png" />
                  <p>
                    Free, instant transfers to any bank or wallet in Pakistan
                  </p>
                </li>
                <li className="perspective-item">
                  <img className="tick" src="assets/tick.png" />
                  <p>
                    Free cash withdrawals at any ATM in Pakistan (3x per month)
                  </p>
                </li>
              </ul>
            </div>
          </section>

          <section className="security">
            <div className="security_content">
              <h2>Security you can trust</h2>
              <p>
                We safeguard your funds and use advanced system to protect your
                digital wallet.
              </p>
            </div>

            <div className="security_features" data-aos="fade-up">
              <div className="security_feature">
                <img src="assets/dollar.png" alt="safe image" />
                <h3>Serious Protection</h3>
                <p>
                  We protect your funds and sensitive personal data with
                  encryption in-flight and at-rest.
                </p>
              </div>
              <div className="security_feature">
                <img src="assets/biometric.png" alt="safe image" />
                <h3>Biometric Access</h3>
                <p>
                  Use fingerprint or Face ID for quick and easy access to your
                  account information.
                </p>
              </div>
              <div className="security_feature">
                <img src="assets/security.png" alt="safe image" />
                <h3>AI Fraud Detection</h3>
                <p>
                  We've implemented best-in-class fraud detection systems to
                  keep your money safe.
                </p>
              </div>
            </div>
          </section>

          {/* <section className="complexity_section">
        <div className="complexity_container">
          <h2 className="complexity_heading">
            Replacing complexity with simplicity
          </h2>

          <div className="complexities">
            <div className="complexity">
              <img src="assets/registration.png" alt="registration" />
              <h3>2-Minute Registration</h3>
              <p>
                Sign up from your phone with just a selfie, a photo of your
                CNIC, and some basic information. No paperwork.
              </p>
            </div>
            <div className="complexity">
              <img src="assets/payment.png" alt="registration" />
              <h3>Simple Payments</h3>
              <p>
                Sending and receiving payments has never been this easy. Now you
                can move your money within seconds!
              </p>
            </div>
            <div className="complexity">
              <img src="assets/transperancy.png" alt="registration" />
              <h3>100% Transparency</h3>
              <p>
                We promise to always be upfront with our customers. No unfair
                rates, no hidden fees. Ever.
              </p>
            </div>
          </div>
        </div>
      </section> */}
          <section className="connecting">
            <div className="connecting_content">
              <h2>Connecting you to the world</h2>

              <ul>
                <li>
                  <img src="assets/updates.png" alt="shopping box" />
                  <div>
                    <h3>Shop Globally</h3>
                    <p>
                      The SadaPay Mastercard is accepted at 30 million merchants
                      around the world, online and in-stores.
                    </p>
                  </div>
                </li>
                <li>
                  <img src="assets/updates.png" alt="shopping box" />
                  <div>
                    <h3>Real-time Updates</h3>
                    <p>
                      TYou’ll get instant transaction alerts on your phone
                      whenever there’s activity on your account.
                    </p>
                  </div>
                </li>
                <li>
                  <img src="assets/exchange.png" alt="shopping box" />
                  <div>
                    <h3>Lowest Foreign Exchange Rate</h3>
                    <p>
                      Enjoy the best foreign exchange rates available nationwide
                      for non-PKR card purchases.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <img
              data-aos="fade-right"
              data-aos-delay="300"
              src="assets/man-money.png"
              alt="man money"
            />
          </section>

          <section className="app">
            <img src="assets/control.png" alt="Phone" data-aos="fade-right" />
            <div className="app_content">
              <h2 className="app_content-heading">
                Complete control of your money
              </h2>
              <ul className="app_features">
                <li
                  className="app_feature"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <img src="assets/in-app.png" alt="in-app" />
                  <div className="app_feature-content">
                    <h3>In-app Card Controls</h3>
                    <p>
                      Misplaced your card? Freeze it. Want to shop online?
                      Activate international payments with one tap.
                    </p>
                  </div>
                </li>
                <li
                  className="app_feature"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <img src="assets/numberless.png" alt="in-app" />
                  <div className="app_feature-content">
                    <h3>Numberless Card</h3>
                    <p>
                      To reduce fraud risk, your card number is only visible
                      securely in your app. It’s not printed on the plastic! 😁
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="international">
            <h2>
              Accept international transfers from 45 countries around the world
              🌍
            </h2>
            <p>
              Receive money from friends, family or clients using all the top
              services & platforms.
            </p>
            <img
              data-aos="fade-right"
              src="assets/platforms.png"
              alt="platforms"
            />
          </section>

          <section className="contact">
            <div className="upper">
              <img src="assets/chat-icon.png" alt="chat-icon" />
              <h3>Here for you, any time</h3>
              <p>Message us directly from the app for help.</p>
              <img data-aos="fade-right" src="assets/chat.png" alt="chat" />
            </div>
            <div className="lower">
              <img
                src="assets/arrow-plane.png"
                alt="arrow icon"
                data-aos="fade-up"
              />
              <div className="content" data-aos="fade-down">
                <h3>Ready to join?</h3>
                <h2>Sign up today</h2>
              </div>
              <button>Signup Now</button>
            </div>
          </section>
          <footer>Made By Cashless &copy;</footer>
        </>
      )}
    </div>
  );
}

export default App;
