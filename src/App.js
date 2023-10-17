import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="image-card">
            <img
              src="https://cool-cuchufli-f3cf11.netlify.app/images/image-equilibrium.jpg"
              alt="NFT"
            />
            <div class="view-image"></div>
          </div>

          <h1>Equilibrium #3429</h1>
          <p>Our Equilibrium collection promotes balance and calm.</p>
          <div className="row">
            <div className="col-6 eth">💎&nbsp;0.041 ETH</div>
            <div className="col-6 day">🕒&nbsp;3 days left</div>
          </div>
          <hr />
          <span className="avatar">
            <img
              src="https://pascall-nft-card.netlify.app/images/image-avatar.png"
              alt="avatar"
            />
          </span>
          <span className="creation">
            <span className="opacity">Creation of&nbsp;</span>{" "}
            <span className="name">Jules Wyvern</span>
          </span>
        </div>

        <footer>
          This page was coded by Samira Seyfi
          <a
            href="https://github.com/Samira77-ss/challenge-nft"
            target="_blank"
            alt="GithHub Profile"
            rel="noreferrer"
          >
            open-source-code on GitHub
          </a>
          , and hosted on
          <a
            href="https://subtle-cupcake-3c2898.netlify.app"
            alt="Netlify link"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
