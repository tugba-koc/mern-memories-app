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
  likeCount: {
    type: String,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostSchema = mongoose.model('PostSchema', postSchema);

export default PostSchema;
