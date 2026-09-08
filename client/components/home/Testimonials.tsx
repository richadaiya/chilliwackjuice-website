const REVIEW_TEXT =
  "The staff are really friendly and were very patient while serving a senior customer who was ahead of me. They had a lot of questions and comments about the drinks and food, and the staff handled it all with a smile.";

const TESTIMONIALS = [
  { name: "Anna K" },
  { name: "Anna K" },
  { name: "Anna K" },
  { name: "Anna K" },
];

function Star() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.62L2 9.24L7.45 13.97L5.82 21L12 17.27Z"
        fill="#2F5207"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-brand-cream py-20 lg:py-28">
      <div className="px-6 sm:px-10 lg:px-[102px]">
        <h2 className="font-display italic text-5xl leading-tight tracking-tight text-black sm:text-6xl lg:text-[70px]">
          Opinions you can trust
        </h2>
      </div>

      <div className="mt-16 flex gap-8 overflow-x-auto px-6 pb-4 [scrollbar-width:none] sm:px-10 lg:px-[102px] [&::-webkit-scrollbar]:hidden">
        {TESTIMONIALS.map((review, i) => (
          <div
            key={i}
            className="flex w-[300px] shrink-0 flex-col gap-6 rounded-[30px] bg-brand-sage p-8 sm:w-[380px] lg:w-[430px]"
          >
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} />
              ))}
            </div>
            <span className="text-sm font-medium tracking-tight text-[#497330]">
              {review.name}
            </span>
            <p className="text-lg leading-relaxed tracking-tight text-black">
              {REVIEW_TEXT}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
