import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"

export async function GET() {
  const client = await clientPromise
  const db = client.db("taskmanager")
  const tasks = await db.collection("tasks").find({}).toArray()
  return NextResponse.json(tasks)
}

export async function POST(request: Request) {
  const client = await clientPromise
  const db = client.db("taskmanager")
  const { title, description } = await request.json()
  const result = await db.collection("tasks").insertOne({ title, description, completed: false })
  return NextResponse.json(result)
}

export async function PUT(request: Request) {
  const client = await clientPromise
  const db = client.db("taskmanager")
  const { id, title, description, completed } = await request.json()
  const result = await db
    .collection("tasks")
    .updateOne({ _id: new ObjectId(id) }, { $set: { title, description, completed } })
  return NextResponse.json(result)
}

export async function DELETE(request: Request) {
  const client = await clientPromise
  const db = client.db("taskmanager")
  const { id } = await request.json()
  const result = await db.collection("tasks").deleteOne({ _id: new ObjectId(id) })
  return NextResponse.json(result)
}

