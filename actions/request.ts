'use server'
import { MongoClient, MongoClientOptions, TopologyClosedEvent, TopologyType } from "mongodb";
import FormData from "./types/formData";
import crypto from "crypto"
export async function createRequest(data: FormData) {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    try {
        const database = client.db('armn');
        const requests = database.createCollection('requests');
        (await requests).insertOne({
            email: data.email,
            subyekt: data.subyekt,
            mesaj: data.mesaj
        })
    }
    catch{

    }
}