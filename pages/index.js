import Head from "next/head";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
// import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { redirect } from "next/dist/server/api-utils";

function HomePage() {
  const [token, setToken] = useState();
  useEffect(() => setToken(Cookies.get("token")), []);

  // const subscriptionCreate = async (event) => {
  //   event.preventDefault();
  //   // console.log("click function working");
  //   try {
  //     const price_id = process.env.PRICE_ID;

  //     const apiUrl = process.env.API_URL;

  //     // const { data, errors } = await fetch(apiUrl + "create-checkout-session", {
  //     const data = await fetch(apiUrl + "create-checkout-session", {
  //       body: JSON.stringify({
  //         price_id: price_id,
  //       }),
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         Accept: "application/json",
  //         "Content-type": "application/json",
  //       },
  //       // "Access-Control-Allow-Origin": "*",
  //       method: "POST",
  //     });

  //     // console.log(data.ok);

  //     // if (errors || !data) {
  //     //   // console.log(data);
  //     //   console.log(data);
  //     //   return { notFound: data };
  //     // }

  //     if (data.status === 200) {
  //       console.log(data);
  //       // window.location.replace(data.url);
  //     }
  //   } catch (errors) {
  //     // if (err) {
  //     // }
  //     console.log(errors);

  //     // return { notFound: true };
  //   }
  // };

  // Handles the submit event on form submit.

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = process.env.API_URL;

    const data = {
      price_id: process.env.PRICE_ID,
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = `${apiUrl}create-checkout-session`;
    console.log(endpoint);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();
    // console.log(response.status);
    if (response.status == 200) {
      // console.log(result);
      window.location.replace(result.url);
    } else if (response.status == 403) {
      console.log(result.error);
    }

    // const result = await response.json();
    // result.status(200).json({ result });

    // console.log("sss", result.status);

    // window.location.replace(result.url);
    // alert(`Is this your full name: ${result.data}`);
  };

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Welcome to Next.js!</title>
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="#">Burzt Dashboard!</a>
            {/* <h1>{process.env.API_BASE_URL}</h1> */}
          </h1>
          {!token ? (
            <div className="container text-center">
              <a
                href="https://slack.com/openid/connect/authorize?scope=openid%20email%20profile&response_type=code&redirect_uri=https%3A%2F%2F2b12-206-84-188-37.in.ngrok.io%2Fslack%2Foauth_redirect&client_id=3608320528308.4328768473665"
                className={styles.button}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.svg}
                  viewBox="0 0 122.8 122.8"
                >
                  <path
                    d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z"
                    fill="#E01E5A"
                  ></path>
                  <path
                    d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z"
                    fill="#36C5F0"
                  ></path>
                  <path
                    d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z"
                    fill="#2EB67D"
                  ></path>
                  <path
                    d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z"
                    fill="#ECB22E"
                  ></path>
                </svg>
                Sign in with Slack
              </a>
            </div>
          ) : (
            <>
              <div className="container">
                <div className="row mb-3 text-center">
                  <div className="col-md-8 offset-md-2">
                    <div className="row">
                      <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                          <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Basic</h4>
                          </div>
                          <div className="card-body">
                            <h1 className="card-title pricing-card-title">
                              $5
                              <small className="text-muted fw-light">/mo</small>
                            </h1>
                            <ul className="list-unstyled mt-3 mb-4">
                              <li>10 users included</li>
                              <li>2 GB of storage</li>
                              <li>Email support</li>
                              <li>Help center access</li>
                            </ul>
                            <button
                              type="button"
                              className="w-100 btn btn-lg btn-outline-primary"
                              onClick={handleSubmit}
                            >
                              Get started
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                          <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Pro</h4>
                          </div>
                          <div className="card-body">
                            <h1 className="card-title pricing-card-title">
                              $15
                              <small className="text-muted fw-light">/mo</small>
                            </h1>
                            <ul className="list-unstyled mt-3 mb-4">
                              <li>20 users included</li>
                              <li>10 GB of storage</li>
                              <li>Priority email support</li>
                              <li>Help center access</li>
                            </ul>
                            <button
                              type="button"
                              className="w-100 btn btn-lg btn-primary"
                              onClick={handleSubmit}
                            >
                              Get started
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  {/* <div className="col">
                  <div className="card mb-4 rounded-3 shadow-sm border-primary">
                    <div className="card-header py-3 text-white bg-primary border-primary">
                      <h4 className="my-0 fw-normal">Enterprise</h4>
                    </div>
                    <div className="card-body">
                      <h1 className="card-title pricing-card-title">
                        $29<small className="text-muted fw-light">/mo</small>
                      </h1>
                      <ul className="list-unstyled mt-3 mb-4">
                        <li>30 users included</li>
                        <li>15 GB of storage</li>
                        <li>Phone and email support</li>
                        <li>Help center access</li>
                      </ul>
                      <button
                        type="button"
                        className="w-100 btn btn-lg btn-primary"
                      >
                        Contact us
                      </button>
                    </div>
                  </div>
                </div> */}
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
}

export default HomePage;
