const Ratings = ({ data, submit, select, button }) => {
  const header = data.header;
  return (
    <>
      <main className="from-backgroundTop to-backgroundBottom flex flex-col gap-6 rounded-2xl bg-gradient-to-b p-6 md:h-fit md:w-96 md:max-w-screen-md">
        <div className="w-fit rounded-full bg-darkBlue p-3">
          <img className="h-4 w-4" src={header.icon} />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-white">{header.h1}</h1>
          <p className="text-lightGrey">{header.p}</p>
        </div>
        <form
          className="flex flex-col items-center gap-6"
          onSubmit={submit}
          noValidate
        >
          <ul className="flex w-full justify-between gap-1">
            {data.ratings.map((i, index) => (
              <li key={index}>
                <button
                  className={`${
                    button === i.number
                      ? "bg-lightGrey text-white"
                      : "bg-darkBlue"
                  } rounded-full px-4 py-2 text-center leading-6 text-lightGrey transition duration-300 ease-in-out hover:bg-orange hover:text-white`}
                  onClick={() => select(i.number)}
                  type={header.buttonType}
                >
                  {i.number}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="w-full rounded-full bg-orange p-2 uppercase text-white transition duration-300 ease-in-out hover:bg-white hover:text-orange"
            type="submit"
          >
            {header.button}
          </button>
        </form>
      </main>
    </>
  );
};

export default Ratings;
