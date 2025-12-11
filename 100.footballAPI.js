const apiKey = "Ooh! my API key 😱 Im so damn 🤫"; // X-RapidAPI-Key
const host = "api-football-v1.p.rapidapi.com";

async function fetchFootball(endpoint, params = {}) {
  const url = new URL(`https://${host}/v3/${endpoint}`);
  Object.entries(params).forEach(([k, v]) => url.searchParams.append(k, v));

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": host
    }
  });

  if (!res.ok) throw new Error(`API Error: ${res.status}`);
  return res.json();
}

// EXAMPLES:

// 1. All leagues
fetchFootball("leagues").then(console.log);

// 2. All teams in Premier League 2024
fetchFootball("teams", { league: 39, season: 2024 }).then(console.log);

// 3. Player stats for Haaland
fetchFootball("players", { id: 154, season: 2024 }).then(console.log);

// 4. All fixtures today
fetchFootball("fixtures", { date: "2024-12-11" }).then(console.log);
