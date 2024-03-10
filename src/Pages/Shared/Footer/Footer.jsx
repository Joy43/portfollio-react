import logo from "../../../assets/logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <aside>
          <img src={logo} className="w-24" alt="logo" />
          <p>
            shahsultan islam joy
            <hr className="border-spacing-1" />
            <br />
            <hr className="border-spacing-1" />
            ssjoy43@gmail.com
            <hr className="border-spacing-1" />
            <br />
            Mirpur Dhaka-2100
          </p>
        </aside>
        <nav>
          <header className="footer-title">Contact with</header>
          <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/your-github-profile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                {/* Replace the path with the desired GitHub icon */}
                <path d="M12 0c-6.628 0-12 5.372-12 12s5.372 12 12 12 12-5.372 12-12-5.372-12-12-12zm3.682 18.276c-.214.05-.294-.098-.294-.214 0-.1.05-.22.162-.284.603-.31 1.305-.92 1.305-2.164 0-1.568-.662-2.694-1.89-3.234.15-.31.441-1.528-.098-3.181-.587-.26-1.818 1.144-3.294 1.31-.05-.214-.262-1.02-.548-1.938-1.838.398-2.666-.885-2.846-1.688-.1-.26-.492-1.187-.884-2.058.214-.364.882-1.018 1.627-1.017.713.001 1.295.774 1.441 1.11.774 1.355 2.012 1.08 2.51.82.15-.548.662-.922 1.205-.902.051.35.228.667.441.866-1.498.164-2.44.794-2.986 1.417-.338-.26-1.55-.924-2.623-1.102-.04.327-.089.648-.148.961.454-.164 1.299-.436 2.013-.026-.492.987-.307 2.248.35 2.548-.186.212-.365.543-.42.924-.011.108-.051.232-.101.366-.1.252-.365.537-.549.648.01.039.021.077.031.115 1.063.395 1.861 1.445 1.861 2.692 0 1.655-.002 2.986-.002 3.394 0 .126-.098.273-.355.226z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/your-linkedin-profile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                {/* Replace the path with the desired LinkedIn icon */}
                <path d="M3 3h18v18h-18v-18zm4.75 15h-2v-8.918l-1-.082c-.593 0-.916-.43-.916-.892v-3.008h3.916v3.124h-1.917v5.659h1.917v.966h-.033c.253-.475 1.878-4.001 4.918-4.001 1.198 0 2.173.417 2.926 1.235.716.772 1.083 1.794 1.083 3.063v4.737h-2v-4.309c0-1.197-.25-2.192-.75-2.983-.519-.834-1.258-1.25-2.216-1.25-1.547 0-2.563 1.108-2.563 3.391v4.151zm11.433-9.912c.877 0 1.587-.71 1.587-1.587 0-.877-.71-1.588-1.587-1.588-.876 0-1.586.71-1.586 1.588 0 .877.71 1.587 1.586 1.587zm-1.4 6.912h2v-8.917h-2v8.917z" />
              </svg>
            </a>
            <a href="https://youtube.com/your-youtube-channel">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                {/* Replace the path with the desired YouTube icon */}
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>

          {/* ------- */}
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
