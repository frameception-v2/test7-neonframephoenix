import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      message: {
        domain: "neonframephoenix.vercel.app",
        timestamp: 1738078696,
        expirationTime: 1745854696
      },
      signature: "0c34ca0bcd4eb0aa2fe9b844b93faa8f8e4a96707296bbd6b0d16cae2782960626426e156d93d17a9e1a3513c3c82245d00095d7851e2702cd9507a8180479ab1c",
      signingKey: "ffef9e2e56e9d56bf326f8c002ec49c20cad87a3a860f7bd882db752d99cba0d"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
