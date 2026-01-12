import mongooose from "mongoose";

const userSchema = new mongooose.Schema(
    {
        name:{
            type: String,
            requied: true,
        },
        email:{
            type: String,
            requied: true,
            unique: true,
        },
        password:{
            type: String,
            required :true,
        }
    },
    {
        timestamps:true,
    }
)

const User = mongooose.model("User", userSchema);

export default User;