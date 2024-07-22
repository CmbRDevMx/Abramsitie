import './viewcasestudy.css'
const ViewCaseStudy = ({ caseStudy }) => {
  return (
    <div className="pt-6 p-5 md:p-6 2xl:p-8 2xl:min-w-[700px] lg:max-w-[1024px] 2xl:max-w-[1200px] max-h-[80dvh] overflow-auto mx-auto view-case">
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
        {/* <div className="flex items-center justify-center pt-4">
          <img
            src={caseStudy?.img}
            alt=""
            className="rounded object-cover max-w-60 md:max-w-60 lg:max-w-72 2xl:max-w-80"
          />
        </div> */}
      </div>
    </div>
  );
};

export default ViewCaseStudy;
