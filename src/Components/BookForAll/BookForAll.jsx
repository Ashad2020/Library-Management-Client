export default function BookForAll() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 my-12 mx-4 gap-4">
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
