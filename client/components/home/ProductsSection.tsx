import { toast } from "sonner";

const PRODUCTS = [
  {
    name: "Green Detox",
    description:
      "A crisp green blend with cooling herbs and a clean, spa-like finish.",
    price: "$20",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/15a78033521f970a59b010a94d7a852b8c8bc70a?width=756",
  },
  {
    name: "Surya",
    description:
      "A bright, clean citrus pour softened with coconut water and basil.",
    price: "$20",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/b9f0026c2b3d55d795608777f2a764cf90e61a6c?width=756",
  },
  {
    name: "5 Day Bundle",
    description: "Five-day guided juice plan that fits your pace.",
    price: "$100",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/2ccf411aea7999043670db24d9f76302c02a8ef3?width=756",
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-brand-cream px-6 py-20 sm:px-10 lg:px-[102px] lg:py-28">
      <h2 className="font-display italic text-5xl leading-tight tracking-tight text-black sm:text-6xl lg:text-[70px]">
        Revitalize your routine
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <div
            key={product.name}
            className="flex flex-col overflow-hidden rounded-[32px] border-2 border-brand-forest"
          >
            <img
              src={product.image}
              alt={product.name}
              className="aspect-[67/81] w-full object-cover"
            />
            <div className="flex flex-1 flex-col gap-6 px-5 py-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-3xl font-semibold tracking-tight text-black">
                  {product.name}
                </h3>
                <p className="text-lg text-brand-moss">
                  {product.description}
                </p>
              </div>
              <div className="mt-auto flex items-center justify-between gap-4">
                <span className="text-3xl font-bold tracking-tight text-black">
                  {product.price}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    toast.success(`${product.name} added to cart`)
                  }
                  className="rounded-full border-4 border-brand-forest bg-brand-forest px-6 py-3 text-xl font-medium text-white transition-opacity hover:opacity-90"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
