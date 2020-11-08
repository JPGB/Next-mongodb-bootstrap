import { connectToDatabase } from '../../../util/mongodb'

export default async function handle (req, res) {

    const { client, db } = await connectToDatabase()

    const isConnected = await client.isConnected()

    if(isConnected){
        
        await db.collection('pets').insertOne({
            nome : "fofa",
            fome: "maisoumenos"
        });

        res.status(200).json({"success":"inserido com sucesso!"})

    }else{
        res.status(404).json({"error":"erro ao conectar!"})
    }
    
}
