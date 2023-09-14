import { useEffect, useState } from "react";
import ProfileTemplate from "../../templates/profile-template/profile-template";
import { useLoaderData } from "react-router-dom";
import { ProfileData } from "../../../types/profile.data.type";

function ProfilePage() {
    const [profileData, setProfileData] = useState({ firstName: "", lastName: "", username: "", description: "", picture: ""});
    const [isLoaded, setIsLoaded] = useState(false);

    const loaderData = useLoaderData() as ProfileData;

    useEffect(() => {
        setIsLoaded(true);
        setProfileData(loaderData);
    }, []);
    
    return (
        <ProfileTemplate profileData={profileData} isLoaded={isLoaded} />
    );
}

export default ProfilePage;