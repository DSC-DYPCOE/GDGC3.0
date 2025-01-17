import mongoose,{Schema,model} from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  domain: { type: String, required: true },
  bio: { type: String, required: true },
  file: { type: String, required: false },
  instagram: { type: String, required: false },
  github: { type: String, required: false },
  linkedin: { type: String, required: false },
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);

const projectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  file: { type: String, required: true },
  link: { type: String, required: true }
});


export const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);



