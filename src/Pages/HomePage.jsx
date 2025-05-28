function HomePage() {
  return (

<div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://s3-alpha.figma.com/hub/file/3761412223/de92a481-23c7-4814-950b-bf7fb6c38cf5-cover.png)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-base-content">Delicious Food at Your Fingertips 🥗</h1>
      <p className="mb-5 text-warning">  Explore our menu packed with mouth-watering meals and tasty treats. Fresh, fast, and full of flavor!
        
       </p>
      <button className="btn btn-warning">Get Started</button>
    </div>
  </div>
</div>
);
}

export default HomePage;
