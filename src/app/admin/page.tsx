"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { weddingConfig } from "@/wedding.config";

interface RSVP {
  id: string;
  full_name: string;
  email: string | null;
  phone: string | null;
  status: "YES" | "NO" | "MAYBE";
  people_count: number;
  menu_option: string | null;
  comment: string | null;
  submitted_at: string;
}

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<"ALL" | "YES" | "NO" | "MAYBE">("ALL");
  const [token, setToken] = useState("");

  // Check for existing token
  useEffect(() => {
    const savedToken = localStorage.getItem("adminToken");
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
      fetchRsvps(savedToken);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        throw new Error("Invalid password");
      }

      const data = await response.json();
      localStorage.setItem("adminToken", data.token);
      setToken(data.token);
      setIsAuthenticated(true);
      setPassword("");
      fetchRsvps(data.token);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  const fetchRsvps = async (authToken: string) => {
    setLoading(true);
    try {
      const url = new URL("/api/admin/rsvps", window.location.origin);
      url.searchParams.set("status", filter);

      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${authToken}` },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch RSVPs");
      }

      const data = await response.json();
      setRsvps(data.data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch RSVPs");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setToken("");
    setIsAuthenticated(false);
    setRsvps([]);
  };

  const handleFilterChange = (newFilter: typeof filter) => {
    setFilter(newFilter);
    if (token) {
      fetchRsvps(token);
    }
  };

  const exportToCSV = () => {
    const headers = [
      "Nume",
      "Email",
      "Telefon",
      "Status",
      "Număr persoane",
      "Meniu",
      "Comentariu",
      "Data",
    ];
    const rows = rsvps.map((rsvp) => [
      rsvp.full_name,
      rsvp.email || "",
      rsvp.phone || "",
      rsvp.status === "YES" ? "VIN" : rsvp.status === "NO" ? "NU VIN" : "INCERT",
      rsvp.people_count,
      rsvp.menu_option || "",
      rsvp.comment || "",
      new Date(rsvp.submitted_at).toLocaleDateString("ro-RO"),
    ]);

    const csv =
      [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `rsvp_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-bold mb-6 text-center" style={{ color: weddingConfig.colors.secondary }}>
            Admin Panel
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-semibold mb-2">
                Parolă
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                placeholder="Introduceți parola admin"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-4 rounded-lg font-semibold text-white transition-all"
              style={{ backgroundColor: weddingConfig.colors.primary }}
            >
              {loading ? "Se conectează..." : "Conectare"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const yesCount = rsvps.filter((r) => r.status === "YES").reduce((sum, r) => sum + r.people_count, 0);
  const noCount = rsvps.filter((r) => r.status === "NO").length;
  const maybeCount = rsvps.filter((r) => r.status === "MAYBE").length;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold" style={{ color: weddingConfig.colors.secondary }}>
            Admin Panel
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors"
          >
            Deconectare
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm">Total răspunsuri</p>
            <p className="text-3xl font-bold mt-2">{rsvps.length}</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm">Vin (persoane)</p>
            <p className="text-3xl font-bold mt-2 text-green-600">{yesCount}</p>
          </div>
          <div className="bg-red-50 p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm">Nu vin</p>
            <p className="text-3xl font-bold mt-2 text-red-600">{noCount}</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm">Incert</p>
            <p className="text-3xl font-bold mt-2 text-yellow-600">{maybeCount}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <div className="flex gap-2 flex-wrap">
              {(["ALL", "YES", "NO", "MAYBE"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => handleFilterChange(f)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    filter === f
                      ? "text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  style={{
                    backgroundColor: filter === f ? weddingConfig.colors.primary : undefined,
                  }}
                >
                  {f === "YES" ? "VIN" : f === "NO" ? "NU VIN" : f === "MAYBE" ? "INCERT" : "TOTI"}
                </button>
              ))}
            </div>
            <button
              onClick={exportToCSV}
              className="px-4 py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Export CSV
            </button>
          </div>
        </div>

        {/* RSVPs Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead style={{ backgroundColor: weddingConfig.colors.lightBg }}>
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Nume</th>
                  <th className="px-4 py-3 text-left font-semibold">Status</th>
                  <th className="px-4 py-3 text-left font-semibold">Persoane</th>
                  <th className="px-4 py-3 text-left font-semibold">Meniu</th>
                  <th className="px-4 py-3 text-left font-semibold">Contact</th>
                  <th className="px-4 py-3 text-left font-semibold">Comentariu</th>
                  <th className="px-4 py-3 text-left font-semibold">Data</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                      Se încarcă...
                    </td>
                  </tr>
                ) : rsvps.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                      Niciun răspuns
                    </td>
                  </tr>
                ) : (
                  rsvps.map((rsvp) => (
                    <tr key={rsvp.id} className="border-t hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold">{rsvp.full_name}</td>
                      <td className="px-4 py-3">
                        <span
                          className="px-3 py-1 rounded-full text-sm font-semibold text-white"
                          style={{
                            backgroundColor:
                              rsvp.status === "YES"
                                ? "#10b981"
                                : rsvp.status === "NO"
                                  ? "#ef4444"
                                  : "#f59e0b",
                          }}
                        >
                          {rsvp.status === "YES" ? "VIN" : rsvp.status === "NO" ? "NU" : "INCERT"}
                        </span>
                      </td>
                      <td className="px-4 py-3">{rsvp.people_count}</td>
                      <td className="px-4 py-3 text-sm">{rsvp.menu_option || "-"}</td>
                      <td className="px-4 py-3 text-sm">
                        {rsvp.email && <div>{rsvp.email}</div>}
                        {rsvp.phone && <div>{rsvp.phone}</div>}
                        {!rsvp.email && !rsvp.phone && "-"}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 max-w-xs truncate">
                        {rsvp.comment || "-"}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        {new Date(rsvp.submitted_at).toLocaleDateString("ro-RO")}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
