import { NextResponse } from "next/server";
import { User } from "../../../../models/Schema";
import { connectToDatabase } from "@/lib/db";

export async function POST(req) {
  const { name, domain, bio, file, instagram, github, linkedin } =
    await req.json();
    console.log(file)
  connectToDatabase();
  const user = new User({
    name,
    domain,
    bio,
    file,
    instagram,
    github,
    linkedin,
  });
  try {
    await user.save();
    return NextResponse.json(
      { message: "Team created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: "Failed to create team" },
      { status: 400 }
    );
  }
}

export async function GET() {
  try {
    connectToDatabase();

    const teams = await User.find();
    return NextResponse.json(teams, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: "Failed to fetch teams" },
      { status: 400 }
    );
  }
}

export async function DELETE(req,  params ) {
  try {
    // Ensure the database connection is established
    await connectToDatabase();
    const { searchParams } = new URL(req.url); // For query parameter
    const id = searchParams.get("id");
  
    if (!id) {
      return NextResponse.json(
        { message: "ID is required" },
        { status: 400 }
      );
    }

    // Delete the user by ID
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return NextResponse.json(
        { message: "No team found with the provided ID" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Team deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting team:", error);
    return NextResponse.json(
      { message: "Failed to delete team" },
      { status: 500 }
    );
  }
}
