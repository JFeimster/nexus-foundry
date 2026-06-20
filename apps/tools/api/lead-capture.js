// Simple Next.js/Vercel API Route
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const lead = req.body;
  // TODO: Add logic to push to CRM (HubSpot/GoHighLevel)
  console.log("LEAD_CAPTURED_IN_SYSTEM:", lead);
  res.status(200).json({ success: true, message: "Lead processed." });
}// API handler scaffolding
