import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  selectedFile: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  likeCount: {
    type: Number,
    default: 0,
    required: true,
  }
});

const PostSchema = mongoose.model('PostSchema', postSchema);

export default PostSchema;
