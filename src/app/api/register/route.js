import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const data = await req.json();

    const client = await clientPromise;
    const db = client.db("eventDB"); // change this to your DB name
    const collection = db.collection("registrations");

    await collection.insertOne(data);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error saving registration:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
