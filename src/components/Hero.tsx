import Image from "next/future/image";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-0">
      <div className="max-w-sm">
        <h1 className="text-4xl font-bold">Lark</h1>
        <h2 className="text-xl font-semibold mb-3">
          Self-taught Frontend Developer
        </h2>
        <p>
          Learning Frontend web development, serverless, and React/ Next.js{" "}
        </p>
      </div>
      <Image
        src="/hero.jpg"
        alt="me"
        width={160}
        height={160}
        className="w-20 sm:w-32 aspect-square object-cover object-center rounded-full"
      />
    </section>
  );
}
