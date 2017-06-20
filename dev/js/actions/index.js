/**
 * Created by sandeepj on 20/6/17.
 */
export const selectUser = (user)=>{
        console.log("You clicked on user: ", user.first);
        return{
            type: "USER_SELECTED",
            payload: user
        }
}
