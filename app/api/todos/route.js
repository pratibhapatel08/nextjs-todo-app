import db from "@/lib/db";

export async function GET(){
    try{
        const [todos] = await db.query("SELECT * from todos ORDER BY id DESC");
        return Response.json(todos);
    }catch(error){
        return Response.json(
            {error: "Failed to fetch todos"}, 
            {status: 500})
    }
}





