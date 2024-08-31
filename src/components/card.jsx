const Card = ({ data, submit, select, button }) => {
  const header = data.header;
  return (
    <>
      <main>
        <img src={header.icon} />
        <h1>{header.h1}</h1>
        <p>{header.p}</p>
        <form onSubmit={submit} noValidate>
          {data.ratings.map((i, index) => (
            <ul key={index}>
              <li>
                <button
                  className={`${button === i ? "bg-black" : "bg-white"}`}
                  onClick={() => select(i)}
                  type="button"
                >
                  {i.number}
                </button>
              </li>
            </ul>
          ))}
          <button type="submit">{header.button}</button>
        </form>
      </main>
    </>
  );
};

export default Card;
