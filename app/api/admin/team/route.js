import { NextResponse } from "next/server";
import { User } from "../../../../models/Schema";
import { connectToDatabase } from "@/lib/db";

export async function POST(req) {
  const { name, domain, bio, file, instagram, github, linkedin } =
    await req.json();
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

export async function DELETE(req) {
  const { id } = await req.json();
  try {
    connectToDatabase();

    await User.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Team deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete team" },
      { status: 400 }
    );
  }
}
