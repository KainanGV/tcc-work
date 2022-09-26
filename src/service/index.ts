import fetch from "node-fetch";

const domain = `https://api.the-odds-api.com/v4/sports`;

const apiKey = "ca064fe0fd25cefa94008a3b9a71d454";

const regions = "eu"; // uk | us | eu | au. Multiple can be specified if comma delimited

const markets = "h2h"; // h2h | spreads | totals. Multiple can be specified if comma delimited

export const getData = async (sport: string) => {
  const response = await fetch(
    `${domain}/${sport}/odds/?regions=${regions}&markets=${markets}&apiKey=${apiKey}`,
  );

  return response;
};
