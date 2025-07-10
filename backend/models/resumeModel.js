import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    thumbnailLink: {
        type: String,
    },
    template :{
      theme :String,
      colorPalette :[String],
    },
    personalInfo: {
      profilePreviewUrl: String,
      fullname:String,
      designation:String,
      summary:String,

    },

    contactInfo: {
      email:String,
      phone:String,
      location:String,
      linkedin:String,
      github:String,
      website:String,
    },

    //work experience
    workExperience: [{
      companyName:String,
      role:String,
      startDate:String,
      endDate:String,
      description:String,
    }],

    //education
    education: [{
      degree:String,
      institution:String,
      startDate:String,
      endDate:String,
    }],

    //skills
    skills: [{
      name:String,
      progress:Number,
    }],

    //projects
    projects: [{
      title:String,
      description:String,
      github:String,
      liveDemo:String,
    }],

    //certifications
    certifications: [{
      title:String,
      issuer:String,
      year:String,
    }],

    //languages
    languages: [{
      name:String,
      progress:Number,
    }],

    //interests   
    interests:[String],

},

      {
             timestamps:{ createdAt:"createdAt", updatedAt:"updatedAt" }    

      }
);

// Use model re-registration to avoid OverwriteModelError in dev/hot-reload
const Resume = mongoose.models.Resume || mongoose.model('Resume', ResumeSchema);
export default Resume;