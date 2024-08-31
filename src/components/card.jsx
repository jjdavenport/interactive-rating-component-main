const Card = ({ data }) => {
  const header = data.header;
  return (
    <>
      <main>
        <img src={header.icon} />
        <h1>{header.h1}</h1>
        <p>{header.p}</p>
        <form noValidate>
          {data.ratings.map((i, index) => (
            <ul key={index}>
              <li>
                <button>{i.number}</button>
              </li>
            </ul>
          ))}
          <button>{header.button}</button>
        </form>
      </main>
    </>
  );
};

export default Card;
