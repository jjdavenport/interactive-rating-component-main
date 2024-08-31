const Selected = ({ data, selected }) => {
  const feedback = data.feedback;
  return (
    <>
      <section>
        <img src={feedback.icon} />
        <h2>
          {feedback.h2} <span>{selected}</span> <span>{feedback.span}</span>
        </h2>
        <h3>{feedback.h3}</h3>
        <p>{feedback.p}</p>
      </section>
    </>
  );
};

export default Selected;
