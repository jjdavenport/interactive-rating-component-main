const Selected = ({ data, selected }) => {
  const feedback = data.feedback;
  return (
    <>
      <article className="from-backgroundTop to-backgroundBottom flex flex-col items-center gap-6 rounded-2xl bg-gradient-to-b p-6 text-center md:h-fit md:w-96 md:max-w-screen-md">
        <img src={feedback.icon} />
        <h3 className="rounded-full bg-darkBlue px-4 py-2 text-orange">
          {feedback.h2} <span>{selected}</span> <span>{feedback.span}</span>
        </h3>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-white">{feedback.h3}</h2>
          <p className="text-lightGrey">{feedback.p}</p>
        </div>
      </article>
    </>
  );
};

export default Selected;
