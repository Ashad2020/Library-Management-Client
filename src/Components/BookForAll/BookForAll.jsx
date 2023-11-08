export default function BookForAll() {
  return (
    // <div
    //   className="hero min-h-screen"
    //   style={{
    //     backgroundImage: "url(https://i.ibb.co/02p7Bvy/SASB-Picture-2.jpg)",
    //   }}
    // >
    //   <div className="hero-overlay bg-opacity-60"></div>
    //   <div className="hero-content text-center text-neutral-content">
    //     <div className="max-w-md">
    //       <h1 className="mb-5 text-5xl font-bold">
    //         Books for All: Protect the Freedom to Read
    //       </h1>
    //       <p className="mb-5">
    //         Stand with Public Library all year long to protect the freedom to
    //         read! Discover all the Library has to offer, including our Teen
    //         Banned Book Club, unlimited access to book club, our National Teen
    //         Writing Contest about the importance of reading freely, plus free
    //         programs and events, ways to get involved, and more for all ages.
    //       </p>
    //       <button className="btn btn-primary">Get Started</button>
    //     </div>
    //   </div>
    // </div>
    <div className="grid grid-cols-3 my-12 mx-4 gap-4">
      <div className="card border-2 p-4">
        <div className="flex items-center h-full px-2 gap-2 ">
          <div>
            <img
              src="https://i.ibb.co/xMKwNt6/read.png"
              alt="read"
              border="0"
              className="w-24"
            />
          </div>
          <div className="pl-2">
            <h2 className="card-title">Read Free Library Books Online</h2>
            <p className="small">
              Millions of books available through Controlled Digital Lending
            </p>
          </div>
        </div>
      </div>
      <div className="card border-2 p-4">
        <div className="flex items-center h-full px-2 gap-2 ">
          <div>
            <img
              className="w-24"
              src="https://i.ibb.co/myL2MSh/library-explorer.png"
              alt="library-explorer"
              border="0"
            />
          </div>
          <div className="pl-2">
            <h2 className="card-title">Read Free Library Books Online</h2>
            <p className="small">
              Millions of books available through Controlled Digital Lending
            </p>
          </div>
        </div>
      </div>
      <div className="card border-2 p-4">
        <div className="flex items-center h-full px-2 gap-2 ">
          <div>
            <img
              className="w-24"
              src="https://i.ibb.co/p0BrCm1/track.png"
              alt="track"
              border="0"
            />
          </div>
          <div className="pl-2">
            <h2 className="card-title">Read Free Library Books Online</h2>
            <p className="small">
              Millions of books available through Controlled Digital Lending
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
