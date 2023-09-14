import { ProfileData } from "../../../types/profile.data.type";

function ProfileTemplate({ profileData, isLoaded}: { profileData: ProfileData, isLoaded: boolean}) {
    if(!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <>
            <h1>Profile</h1>
            <h2>{profileData.username}</h2>
            </>
        );
    }
}

export default ProfileTemplate;