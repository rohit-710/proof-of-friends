import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateRandomMetadata = async () => {
  const prompt =
    "Generate a random event description for a meetup in Brussels with a place, date, time, and activity. Format the response as JSON with fields 'place', 'date', 'time', and 'activity'.";
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 64,
  });

  const eventDescription = response.choices?.[0]?.message?.content?.trim();

  if (!eventDescription) {
    throw new Error("Invalid response from OpenAI");
  }

  console.log("OpenAI Response:", eventDescription); // Log OpenAI response
  const eventDetails = JSON.parse(eventDescription);

  const metadata = {
    name: "Random Brussels Event",
    image: `https://base-frame-xi.vercel.app/9.png`,
    description: `An event at ${eventDetails.place} on ${eventDetails.date} at ${eventDetails.time} for ${eventDetails.activity}.`,
    attributes: [
      { trait_type: "Place", value: eventDetails.place },
      { trait_type: "Date", value: eventDetails.date },
      { trait_type: "Time", value: eventDetails.time },
      { trait_type: "Activity", value: eventDetails.activity },
    ],
  };

  return metadata;
};

export async function POST(request: Request) {
  const { recipientAddress } = await request.json();
  console.log("Recipient Address:", recipientAddress); // Log recipient address

  const crossmintURL = `https://staging.crossmint.com/api/2022-06-09/collections/${process.env.NEXT_PUBLIC_CROSSMINT_COLLECTION_ID}/nfts`;

  try {
    const metadata = await generateRandomMetadata();
    console.log("Metadata:", metadata); // Log metadata

    const response = await fetch(crossmintURL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "x-client-secret": process.env.CROSSMINT_API_KEY!,
      },
      body: JSON.stringify({
        recipient: recipientAddress,
        metadata: metadata,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json(data, { status: 200 });
    } else {
      const errorData = await response.json();
      console.log("Crossmint API Error:", errorData); // Log Crossmint API error
      return NextResponse.json(errorData, { status: response.status });
    }
  } catch (error) {
    console.log("Server Error:", error); // Log server error
    return NextResponse.json({ error: "Failed to mint NFT." }, { status: 500 });
  }
}
