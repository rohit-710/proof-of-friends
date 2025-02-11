import Link from "next/link";

const PageLayout = ({ title }: { title?: string }) => {
  return (
    <>
      <link rel="icon" type="image/x-icon" href="/favicon.jpeg" />
      <title>
        {title ? `${title} | ` : ""}
        Proof of Friends
      </title>

      <div className="pt-10 mb-10 grid place-items-center">
        <Link href="/" passHref>
          <img src="/pof.svg" alt="" />
        </Link>

        <p className="mx-2 text-xl mt-10 h-20 text-white">{title}</p>
      </div>
    </>
  );
};

export default PageLayout;
