const CustomerSays = () => {
  return (
    <div>
      <div className="bg-house flex flex-col relative py-20 items-center justify-center font-bold text-white bg-overlay">
        <h3 className="ml-10 text-4xl leading-12 w-6/12 text-center">
          IN OUR CUSTOMERS WORDS
        </h3>
        <div className="flex shadow top-12-rem left-5 flex-col bg-base-100 p-4 mt-12 w-11/12 mx-auto rounded absolute">
          <div className="customer-item ">
            <div className="flex items-center">
              <img
                src="assets/customer1.png"
                alt="customers"
                className="w-28 rounded-full"
              />
              <div className="text">
                <h3 className="text-green-700 ml-5">
                  ANDREW SMITH, GENERAL MANAGER, SENIOR VICE PRESIDENT, BIG BUS
                  TOURS
                </h3>
                <h5 className="font-normal text-green-700 ml-5 mt-1">
                  SAN FRANCISCO, CA
                </h5>
              </div>
            </div>
            <p className="text-sm text-black mt-4 font-light tracking-wide">
              The team at Prologis has worked with Big Bus through these
              challenging times. I could not ask for a better partner than the
              Prologis team – they have been ‘A-plus’ all the way.
            </p>
          </div>
          <div className="customer-item mt-12">
            <div className="flex items-center">
              <img
                src="assets/customer2.png"
                alt="customers"
                className="w-28 rounded-full"
              />
              <div className="text">
                <h3 className="text-green-700 ml-5">
                  MARK BRAGG, CORPORATE REAL ESTATE, THE HOME DEPOT
                </h3>
                <h5 className="font-normal text-green-700 ml-5 mt-1">
                  ATLANTA, GA
                </h5>
              </div>
            </div>
            <p className="text-sm text-black mt-4 font-light tracking-wide">
              Prologis is extremely customer-centric. They make us feel like we
              are the most important customer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSays;
