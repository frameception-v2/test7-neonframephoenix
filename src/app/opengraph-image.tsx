import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export const alt = "NeonFramePhoenix - Cyberpunk Farcaster Frame";
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center relative bg-black">
        <div tw="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-500/20" />
        <h1 tw="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 drop-shadow-lg">
          {PROJECT_TITLE}
        </h1>
        <h3 tw="mt-4 text-xl text-cyan-300 text-center max-w-md px-4">
          {PROJECT_DESCRIPTION}
        </h3>
      </div>
    ),
    {
      ...size,
    }
  );
}
