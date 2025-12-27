import { NextRequest } from "next/server";

const users = [
    { "id": 1, "name": "Akhil Sharma", "email": "akhil.sharma@example.com" },
    { "id": 2, "name": "Neha Verma", "email": "neha.verma@example.com" },
    { "id": 3, "name": "Rahul Mehta", "email": "rahul.mehta@example.com" },
    { "id": 4, "name": "Priya Singh", "email": "priya.singh@example.com" },
    { "id": 5, "name": "Ankit Patel", "email": "ankit.patel@example.com" }
]


export async function GET() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Response(JSON.stringify(users), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            }));
        } , 2000);
    });
}

export async function POST(request: NextRequest){
    const body = await request.json();
    const newUser = {
        id: users.length + 1,
        name: body.name,
        email: body.email
    };
    users.push(newUser);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return new Response(JSON.stringify(newUser), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
    });
}