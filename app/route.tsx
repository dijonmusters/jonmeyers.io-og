import Image from "next/image";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  const title = searchParams.get("title");

  const boldFont = await fetch(
    new URL("./Geist-Bold.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  // const regularFont = await fetch(
  //   new URL("./Geist-Regular.otf", import.meta.url)
  // ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        tw="text-white p-1 w-full h-full flex flex-col"
        style={{
          backgroundImage: "linear-gradient(to right, #7928ca, #ff0080)",
        }}
      >
        <h1 tw="bg-gray-900 p-16 flex-1 flex items-center text-7xl leading-snug m-0">
          {title}
        </h1>
        <div tw="flex bg-gray-900 p-16">
          <Image
            src="/profile.png"
            width="120"
            height="120"
            tw="rounded-full"
            alt="Logo of cartoon version of Jon Meyers"
          />
          <div tw="ml-8 text-4xl flex flex-col justify-center">
            <span tw="block">Jon Meyers</span>
            <span tw="block text-indigo-400 font-semibold">@jonmeyers_io</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist-Bold",
          data: boldFont,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
