"use client";

import React, { useState } from "react";

export default function CareerForm() {
  const [formData, setFormData] = useState({
    skills: "",
    interests: "",
    values: "",
    workStyle: "",
    education: "",
    experienceLevel: "",
    preferredIndustries: "",
    relocate: "",
    age: "",
  });

  const [suggestion, setSuggestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuggestion("");
    setError("");

    try {
      const response = await fetch("/api/suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.suggestion || "Something went wrong.");
        return;
      }

      setSuggestion(data.suggestion);
    } catch (err) {
      console.error("Form error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-12 p-6 border border-black dark:border-gray-50 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-black dark:text-gray-50">
        🎯 Find Your Ideal Career Path
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          rows={2}
          placeholder="Your top skills (e.g. HTML, leadership, writing)..."
          className="w-full p-3 border bg-slate-900 border-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />

        <textarea
          name="interests"
          value={formData.interests}
          onChange={handleChange}
          rows={2}
          placeholder="What do you enjoy? (e.g. tech, art, teaching)..."
          className="w-full p-3 border bg-slate-900 border-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />

        <textarea
          name="values"
          value={formData.values}
          onChange={handleChange}
          rows={2}
          placeholder="What matters to you? (e.g. income, purpose, freedom)..."
          className="w-full p-3 border bg-slate-900 border-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />

        <textarea
          name="workStyle"
          value={formData.workStyle}
          onChange={handleChange}
          rows={2}
          placeholder="Ideal work environment? (e.g. remote, team-based)..."
          className="w-full p-3 border bg-slate-900 border-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />

        <textarea
          name="education"
          value={formData.education}
          onChange={handleChange}
          rows={2}
          placeholder="Your qualification (e.g. BCA, diploma, self-taught)..."
          className="w-full p-3 border bg-slate-900 border-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="preferredIndustries"
          value={formData.preferredIndustries}
          onChange={handleChange}
          placeholder="Preferred industries (e.g. Tech, Healthcare)"
          className="w-full p-3 border bg-slate-900 border-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="text-sm font-medium text-black dark:text-gray-50">Willing to relocate?</span>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="relocate"
              value="Yes"
              onChange={handleChange}
              checked={formData.relocate === "Yes"}
            />
            Yes
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="relocate"
              value="No"
              onChange={handleChange}
              checked={formData.relocate === "No"}
            />
            No
          </label>
        </div>

        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Your age"
          className="w-full p-3 border bg-slate-900 border-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          {loading ? "Analyzing..." : "Get Career Suggestion"}
        </button>
      </form>

      {suggestion && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-300 text-blue-800 rounded-lg">
          <strong>Suggestion:</strong> {suggestion}
        </div>
      )}

      {error && (
        <div className="mt-4 text-red-600 font-medium">{error}</div>
      )}
    </div>
  );
}
