import SanityClient from "next-sanity-client";
// import sanityClient from "@sanity/client"

const sanityClient = new SanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET as string,
  useCdn: process.env.NODE_ENV === "production",
  // token: process.env.SANITY_TOKEN,
  // token: "sanity-auth-token",
});

export default sanityClient;
