import { model, Schema } from "mongoose";

const repliesSchema = new Schema({
    reply: String,
    threadId: {type: Schema.Types.ObjectId, ref: "Thread"}
})

export const Reply = model("Reply", repliesSchema)