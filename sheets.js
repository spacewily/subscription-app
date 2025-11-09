const { google } = require("googleapis");
const credentials = require("./subscribers-477711-9f8ce0569bb4.json"); // your downloaded JSON

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

const SPREADSHEET_ID = "1MQRqwOA22285nbbg6FwRntLbr2ehRBmfskscj0cw6Sw"; // from the sheet URL

async function addSubscriber(email) {
  const timestamp = new Date().toISOString();
  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: "Subscribers!A:B",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[email, timestamp]],
    },
  });
}

module.exports = { addSubscriber };
