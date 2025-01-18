import { NextResponse } from "next/server";
import { Project } from "../../../../models/Schema";
import { connectToDatabase } from "@/lib/db";

export async function POST(req) {
  const { title, description, file, link } = await req.json();
  connectToDatabase();

  const project = new Project({
    title,
    description,
    file,
    link,
  });
  try {
    await project.save();
    return NextResponse.json(
      { message: "Project created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create project" },
      { status: 400 }
    );
  }
}

export async function GET() {
  try {
    connectToDatabase();

    const projects = await Project.find();
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch projects" },
      { status: 400 }
    );
  }
}

export async function DELETE(req) {
  try {
    connectToDatabase();
    const { searchParams } = new URL(req.url); // For query parameter
    const id = searchParams.get("id");

    await Project.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Project deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete project" },
      { status: 400 }
    );
  }
}
