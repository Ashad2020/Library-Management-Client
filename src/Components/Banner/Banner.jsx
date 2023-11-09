export default function Banner() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/02p7Bvy/SASB-Picture-2.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 dark:bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-5xl font-bold">
              Books for All: Protect the Freedom to Read
            </h1>
            <p className="mb-5">
              Stand with Public Library all year long to protect the freedom to
              read! Discover all the Library has to offer, including our Teen
              Banned Book Club, unlimited access to book club, our National Teen
              Writing Contest about the importance of reading freely, plus free
              programs and events, ways to get involved, and more for all ages.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
