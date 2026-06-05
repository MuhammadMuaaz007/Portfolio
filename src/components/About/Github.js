import { Row } from "react-bootstrap";

import React, { useState, useEffect } from "react";

// Simple contribution heatmap renderer using GitHub GraphQL
function Github() {
  const USERNAME = "MuhammadMuaaz007";
  const YEAR = new Date().getFullYear();
  const token = process.env.REACT_APP_GITHUB_TOKEN;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weeks, setWeeks] = useState([]); // array of weeks -> days

  useEffect(() => {
    async function fetchContributions() {
      setLoading(true);
      setError(null);

      if (!token) {
        setError(
          "No GitHub token found. Add REACT_APP_GITHUB_TOKEN to .env and restart.",
        );
        setLoading(false);
        return;
      }

      const from = `${YEAR}-01-01T00:00:00Z`;
      const to = `${YEAR}-12-31T23:59:59Z`;

      const query = `query($login:String!, $from:DateTime!, $to:DateTime!){\n  user(login:$login){\n    contributionsCollection(from:$from, to:$to){\n      contributionCalendar{\n        totalContributions\n        weeks{\n          contributionDays{\n            date\n            contributionCount\n          }\n        }\n      }\n    }\n  }\n}`;

      try {
        // Log masked token presence for debugging (never log full token)
        if (token) {
          try {
            const masked = `${token.slice(0, 6)}...${token.slice(-4)}`;
            console.log("Using GitHub token:", masked);
          } catch (e) {
            console.log("GitHub token present (unable to mask)");
          }
        } else {
          console.log("No GitHub token provided in environment");
        }

        const res = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
          body: JSON.stringify({
            query,
            variables: { login: USERNAME, from, to },
          }),
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`GitHub API error: ${res.status} ${text}`);
        }

        const json = await res.json();
        if (json.errors) {
          throw new Error(json.errors.map((e) => e.message).join("; "));
        }

        const calendar =
          json.data.user.contributionsCollection.contributionCalendar;
        const fetchedWeeks = calendar.weeks.map((w) => w.contributionDays);
        setWeeks(fetchedWeeks);
      } catch (err) {
        console.error("Failed to fetch contributions:", err);
        setError(err.message || String(err));
      } finally {
        setLoading(false);
      }
    }

    fetchContributions();
  }, [token, YEAR]);

  // compute flat max for scaling
  const allCounts = weeks.flat().map((d) => d.contributionCount || 0);
  const max = allCounts.length ? Math.max(...allCounts) : 0;

  const getColor = (count) => {
    if (count <= 0) return "#c7c3da";
    if (max === 0) return "#7c3aed";
    const ratio = count / max;
    if (ratio < 0.2) return "#d8b4fe";
    if (ratio < 0.4) return "#c084f5";
    if (ratio < 0.6) return "#a855c5";
    if (ratio < 0.8) return "#7c3aed";
    return "#5b21b6";
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "1200px" }}>
          {loading && <p style={{ color: "#c770f0" }}>Loading calendar...</p>}
          {error && (
            <p style={{ color: "#ff6b6b" }}>
              Unable to fetch contribution data: {error}
            </p>
          )}

          {!loading && !error && (
            <div
              style={{
                overflowX: "auto",
                width: "100%",
                paddingBottom: "12px",
              }}
            >
              <div style={{ display: "flex", gap: 8, minWidth: "fit-content" }}>
                {weeks.map((week, wi) => (
                  <div
                    key={wi}
                    style={{ display: "flex", flexDirection: "column", gap: 8 }}
                  >
                    {week.map((day) => (
                      <div
                        key={day.date}
                        title={`${day.date}: ${day.contributionCount} contributions`}
                        style={{
                          width: 22,
                          height: 22,
                          background: getColor(day.contributionCount),
                          borderRadius: 4,
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Row>
  );
}

export default Github;
