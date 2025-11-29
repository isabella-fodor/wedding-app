import { NextRequest, NextResponse } from "next/server";
import { supabase, isSupabaseConfigured } from "@/lib/supabase/client";

export async function GET(request: NextRequest) {
  try {
    if (!isSupabaseConfigured) {
      return NextResponse.json(
        { error: "Server not properly configured" },
        { status: 500 }
      );
    }

    // Check authorization header
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.substring(7);

    // Simple token validation (in production, use JWT)
    const adminToken = process.env.ADMIN_TOKEN;
    if (token !== adminToken) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    // Get query parameters for filtering
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const orderBy = searchParams.get("orderBy") || "submitted_at";
    const order = searchParams.get("order") || "desc";

    let query = supabase.from("rsvps").select("*");

    if (status && status !== "ALL") {
      query = query.eq("status", status);
    }

    const { data, error } = await query.order(orderBy, {
      ascending: order === "asc",
    });

    if (error) {
      throw error;
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Admin API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
