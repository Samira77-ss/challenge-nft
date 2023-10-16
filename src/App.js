import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="nft">
          <img
            src="data:image/jpeg;base64,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"
            alt="NFT"
          />

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
      </div>
      <footer>
        This page was coded by Samira Seyfi
        <a
          href="https://github.com/Samira77-ss/challenge-nft1"
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
  );
}
