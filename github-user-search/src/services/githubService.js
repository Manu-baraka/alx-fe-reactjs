import axios from "axios";

export async function fetchUserData(username) {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
}
        {/* Form with input and button */}

        
// src/services/githubService.js
import axios from "axios";

export async function fetchAdvancedUsers(username, location, minRepos) {
  // Build query string
  let query = "";
  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return response.data; // contains { items: [...] }
}