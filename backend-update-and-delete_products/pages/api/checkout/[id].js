

// // import { Place } from "../../../../db/models/Place";
// // import { Comment } from "../../../../db/models/Comment";
// // import connectDB from "../../../../db/connect";
// // import mongoose from "mongoose";

// // export default async function handler(request, response) {
// //   await connectDB();
// //   const { id } = request.query;

// //   if (request.method === "GET") {
// //     const place = await Place.findById(id).populate("comments");

// //     if (!place) {
// //       return response.status(404).json({ status: "Not found" });
// //     }

// //     const comment = place?.comments;
// //     const allCommentIds = comment?.map((comment) => comment.$oid) || [];
// //     // const comments = db_comments.filter((comment) =>
// //     //   allCommentIds.includes(comment._id.$oid)
// //     // );

// //     response.status(200).json({ place: place /*, comments: comments */ });
// //   }

// //   if (request.method === "PATCH") {
// //     const alteredPlace = request.body;
// //     const newPlace = await Place.findByIdAndUpdate(id, {
// //       $set: alteredPlace,
// //     });

// //     response.status(200).json({ status: `Place ${id} updated!` });
// //   }

// //   if (request.method === "POST") {
// //     const commentData = request.body;
// //     const newComment = await Comment.create(commentData);

// //     await Place.findByIdAndUpdate(
// //       id,
// //       { $push: { comments: newComment._id } },
// //       { new: true }
// //     );
// //     response.status(201).json({ status: "Comment posted" });
// //   }

// //   if (request.method === "DELETE") {
// //     const places = await Place.findByIdAndDelete(id);
// //     await Comment.deleteMany({
// //       _id: { $in: places.comments },
// //     });
// //     response.status(200).json({ status: `Place ${id} successfully deleted.` });
// //   }

// //   if (request.method === "PUT") {
// //     await Comment.findByIdAndDelete(request.body);
// //     const deleteId = request.body.toString();
// //     await Place.findByIdAndUpdate(
// //       id,
// //       {
// //         $pull: { comments: deleteId },
// //       },
// //       { new: true }
// //     );
// //     response.status(200).json({ status: "Comment deleted" });
// //   }
// // }
