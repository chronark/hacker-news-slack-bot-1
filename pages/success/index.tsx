import Head from "next/head";

export default function Success() {
  return (
    <div>
      <Head>
        <title>Installation Successful</title>
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-3xl font-bold">Installation Successful</h1>
      </main>
    </div>
  );
}
