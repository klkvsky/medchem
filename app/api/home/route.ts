import { getHomePageData } from "./data";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await getHomePageData();

    if (!data) {
      return Response.json(
        { error: "Home page content was not found." },
        { status: 404 },
      );
    }

    return Response.json({ data });
  } catch (error) {
    console.error("Failed to fetch home page content.", error);

    return Response.json(
      { error: "Unable to load home page content." },
      { status: 500 },
    );
  }
}
