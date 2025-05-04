// src/utils/aiUtils.js
export const defaultSuggestions = [
  "expiring contracts in 30 days",
  "current procurement methods",
  "budget utilization by department",
  "pending purchase orders",
  "contracts in pipeline pending legal review and approval",
  "show all active projects",
  "budget variance last quarter",
  "spending trend YTD",
  "vendor renewal status"
];

export const fakeAIQuery = async (input) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Insight: Found 3 results for "${input}"`);
    }, 1500);
  });
};
