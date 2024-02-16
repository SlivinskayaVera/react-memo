const URL_API_LEADERBOARD = "https://wedev-api.sky.pro/api/v2/leaderboard";

export async function getLeaders({ setLeadersList }) {
  const response = await fetch(URL_API_LEADERBOARD, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  const sortList = data.leaders.sort((a, b) => (a.time > b.time ? 1 : -1));
  setLeadersList(sortList);
  return sortList;
}

export async function postLeaders({ dataNewLeader }, setLeadersList) {
  const response = await fetch(URL_API_LEADERBOARD, {
    body: JSON.stringify({
      name: dataNewLeader.name,
      time: dataNewLeader.time,
      achievements: dataNewLeader.achievements,
    }),
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  const sortList = data.leaders.sort((a, b) => (a.time > b.time ? 1 : -1));
  setLeadersList(sortList);
  return sortList;
}
