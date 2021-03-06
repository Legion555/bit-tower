import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {type: String, default: 'admin'}
});

export default mongoose.models.Admin || mongoose.model('Admin', AdminSchema)