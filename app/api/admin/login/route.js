import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();
  console.log(email,password)
  if (email == "admin@gmail.com" && password == "gdgc@0088") {
    try {
      return NextResponse.json(
        { message: "Login Successfully" },
        { status: 200 }
        
      );
    } catch (error) {
      return NextResponse.json(
        { message: "Login Failed" },
        { status: 401 }
      );
    }
  }
  else{
    return NextResponse.json(
        { message: "Login Failed" },
        { status: 404 }
        
      );
  }
}
