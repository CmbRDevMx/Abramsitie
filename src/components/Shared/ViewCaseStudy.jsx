const ViewCaseStudy = ({ caseStudy }) => {
  return (
    <div className="rounded-2xl pt-6 p-5 md:p-6 2xl:p-8 2xl:min-w-[700px] lg:max-w-[1024px] 2xl:max-w-[1200px] max-h-[80dvh] overflow-auto mx-auto">
      <h2 className="text-2xl text-center text-customGreen font-bold">
        {caseStudy?.title}
      </h2>
      <div className="pt-2">
        {caseStudy?.infos?.map((info) =>
          info?.lists ? (
            <div className="pt-2">
              <h2 className="text-xl underline font-medium">{info?.title}</h2>
              <ol className="list-inside list-decimal pl-4">
                {info?.lists?.map((list) => (
                  <li className="text-lg">
                    <span className="font-medium">{list?.title}</span>{" "}
                    {list?.text}
                  </li>
                ))}
              </ol>
            </div>
          ) : (
            <div className="pt-2">
              <h2 className="text-xl underline font-medium">{info?.title}</h2>
              <p className="text-lg">{info?.text}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ViewCaseStudy;
