import User from "@/models/user";
import dbConnect from "@/database/dbConnect";
import { NextResponse } from 'next/server';
 
// export async function POST(req) {

//     console.log("this is api call")

//     dbConnect();

//     const { name, email, password } = req.body;

//     const user = await User.create({ name, email, password });
    
//     return NextResponse.json(user);
  
// }
export async function POST(req, res) {
    try {

        const body = await req.json();
        console.log(body)
        await dbConnect();

        // await Contact.create(body);

        return NextResponse.json({
            message:"Message sent successfully!"
        }, {
            status: 200
        })

    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}