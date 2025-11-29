import { NextRequest, NextResponse } from "next/server";
import { supabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { rsvpFormSchema } from "@/lib/validations/rsvp";

export async function POST(request: NextRequest) {
  try {
    if (!isSupabaseConfigured) {
      return NextResponse.json(
        { error: "Server not properly configured. Please contact the administrator." },
        { status: 500 }
      );
    }

    const body = await request.json();

    // Validate the request body
    const validatedData = rsvpFormSchema.parse(body);

    // Insert into Supabase
    const { error, data } = await supabase
      .from("rsvps")
      .insert([
        {
          full_name: validatedData.fullName,
          email: validatedData.email || null,
          phone: validatedData.phone || null,
          status: validatedData.status,
          people_count: validatedData.peopleCount,
          menu_option: validatedData.menuOption || null,
          comment: validatedData.comment || null,
          submitted_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Eroare la salvarea răspunsului. Vă rugăm să încercați din nou." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data },
      { status: 201 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Eroare la procesarea cererii" },
      { status: 400 }
    );
  }
}
