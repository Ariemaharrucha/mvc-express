import { model, Schema } from "mongoose";

const threadSchema = new Schema({
    content: String,
    userId: {type: Schema.Types.ObjectId, ref: "User"}
})

export const Thread = model("Thread", threadSchema)