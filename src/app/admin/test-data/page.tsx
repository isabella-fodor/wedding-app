"use client";

import { useEffect, useState } from "react";

interface RSVP {
  id: string;
  full_name: string;
  email: string | null;
  phone: string | null;
  status: string;
  people_count: number;
  menu_option: string | null;
  comment: string | null;
  submitted_at: string;
}

export default function TestDataPage() {
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRsvps = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("adminToken") || "";
      const url = new URL("/api/admin/rsvps", window.location.origin);
      const res = await fetch(url.toString(), {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Failed to fetch");
      setRsvps(json.data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRsvps();
     
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Ștergeți acest RSVP?")) return;
    const token = localStorage.getItem("adminToken") || "";
    try {
      const res = await fetch('/api/admin/rsvps', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ id }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || 'Delete failed');
      // refresh
      fetchRsvps();
      const mod = await import("@/components/Toast");
      mod.toast("RSVP șters cu succes", "success");
    } catch (err) {
      const mod = await import("@/components/Toast");
      mod.toast(err instanceof Error ? err.message : String(err), "error");
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Test Data</h2>
        {loading && <p>Se încarcă...</p>}
        {error && <p className="text-red-600">{error}</p>}

        <div className="overflow-x-auto bg-white rounded-lg shadow p-4">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-2 text-left">Nume</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Persoane</th>
                <th className="p-2 text-left">Email</th>
                <th className="p-2 text-left">Comentariu</th>
                <th className="p-2 text-left">Acțiuni</th>
              </tr>
            </thead>
            <tbody>
              {rsvps.map((r) => (
                <tr key={r.id} className="border-t">
                  <td className="p-2">{r.full_name}</td>
                  <td className="p-2">{r.status}</td>
                  <td className="p-2">{r.people_count}</td>
                  <td className="p-2">{r.email || '-'}</td>
                  <td className="p-2 truncate max-w-xs">{r.comment || '-'}</td>
                  <td className="p-2">
                    <button onClick={() => handleDelete(r.id)} className="px-3 py-1 rounded bg-red-600 text-white">Șterge</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
