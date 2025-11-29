import { NextRequest, NextResponse } from "next/server";
import { supabase, isSupabaseConfigured } from "@/lib/supabase/client";
import jwt from "jsonwebtoken";

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

    // Try to validate as JWT first, fall back to legacy ADMIN_TOKEN env if set
    const SECRET = process.env.JWT_SECRET_KEY;
    let valid = false;
    if (SECRET) {
      try {
        jwt.verify(token, SECRET);
        valid = true;
      } catch (e) {
        // ignore
      }
    }

    if (!valid && process.env.ADMIN_TOKEN) {
      if (token === process.env.ADMIN_TOKEN) valid = true;
    }

    if (!valid) {
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

export async function DELETE(request: NextRequest) {
  try {
    if (!isSupabaseConfigured) {
      return NextResponse.json(
        { error: "Server not properly configured" },
        { status: 500 }
      );
    }

    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.substring(7);
    const SECRET = process.env.JWT_SECRET_KEY;
    let valid = false;
    if (SECRET) {
      try {
        jwt.verify(token, SECRET);
        valid = true;
      } catch (e) {
        // ignore
      }
    }
    if (!valid && process.env.ADMIN_TOKEN) {
      if (token === process.env.ADMIN_TOKEN) valid = true;
    }
    if (!valid) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const body = await request.json();
    const id = body?.id;
    if (!id) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    const { data, error } = await supabase.from("rsvps").delete().eq("id", id).select();
    if (error) {
      throw error;
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Admin API DELETE error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
