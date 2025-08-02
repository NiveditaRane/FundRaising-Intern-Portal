const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;


app.use(cors());

// In-memory dummy data of interns
const interns = [
  { name: "Nivedita Rane", referral: "nivedita2025", donation: 1200 },
  { name: "Rajesh Kumar", referral: "rajesh2025", donation: 1100 },
  { name: "Sunita Sharma", referral: "sunita2025", donation: 900 },
  { name: "Amit Patel", referral: "amit2025", donation: 800 },
  { name: "Priya Singh", referral: "priya2025", donation: 750 }
];


// API endpoint to get intern data by referral code
app.get("/api/intern", (req, res) => {
  const referralQuery = req.query.referral;
  console.log("Referral query received:", referralQuery);

  if (!referralQuery) {
    return res.status(400).json({ error: "Referral code is required" });
  }
  const intern = interns.find(
    (i) => i.referral.toLowerCase() === referralQuery.toLowerCase()
  );

  console.log("Found intern:", intern);

  if (!intern) {
    return res.status(404).json({ error: "Intern not found" });
  }
  res.json(intern);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
