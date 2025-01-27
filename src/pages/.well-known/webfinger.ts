const Instance = "mastodon.social";
const Username = "waterfox";

export async function GET() {
	try {
		const response = await fetch(
			`https://${Instance}/.well-known/webfinger?resource=acct:${Username}@${Instance}`,
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return new Response(JSON.stringify(data, null, 2), {
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		console.error("Error:", error);
		return new Response(
			JSON.stringify({ error: "Failed to fetch WebFinger data" }),
			{
				status: 500,
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
	}
}
