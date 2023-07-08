const Report = () => {
  return (
    <div className="bg-green-900">
      <div className="w-11/12 md:flex md:justify-between md:items-center md:w-10/12 lg:w-8/12 mx-auto mt-28">
        <div>
          <h2 className="uppercase pt-10 pb-6 lg:text-3xl md:text-2xl text-2xl font-bold text-white tracking-wider">
            LATEST ANNUAL REPORT
          </h2>
          <h4 className="pb-10 lg:text-2xl md:text-xl text-xl font-bold text-white tracking-wider">
            For Fiscal Year Ending Dec 31, 2022
          </h4>
        </div>
        <div>
          <h2 className="uppercase pt-10 pb-6 lg:text-3xl md:text-2xl text-2xl font-bold text-white tracking-wider">
            SIGN UP FOR EMAIL ALERTS
          </h2>
          <h4 className="pb-10 lg:text-2xl md:text-xl text-xl font-bold text-white tracking-wider">
            Receive updates straight into your inbox.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Report;
