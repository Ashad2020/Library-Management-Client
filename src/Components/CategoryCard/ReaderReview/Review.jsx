export default function Review() {
  return (
    <div className="bg-[#F2F2F2] dark:bg-[#1D232A] dark:text-slate-400 py-4 px-4">
      <h2 className="text-4xl font-bold text-center  py-8">Readers Review</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card  text-sm border-2">
          <div className="card-body">
            <div className="avatar flex justify-center">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://i.ibb.co/ZmJHMJB/guest2.jpg"
                  alt="guest2"
                  border="0"
                />
              </div>
            </div>
            <p>
              Wow! What a book! This is a stunning, page-turner about daring,
              courageous women made of inner steel who, against all odds,
              successfully spied on the Germans in World War I…until they were
              caught. This is a pressure-cooker of a novel that just builds and
              builds and builds until the explosive ending.
            </p>
          </div>
        </div>
        <div className="card text-sm border-2">
          <div className="card-body">
            <div className="avatar flex justify-center">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://i.ibb.co/BLCq1B4/guest8.jpg"
                  alt="guest8"
                  border="0"
                />
              </div>
            </div>
            <p>
              “Trust” by Hernan Diaz is a lot. “Books within books” test your
              abilities, and you must reread a lot. That does not mean it is not
              worth the work. You will feel more competent when you finish. The
              main character, Benjamin Rask, is wealthy and mysterious, earning
              a great deal on the market but remaining disdainful of excessive
              wealth.
            </p>
          </div>
        </div>
        <div className="card  text-sm border-2">
          <div className="card-body">
            <div className="avatar flex justify-center">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://i.ibb.co/rdPSLpn/guest6.jpg"
                  alt="guest6"
                  border="0"
                />
              </div>
            </div>
            <p>
              This was actually am extremely difficult book to get into after
              watching the movie. I think this is a wholesome story. The entire
              time you can feel yourself almost present as the author herself.
              She gave such good in depth description of the surroundings and I
              felt like I was actually in the book..
            </p>
          </div>
        </div>
        <div className="card  text-sm border-2">
          <div className="card-body">
            <div className="avatar flex justify-center">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://i.ibb.co/N9wWKHm/guest1.jpg"
                  alt="guest1"
                  border="0"
                />
              </div>
            </div>
            <p>
              There is so much about our everyday lives that we not only take
              for granted, but also rarely (or never?) even think about. How do
              the blueberries for your morning oatmeal get into your bowl? How
              does your cross-country flight take off and land safely? And what
              happens to your trash after its hauled away?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
