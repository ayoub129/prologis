const Blocks = () => {
  const data = [
    {
      id: 1,
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fugiat ipsam nemo non animi molestiae quod, quibusdam et a fugit natus quam perspiciatis! Soluta ea sint nemo quae facere rem!",
      title: "Development & Acquisitions",
      image: "development",
    },
    {
      id: 2,
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fugiat ipsam nemo non animi molestiae quod, quibusdam et a fugit natus quam perspiciatis! Soluta ea sint nemo quae facere rem!",
      title: "The Essentials Platform",
      image: "essentials-platform",
    },
    {
      id: 3,
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fugiat ipsam nemo non animi molestiae quod, quibusdam et a fugit natus quam perspiciatis! Soluta ea sint nemo quae facere rem!",
      title: "Real Estate Operations",
      image: "real-estate",
    },
    {
      id: 4,
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fugiat ipsam nemo non animi molestiae quod, quibusdam et a fugit natus quam perspiciatis! Soluta ea sint nemo quae facere rem!",
      title: "Strategic Capital",
      image: "strategic",
    },
  ];
  return (
    <div className="bg-base-200 w-full mt-20">
      <div className="w-11/12 mx-auto py-16">
        <h2 className="uppercase font-bold text-2xl tracking-wide text-green-700">
          THE BUILDING BLOCKS OF YOUR SUCCESS
        </h2>
        <p className="py-7 text-base-400">
          At Prologis we do things differently. We take the time to listen to
          you and understand your needs because we know that success means
          paying attention to the things that really matter.
        </p>
        <p className="text-base-400">
          See how we can help you stay ahead of what's next.
        </p>
        <div className="grid gap-4 mt-7 grid-cols-2">
          {data.map((d) => (
            <div
              key={d.id}
              className={` bg-${d.image} flex items-center justify-center h-52 font-bold text-white bg-overlay no-overlay`}
            >
              {d.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blocks;
