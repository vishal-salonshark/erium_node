import User from "@models/user";
import dbConnect from "@database/dbConnect";
import { NextResponse } from 'next/server';
 
export async function POST(req) {

    console.log("this is api call")

    dbConnect();

    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });
    
    return NextResponse.json(user);
  
}