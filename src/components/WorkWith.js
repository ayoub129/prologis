import WorkWithItem from "./WorkWithItem";

const WorkWith = () => {
  const data = [
    {
      id: 1,
      Title: "Customers",
      text: "Partnerships built at the local level are the key to helping us craft the custom solutions your business needs to be more efficient.",
      link: "",
    },
    {
      id: 2,
      Title: "Brokers",
      text: "Relationships with real estate brokers that help bring success to their clients.",
      link: "",
    },
    {
      id: 3,
      Title: "Property owners",
      text: "We don't just build; we buy, too. We're always looking for property and buildings to purchase.",
      link: "",
    },
    {
      id: 4,
      Title: "Communities",
      text: "Initiatives that build stronger neighborhoods and public spaces to better the places we work and live.",
      link: "",
    },
    {
      id: 5,
      Title: "Municipalities",
      text: "Economic growth and job creation that improve community health and infrastructure.",
      link: "",
    },
    {
      id: 6,
      Title: "Investors",
      text: "A superior investor experience in high-barrier, high-growth markets.",
      link: "",
    },
    {
      id: 7,
      Title: "Start-ups",
      text: "Smart investments that accelerate growth and bring innovation to market.",
      link: "",
    },
    {
      id: 8,
      Title: "Employees",
      text: "Our strong, values-based culture embraces success and failure since both lead to growth and innovation.",
      link: "",
    },
  ];
  return (
    <div className="bg-base-200 text-center py-12">
      <h3 className="text-green-700 font-bold tracking-wider mb-5">
        WE WORK WITH
      </h3>
      <div className="grid grid-cols-2 gap-6 w-11/12 mx-auto">
        {data.map((d) => (
          <WorkWithItem
            key={d.id}
            Title={d.Title}
            text={d.text}
            link={d.link}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkWith;
